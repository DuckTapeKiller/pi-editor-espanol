# pi-editor-espanol

Port a extensión de pi de la skill
[editor-en-espanol](https://github.com/CasaAmarillaRoja/editor-en-espanol).
Corrige textos en español contra la norma de la RAE-ASALE.

La skill original conserva su nombre; el prefijo `pi-` distingue este port de la
versión para Claude, que sigue viviendo en `~/.claude/skills/editor-en-espanol/`.

## Por qué extensión, si pi ya carga skills

pi implementa el estándar Agent Skills, así que la skill funciona tal cual si apuntas
`skills` a su carpeta:

```json
{ "skills": ["~/.claude/skills"] }
```

Esa vía es válida y no cuesta nada. Lo que no da es determinismo: una skill depende de
que el modelo **decida** leer `SKILL.md`, y la documentación de pi lo dice sin rodeos
(«models don't always do this»). Es exactamente la apuesta del README de la skill —
*«lo que el modelo tiene que decidir abrir no se abre»*.

La extensión quita la decisión de en medio: inyecta la norma entera en el contexto
antes de que el modelo escriba nada.

## Qué registra

| Pieza | Qué hace |
|---|---|
| `/corregir [texto \| ruta]` | Carga la norma completa y corrige. Sin argumentos, se aplica al texto que indiques después |
| `corregir_espanol` | Herramienta invocable por el modelo, para que corrija por su cuenta |
| nota en el prompt de sistema | ~500 caracteres que anuncian la capacidad, sin cargar los 90 KB en cada turno |

## Ámbitos

`corregir_espanol` acepta `ambito`:

- **`completo`** (por defecto) — las cinco pasadas, con los 93 calcos del inglés. ~89 000 caracteres.
- **`norma`** — pasadas 1–4, sin el cuerpo de los calcos. ~7 000 caracteres.

Recortar no es aquí un ahorro a costa del rigor: la propia skill limita la pasada 5 a
«si el texto puede venir del inglés». Para texto escrito en español directamente, esas
1600 líneas no dicen nada del texto que tienes delante. Cuando se recorta, se inserta
un aviso explícito en el hueco para que el modelo no persiga una sección que ya no está
ni juzgue calcos de memoria.

`/corregir` siempre carga el ámbito completo: por la línea de órdenes no hay forma de
saber si el texto viene traducido, y el falso negativo es más caro que los tokens.

## Estructura

```
pi-editor-espanol/
├── index.ts                 # la extensión
├── SKILL.md                 # copia literal de la skill
├── LICENSE
└── references/              # copias literales
    ├── norma-ortotipografia.md
    ├── norma-gramatica.md
    ├── cursiva-y-comillas.md
    └── marcas-de-traduccion.md
```

Los ficheros se leen **en tiempo de ejecución**, no están transcritos dentro del
TypeScript. Para actualizar la norma basta con sobrescribir los `.md` desde el
repositorio: no hay contenido duplicado que pueda divergir.

## Mantener sincronizada la copia

```bash
cp ~/.claude/skills/editor-en-espanol/SKILL.md ~/.pi/agent/extensions/pi-editor-espanol/SKILL.md
cp ~/.claude/skills/editor-en-espanol/references/*.md ~/.pi/agent/extensions/pi-editor-espanol/references/
```

## Licencia

[MIT](LICENSE). `SKILL.md` y `references/` son copia literal de la skill
[editor-en-espanol](https://github.com/CasaAmarillaRoja/editor-en-espanol),
del mismo autor, y quedan cubiertos por esta misma licencia.
