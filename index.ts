/**
 * pi-editor-espanol — extensión de pi
 *
 * Corrector de textos en español contra la norma de la RAE-ASALE.
 * Port de la skill https://github.com/CasaAmarillaRoja/editor-en-espanol
 *
 * Por qué extensión y no solo skill: pi implementa el estándar Agent Skills, así que
 * la skill funciona tal cual apuntando `skills` a su carpeta. Pero una skill depende de
 * que el modelo *decida* leer SKILL.md — la propia documentación de pi lo advierte
 * («models don't always do this»). Esa es justo la apuesta del README de la skill:
 * «lo que el modelo tiene que decidir abrir no se abre». La extensión elimina la
 * decisión: inyecta la norma entera en el contexto de forma determinista.
 *
 * Expone:
 *   /corregir [texto | ruta]   — carga la norma y corrige, sin depender del modelo
 *   corregir_espanol           — herramienta invocable por el modelo
 *   + una nota breve en el prompt de sistema para que sepa que existe
 */

import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, isAbsolute, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { StringEnum } from "@earendil-works/pi-ai";
import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { stripFrontmatter } from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";

const __dirname = dirname(fileURLToPath(import.meta.url));
const RUTA_SKILL = join(__dirname, "SKILL.md");
const RUTA_REFERENCIAS = join(__dirname, "references");

/** Encabezado exacto donde arrancan los 93 calcos: 1600 de las 1716 líneas del fichero. */
const ENCABEZADO_CALCOS = "## Los 93 calcos, con los dos artículos completos";
/** Encabezado que cierra los calcos y devuelve el documento a la parte general. */
const ENCABEZADO_REFERENCIAS = "## Referencias";

const REFERENCIAS = {
	ortotipografia: "norma-ortotipografia.md",
	gramatica: "norma-gramatica.md",
	cursiva: "cursiva-y-comillas.md",
	traduccion: "marcas-de-traduccion.md",
} as const;

type Ambito = "completo" | "norma";

let normaCacheada: string | undefined;

/** Lee SKILL.md una sola vez y le quita el frontmatter, que es fontanería de skill. */
function leerSkill(): string {
	if (normaCacheada === undefined) {
		normaCacheada = stripFrontmatter(readFileSync(RUTA_SKILL, "utf8")).trim();
	}
	return normaCacheada;
}

/**
 * Devuelve la norma completa, o sin la sección de calcos.
 *
 * Quitar los calcos no es recortar por ahorrar: la pasada 5 de la propia skill sólo
 * aplica «si el texto puede venir del inglés». Para un texto escrito en español
 * directamente, esas 1600 líneas no dicen nada del texto que tienes delante.
 */
function construirNorma(ambito: Ambito): string {
	const skill = leerSkill();
	if (ambito === "completo") return skill;

	const inicio = skill.indexOf(ENCABEZADO_CALCOS);
	const fin = skill.indexOf(ENCABEZADO_REFERENCIAS);
	// Si el documento cambia de forma, es preferible mandarlo entero que mutilarlo.
	if (inicio === -1 || fin === -1 || fin < inicio) return skill;

	// La pasada 5 remite a «la sección Los 93 calcos de este mismo documento», que
	// aquí ya no está. Sin este aviso el modelo persigue una sección fantasma.
	const aviso = [
		"## Los 93 calcos — no cargados en esta pasada",
		"",
		"La sección de calcos se ha omitido: este texto se dio por escrito en español,",
		"no traducido. **Omítela también tú: no señales calcos del inglés en esta pasada.**",
		"Si al leer el texto te parece que puede venir del inglés, dilo y pide que se",
		"repita la corrección con el ámbito completo, en vez de juzgar los calcos de memoria.",
	].join("\n");

	return `${skill.slice(0, inicio).trimEnd()}\n\n${aviso}\n\n${skill.slice(fin)}`;
}

/** Rutas absolutas de las referencias, para que el modelo pueda abrirlas con `read`. */
function listarReferencias(): string {
	return Object.values(REFERENCIAS)
		.map((fichero) => `- ${join(RUTA_REFERENCIAS, fichero)}`)
		.join("\n");
}

/** Resuelve el argumento: si apunta a un fichero legible, lo lee; si no, es el texto. */
function resolverEntrada(
	argumento: string,
	cwd: string,
): { texto: string; origen: string } | undefined {
	const limpio = argumento.trim();
	if (!limpio) return undefined;

	const candidata = isAbsolute(limpio) ? limpio : resolve(cwd, limpio);
	try {
		if (existsSync(candidata) && statSync(candidata).isFile()) {
			return { texto: readFileSync(candidata, "utf8"), origen: candidata };
		}
	} catch {
		// Ilegible o sin permisos: lo tratamos como texto suelto.
	}
	return { texto: limpio, origen: "texto facilitado" };
}

/** El encargo que acompaña a la norma. Sin esto el modelo tiene reglas pero no tarea. */
function construirEncargo(entrada: { texto: string; origen: string } | undefined): string {
	const cabecera = [
		"Actúa como el corrector descrito arriba. Aplica las cinco pasadas en orden y",
		"respeta los veredictos: corrige `ERROR`/`NO CONSTA`, sólo propón `EN PUGNA`/",
		"`AMBAS`/`DEPENDE`, y no menciones `ACEPTADO`/`REGLA`.",
		"",
		"Entrega en el formato de «Cómo se entrega»: el texto corregido y debajo las listas",
		"que correspondan. Quita las listas vacías; no engordes el informe con hallazgos flojos.",
		"",
		`Referencias disponibles (ábrelas con \`read\` cuando la pasada lo pida):\n${listarReferencias()}`,
	].join("\n");

	if (!entrada) {
		return `${cabecera}\n\nAplícalo al texto en español que el usuario indique a continuación.`;
	}

	return [
		cabecera,
		"",
		`Texto que hay que corregir (origen: ${entrada.origen}):`,
		"",
		"````",
		entrada.texto,
		"````",
	].join("\n");
}

export default function piEditorEspanol(pi: ExtensionAPI) {
	// Nota breve y siempre presente. Es divulgación progresiva: el modelo sabe que la
	// capacidad existe sin cargar 90 KB en cada turno.
	pi.on("before_agent_start", (event) => ({
		systemPrompt: `${event.systemPrompt}

## Corrección de español

Hay un corrector de español disponible, alineado con la norma de la RAE-ASALE
(ortotipografía, puntuación, acentuación, concordancia, cursiva y comillas, y calcos
semánticos del inglés). Invoca la herramienta \`corregir_espanol\` cuando haya que
revisar, corregir o pulir texto en español, o comprobar si un texto español está
traducido del inglés. No corrijas español a ojo: la herramienta trae la norma y los
veredictos que dicen qué se corrige y qué sólo se propone.`,
	}));

	pi.registerCommand("corregir", {
		description: "Corrige texto en español contra la norma de la RAE (texto o ruta a fichero)",
		handler: async (args, ctx) => {
			const entrada = resolverEntrada(args, ctx.cwd);
			// El texto puede venir del inglés salvo que sepamos lo contrario, así que
			// por la línea de comandos cargamos la norma entera, calcos incluidos.
			const norma = construirNorma("completo");

			pi.sendMessage(
				{
					customType: "pi-editor-espanol",
					content: `${norma}\n\n---\n\n${construirEncargo(entrada)}`,
					display: false,
				},
				{ triggerTurn: true, deliverAs: "followUp" },
			);

			ctx.ui.notify(
				entrada && entrada.origen !== "texto facilitado"
					? `Corrigiendo ${entrada.origen} contra la norma RAE`
					: "Norma RAE cargada; corrigiendo",
				"info",
			);
		},
	});

	pi.registerTool({
		name: "corregir_espanol",
		label: "Corregir español",
		description:
			"Carga la norma de corrección del español (RAE-ASALE) para revisar un texto: " +
			"ortotipografía, puntuación, acentuación, concordancia, pronombres, cursiva y " +
			"comillas, más los calcos semánticos del inglés y las marcas de traducción " +
			"automática. Devuelve las reglas y los veredictos que hay que aplicar al texto.",
		promptSnippet: "Cargar la norma RAE para corregir o revisar texto en español",
		promptGuidelines: [
			"Usa corregir_espanol antes de corregir, revisar o pulir cualquier texto en español, y para juzgar si un texto español viene traducido del inglés.",
			"Usa corregir_espanol con ambito 'norma' si el texto se escribió en español directamente, y 'completo' si pudo traducirse del inglés.",
		],
		parameters: Type.Object({
			texto: Type.Optional(
				Type.String({ description: "El texto en español que hay que corregir" }),
			),
			ruta: Type.Optional(
				Type.String({ description: "Ruta a un fichero con el texto, en vez de pasarlo suelto" }),
			),
			ambito: Type.Optional(
				StringEnum(["completo", "norma"] as const, {
					description:
						"'completo' incluye los 93 calcos del inglés (por defecto); " +
						"'norma' los omite, para texto escrito en español directamente",
				}),
			),
		}),
		async execute(_toolCallId, params, _signal, _onUpdate, ctx) {
			const ambito: Ambito = params.ambito === "norma" ? "norma" : "completo";
			const entrada = resolverEntrada(params.ruta ?? params.texto ?? "", ctx.cwd);
			const norma = construirNorma(ambito);

			return {
				content: [
					{ type: "text", text: `${norma}\n\n---\n\n${construirEncargo(entrada)}` },
				],
				details: {
					ambito,
					origen: entrada?.origen,
					calcosIncluidos: ambito === "completo",
				},
			};
		},
	});
}
