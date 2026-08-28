---
name: editor-en-espanol
description: "Proofread and correct Spanish text against the RAE Libro de estilo: orthotypography, punctuation, accentuation, capitalisation, agreement, pronouns, numerals, italics and quotation marks. Also flags semantic calques from English and the orthotypographic tells of machine-translated Spanish. Use when reviewing, correcting or writing anything in Spanish, and when checking whether a Spanish text reads as translated from English. Fixes hard errors, proposes the debatable ones, and never corrects what the norm already admits."
---

# Editor en español

Corrector de textos en español. La autoridad es el **DLE y el resto de obras académicas
de la RAE-ASALE**; los diccionarios bilingües y las webs de traducción **no son prueba**
de que una acepción sea española, porque los compilan traductores, que son justamente
quienes producen los calcos.

## La regla que gobierna todo lo demás

**No corrijas lo que la norma ya admite.** Buena parte de las reglas del español no son
«mal o bien», sino «las dos valen» o «depende de la zona». El *Libro de estilo* dice
«ambas son válidas» constantemente. Un corrector que solo conoce prohibiciones estropea
texto correcto, y eso hace más daño que la falta que venía a arreglar.

De ahí los tres veredictos que llevan todas las referencias:

| Veredicto | Qué haces |
|---|---|
| `ERROR` · `NO CONSTA` | **Corriges sin preguntar.** Es infracción comprobable |
| `EN PUGNA` · `AMBAS` · `DEPENDE` | **No lo tocas.** Lo listas aparte para que decida la persona |
| `ACEPTADO` · `REGLA` | **No lo mencionas.** Está aquí para que no lo señales por error |

## Qué no se toca nunca

1. **El interior de una cita literal.** Una cita reproduce el original, con sus faltas. Si hay que retocarla, se quitan las comillas y pasa a estilo indirecto.
2. **Nombres propios, marcas y títulos en otra lengua.** `Rijksmuseum` no se acentúa.
3. **La variedad dialectal de quien escribe.** Si el texto es americano, `chofer`, `video` y `aplicar a un puesto` son correctos ahí. No lo peninsularices.
4. **Texto anterior a finales de 2022** para efectos de detección de IA. Corrige la norma, pero no lo señales como traducción automática.

## Las cinco pasadas, en este orden

El orden importa: lo mecánico primero, porque es determinista y despeja el terreno.

**1 · Ortotipografía mecánica** → `references/norma-ortotipografia.md`, `references/cursiva-y-comillas.md`
Comillas y su anidamiento, raya de inciso, guion frente a semirraya, mayúsculas de
título y de sección, cifras, fechas, horas, porcentajes, símbolos, espacios de no
separación. Casi todo es `ERROR`: corrige.

**2 · Acentuación y grafías** → `references/norma-ortotipografia.md`
Tilde diacrítica, `solo` y demostrativos, mayúsculas tildadas, compuestos.
Y las grafías que se confunden: `porque`/`por que`/`por qué`/`porqué`, `sino`/`si no`,
`conque`/`con que`, `a ver`/`haber`.

**3 · Puntuación** → `references/norma-ortotipografia.md`
La coma es lo que más se falla, y siempre por lo mismo: se pone donde se oye una pausa.
**La coma marca fronteras sintácticas, no pausas.** Vigila especialmente coma entre
sujeto y verbo, coma ante `y`/`o`/`ni` con sus cuatro excepciones, coma obligatoria ante
`pero` y ante `sino`, y especificativas frente a explicativas — que cambian el sentido,
no la elegancia.

**4 · Gramática de uso** → `references/norma-gramatica.md`
Concordancia, pronombres (leísmo, laísmo, loísmo), gerundio, `hubieron`, queísmo y
dequeísmo, relativos, `cuyo`, negación. Aquí abunda el `AMBAS`: lee el veredicto antes
de tocar nada.

**5 · Calco del inglés** → la sección «Los 93 calcos» de este mismo documento, y `references/marcas-de-traduccion.md`
Los calcos van aquí dentro y no en una referencia aparte, a propósito: la mitad de estos errores no producen duda, así que nada te va a empujar a abrir un fichero. Si has cargado esta skill, ya los has leído.
Solo si el texto puede venir del inglés. Dos mitades: los calcos léxicos, palabra por
palabra con su acepción; y las marcas ortotipográficas y sintácticas, que valen más
porque sobreviven a la reescritura.

**Un calco aislado no prueba nada.** La señal está en la densidad y en la mezcla: seis o
siete de nivel `NO CONSTA` en mil palabras, repartidos entre verbos, adjetivos y
locuciones, es un perfil que un redactor nativo no produce, porque cada persona tiene
sus vicios y no todos a la vez.

## Cómo se entrega

Devuelve el texto corregido y, debajo, dos listas separadas:

```
## Corregido
· 14 cambios de ortotipografía  (comillas → angulares, 3 rayas, 2 títulos de sección)
· 3 tildes
· 1 concordancia

## Para que decidas
· «severo» por «grave» (3 veces) — EN PUGNA: el DLE no recoge esa acepción, pero el uso
  es general. Alternativa: grave, intenso, agudo
· separador decimal: aparecen «1,5» y «1.5» — AMBAS válidas, pero elige una

## Indicio de traducción del inglés
Tres familias distintas: title case en 4 encabezados, comillas inglesas en todo el
texto, y dos gerundios de posterioridad. Perfil compatible con traducción del inglés.
```

Si no hay nada en una lista, quítala. No rellenes con hallazgos flojos para abultar el
informe: un hallazgo dudoso presentado como firme te cuesta la credibilidad de los
veinte que sí lo eran.

## Los 93 calcos, con los dos artículos completos

Son 93 pares. Cada uno lleva **el artículo entero de los dos diccionarios** — Cambridge para el
inglés, DLE para el español — y la acepción en juego marcada con `←`.

Van completos porque el resumen miente por omisión. Casi todas estas palabras son
polisémicas y **parte de su campo inglés sí existe en español**: *dramatic* tiene tres
sentidos y el español cubre dos. Con solo la acepción acusada delante, un uso legítimo
como «asumió el cargo» —acepción 2 del DLE— se marca como calco. Y señalar un uso
legítimo hace más daño que dejar pasar el calco.

| Nivel | Qué haces |
|---|---|
| `NO CONSTA` | El DLE no recoge esa acepción. Corriges |
| `EN PUGNA` | La recoge restringida a un campo o región, o el DPD la censura. Delata por frecuencia, no por error: lo propones |
| `ACEPTADO` | Recogida sin reservas. **No lo señalas nunca** |

Los recambios están cotejados contra la lista de sinónimos que el DLE publica para la
palabra acusada, para que la cura no esté dentro de la enfermedad.

### Verbos

#### `asumir` ← *assume* — NO CONSTA

*assume* en Cambridge (3):
- [verb] to accept something to be true without question or proof ←
- [verb] to pretend to have a different name or be someone you are not, or to express a feeling falsely
- [verb] to take or begin to have responsibility or control, sometimes without the right to do so, or to begin to have a characteristic

*asumir* en el DLE (3) · **ninguna recoge el sentido inglés**:
- 1. tr. Atraer a sí, tomar para sí.
- 2. tr. Hacerse cargo, responsabilizarse de algo, aceptarlo.
- 3. tr. Adquirir, tomar una forma mayor.

**Escribe:** suponer, dar por sentado, presuponer

#### `realizar` ← *realize* — NO CONSTA

*realize* en Cambridge (8):
- [verb] to understand a situation, sometimes suddenly ←
- [verb] to achieve something you were hoping for
- [verb] used for saying that something that someone was worrying about really happened
- [verb] to be sold for a particular amount of money
- [verb] to sell property in order to get some money
- [verb] to write or play a full musical part from a figured bass
- [verb] to perform or arrange a song or piece of music in a particular way
- [verb] to pronounce a speech unit in a particular way

*realizar* en el DLE (4) · **ninguna recoge el sentido inglés**:
- 1. tr. Efectuar, llevar a cabo algo o ejecutar una acción.
- 2. tr. Dirigir la ejecución de una película o de un programa televisivo.
- 3. tr. Com. Vender, convertir en dinero mercaderías u otros bienes.
- 4. prnl. Sentirse satisfecho por haber logrado cumplir aquello a lo que se aspiraba.

**Escribe:** darse cuenta de, percatarse, caer en la cuenta

#### `soportar` ← *support* — NO CONSTA

*support* en Cambridge (16):
- [verb] to agree with and give encouragement to someone or something because you want him, her, or it to succeed ←
- [verb] If you support a sports team or a sports player, you want them to win
- [verb] to help someone emotionally or in a practical way
- [verb] to give a person the money they need in order to buy food and clothes and pay for somewhere to live
- [verb] If you support an activity or a habit, you provide the money needed to pay for it
- [verb] to provide the right conditions, such as enough food and water, for life
- [verb] to hold something firmly or carry its weight, especially from below to stop it from falling
- [verb] to help to show something to be true
- [verb] to accept something and allow it to happen
- [noun] agreement with and encouragement for an idea, group, or person
- [noun] emotional or practical help
- [noun] the money someone needs in order to buy food and clothes and pay for somewhere to live
- [noun] something that holds something firmly or carries its weight
- [noun] a device worn to hold part of the body, especially a weak part, firmly in position
- [noun] something that shows that a fact is true
- [noun] a performer or band that performs before the main one in a concert

*soportar* en el DLE (2) · **ninguna recoge el sentido inglés**:
- 1. tr. Sostener o llevar sobre sí una carga o peso.
- 2. tr. Tolerar o llevar con paciencia.

**Escribe:** apoyar, respaldar; *(inform.)* admitir, ser compatible con

#### `resumir` ← *resume* — NO CONSTA

*resume* en Cambridge (4):
- [verb] If an activity resumes, or if you resume it, it starts again after a pause ←
- [verb] If you resume a place or position that you have left for a period of time, you return to it
- [noun] a short statement of the important details of something
- [noun] a short written description of your education, qualifications, previous jobs, and sometimes also your personal interests, that you send to an employer

*resumir* en el DLE (4) · **ninguna recoge el sentido inglés**:
- 1. tr. Reducir a términos breves y precisos, o considerar tan solo y repetir abreviadamente lo esencial de un asunto o materia.
- 2. tr. Dicho del actuante: Repetir el silogismo del contrario.
- 3. prnl. Dicho de una cosa: Convertirse, comprenderse, resolverse en otra.
- 4. prnl. C. Rica. Dicho de un líquido: Filtrarse o absorberse.

**Escribe:** reanudar, retomar, continuar

#### `salvar` ← *save* — NO CONSTA

*save* en Cambridge (11):
- [verb] to stop someone or something from being killed, injured, or destroyed
- [verb] to keep someone from dying
- [verb] to help someone escape from a difficult or unpleasant situation
- [verb] to keep something, especially money, for use in the future
- [verb] to put information into a computer's memory or onto a computer disk ←
- [verb] to record or remember the date of a future event and not arrange anything else on that date
- [verb] to prevent time, money, or effort being wasted or spent
- [verb] in football and similar games, to stop the ball from going into the goal
- [noun] in football or similar games, when a player stops the ball from going into the goal
- [noun] in baseball, an occasion when a pitcher comes into a game that their team is only just winning
- [preposition] but or except for

*salvar* en el DLE (13) · **ninguna recoge el sentido inglés**:
- 1. tr. Librar de un riesgo o peligro, poner en seguro.
- 2. tr. Evitar un inconveniente, impedimento, dificultad o riesgo.
- 3. tr. Exceptuar, dejar aparte, excluir algo de lo que se dice o se hace de otra u otras cosas.
- 4. tr. Exculpar, probar jurídicamente la inocencia o libertad de alguien o algo.
- 5. tr. Vencer un obstáculo, pasando por encima o a través de él.
- 6. tr. Recorrer la distancia que media entre dos lugares.
- 7. tr. Rebasar una altura elevándose por encima de ella.
- 8. tr. Poner al fin de la escritura o documento una nota para que valga lo enmendado o añadido entre renglones.
- 9. tr. Rel. Dicho especialmente de Dios o de Jesucristo: Dar la gloria y bienaventuranza eterna a alguien.
- 10. tr. coloq. Ur. Aprobar un curso o un examen.
- 11. intr. Hacer la salva a la comida o bebida de los reyes y grandes señores.
- 12. intr. desus. Hacer la salva con artillería.
- 13. prnl. Rel. Alcanzar la gloria eterna, ir al cielo.

**Escribe:** guardar; **ahorrar** *(tiempo)*
**Nota:** Trece acepciones y ninguna es «guardar».

#### `atender` ← *attend* — NO CONSTA

*attend* en Cambridge (5):
- [verb] to go to an event, place, etc. ←
- [verb] to go officially and usually regularly to a place
- [verb] to give attention to what someone is saying
- [verb] to provide a service to someone, especially as part of your job
- [verb] to happen as a result of, and at the same time as

*atender* en el DLE (7) · **ninguna recoge el sentido inglés**:
- 1. tr. Acoger favorablemente, o satisfacer un deseo, ruego o mandato.
- 2. tr. Esperar o aguardar.
- 3. intr. Aplicar voluntariamente el entendimiento a un objeto espiritual o sensible.
- 4. intr. Tener en cuenta o en consideración algo.
- 5. intr. Mirar por alguien o algo, o cuidar de él o de ello.
- 6. intr. Dicho de un animal o de una persona: Responder al ser llamado por su nombre.
- 7. intr. Impr. Leer para sí el original de un escrito, atendiendo a la lectura en voz alta que un corrector hace de las pruebas.

**Escribe:** asistir a, acudir a, concurrir a

#### `pretender` ← *pretend* — NO CONSTA

*pretend* en Cambridge (3):
- [verb] to behave as if something is true when you know that it is not, especially in order to deceive people or as a game ←
- [verb] to not claim something that is false
- [adjective] imaginary or not real

*pretender* en el DLE (3) · **ninguna recoge el sentido inglés**:
- 1. tr. Querer ser o conseguir algo.
- 2. tr. Hacer diligencias para conseguir algo.
- 3. tr. Dicho de una persona: Intentar conseguir el amor de otra.

**Escribe:** fingir, aparentar, simular

#### `calificar` ← *qualify* — NO CONSTA

*qualify* en Cambridge (5):
- [verb] to successfully finish a training course so that you are able to do a job; to have or achieve the necessary skills
- [verb] to have the legal right to have or do something because of the situation you are in ←
- [verb] to succeed in getting into a competition
- [verb] to limit the strength or meaning of a statement
- [verb] In grammar, a word or phrase that qualifies another word or phrase limits its meaning

*calificar* en el DLE (7) · **ninguna recoge el sentido inglés**:
- 1. tr. Apreciar o determinar las cualidades o circunstancias de alguien o de algo.
- 2. tr. Expresar o declarar un juicio sobre algo o alguien. Lo calificó de idiota.
- 3. tr. Juzgar el grado de suficiencia o la insuficiencia de los conocimientos demostrados por un alumno u opositor en un examen.
- 4. tr. Ennoblecer, ilustrar, acreditar.
- 5. tr. Gram. Dicho de un adjetivo: Atribuir una cualidad a un sustantivo.
- 6. tr. Urb. Asignar a un terreno un uso determinado.
- 7. prnl. Dicho de una persona: Probar legalmente su nobleza.

**Escribe:** reunir los requisitos, clasificarse, tener derecho a

#### `direccionar` ← *address* — NO CONSTA

*address* en Cambridge (9):
- [noun] the number of the house, name of the road, and name of the town where a person lives or works
- [noun] a place where someone lives
- [noun] a series of letters and symbols that tell you where to find something on the internet
- [noun] the place where a piece of information is stored in a computer's memory
- [noun] a formal speech
- [verb] to speak or write to someone
- [verb] to give attention to or deal with a matter or problem ←
- [verb] to write a name or address on an envelope or parcel
- [verb] to stand in position before hitting a golf ball or shooting at a target

*direccionar* en el DLE (2) · **ninguna recoge el sentido inglés**:
- 1. tr. Indicar u orientar sobre una dirección.
- 2. tr. Inform. Asignar una dirección (‖ expresión).

**Escribe:** abordar, tratar, afrontar, atajar

#### `deprivar` ← *deprive* — NO CONSTA

*deprive* en Cambridge (1):
- [verb] to prevent someone from having something, especially something that they need ←

*deprivar* en el DLE (1) · **ninguna recoge el sentido inglés**:
- SIN ENTRADA EN EL DLE

**Escribe:** privar de, despojar de
**Nota:** No figura en el diccionario.

#### `admitir` ← *admit* — EN PUGNA

*admit* en Cambridge (5):
- [verb] to agree that something is true, especially unwillingly ←
- [verb] to accept that you have failed and give up
- [verb] to allow someone to enter a place
- [verb] to allow a person or country to join an organization
- [verb] to allow someone to enter a hospital because they need medical care

*admitir* en el DLE (2):
- 1. tr. aceptar (‖ recibir voluntariamente). ←
- 2. tr. Permitir o sufrir. Esta causa no admite dilación.

**Escribe:** reconocer, confesar
**Nota:** **No es un error.** El DLE define *reconocer* usando *admitir* —acepciones 7 y 8: «Admitir o aceptar algo como legítimo»—, así que se definen mutuamente. Lo delator es la frecuencia: la traducción del inglés vuelca siempre *admit* en *admitir* y desplaza a *reconocer*, que es el verbo que el español prefiere para asumir una falta.

#### `navegar` ← *navigate* — NO CONSTA

*navigate* en Cambridge (3):
- [verb] to direct the way that a ship, aircraft, etc. will travel, or to find a direction across, along, or over an area of water or land, often by using a map
- [verb] to move around a website or computer screen, or between websites or screens
- [verb · Business English] to lead a company, activity, etc. in a particular direction, or to deal effectively with a difficult situation ←

*navegar* en el DLE (8) · **ninguna recoge el sentido inglés**:
- 1. intr. Desplazarse por el agua en un buque o en otra embarcación.
- 2. intr. Hacer viaje o ir por el aire en globo, avión u otro vehículo adecuado.
- 3. intr. Pilotar una nave.
- 4. intr. Formar parte de la tripulación de un buque.
- 5. intr. Dicho de un buque o de otra embarcación: avanzar.
- 6. intr. Inform. Desplazarse a través de una red o de un sistema informático.
- 7. intr. p. us. Andar de una parte a otra tratando y comerciando.
- 8. tr. p. us. Conducir las mercancías por mar de unas partes a otras para comerciar con ellas.

**Escribe:** sortear, lidiar con, afrontar, manejarse en
**Nota:** Ojo al reparto: el *navigate* informático —«to move around a website»— **sí** lo tiene el español, en la acepción 6. El que falta es el figurado, y Cambridge solo lo recoge en su diccionario de inglés de negocios. Ninguna de las ocho acepciones españolas lo cubre.

#### `introducir` ← *introduce* — EN PUGNA

*introduce* en Cambridge (4):
- [verb] to put something into use, operation, or a place for the first time
- [verb] to tell someone another person's name the first time that they meet ←
- [verb] to be the beginning of something
- [verb] to speak or write before the beginning of a performance, programme or book and give information about it

*introducir* en el DLE (9):
- 1. tr. Conducir a alguien al interior de un lugar. El criado me introdujo en la sala.
- 2. tr. Meter o hacer entrar algo en otra cosa.
- 3. tr. Hacer que alguien sea recibido o admitido en un lugar, o granjearle el trato, la amistad, la gracia, etc., de otra persona. ←
- 4. tr. Entrar en un lugar.
- 5. tr. Hacer figurar a un personaje en una obra de creación.
- 6. tr. Establecer, poner en uso. Introducir una industria en un país, palabras en un idioma.
- 7. tr. atraer (‖ acarrear). Introducir el desorden, la discordia.
- 8. prnl. Dicho de una persona: Meterse en lo que no le toca.
- 9. prnl. producirse (‖ explicarse, darse a entender).

**Escribe:** presentar, dar a conocer
**Nota:** La acepción 3 cubre meter a alguien en un círculo, no presentar a dos personas entre sí.

#### `impactar` ← *impact* — EN PUGNA

*impact* en Cambridge (3):
- [noun] the force or action of one object hitting another
- [noun] a powerful effect that something, especially something new, has on a situation or person
- [verb] to have an influence on something ←

*impactar* en el DLE (3):
- 1. tr. Causar un choque físico.
- 2. tr. Impresionar, desconcertar a causa de un acontecimiento o noticia. ←
- 3. intr. Hacer impacto en alguien o algo. El proyectil casi impacta en el edificio.

**Escribe:** afectar a, repercutir en, incidir en

#### `someter` ← *submit* — EN PUGNA

*submit* en Cambridge (3):
- [verb] to give or offer something for a decision to be made by others ←
- [verb] to suggest
- [verb] to allow another person or group to have power or authority over you, or to accept something unwillingly

*someter* en el DLE (6):
- 1. tr. Sujetar, humillar a una persona, una tropa o una facción.
- 2. tr. Conquistar, subyugar, pacificar un pueblo, provincia, etc.
- 3. tr. Subordinar el juicio, decisión o afecto propios a los de otra persona.
- 4. tr. Proponer a la consideración de alguien razones, reflexiones u otras ideas. ←
- 5. tr. Encomendar a alguien la resolución de un negocio o litigio.
- 6. tr. Hacer que alguien o algo reciba o soporte cierta acción.

**Escribe:** enviar, remitir, entregar
**Nota:** **«presentar» no vale de recambio:** el DLE lo lista como sinónimo de *someter*.

#### `anticipar` ← *anticipate* — ACEPTADO

*anticipate* en Cambridge (2):
- [verb] to imagine or expect that something will happen ←
- [verb] to take action in preparation for something that you think will happen

*anticipar* en el DLE (8):
- 1. tr. Hacer que algo tenga lugar antes del tiempo señalado o previsible, o antes que otra cosa.
- 2. tr. Entregar una cantidad de dinero antes de la fecha estipulada para ello.
- 3. tr. Anunciar algo antes de un momento dado, o antes del tiempo oportuno o esperable.
- 4. tr. Adivinar lo que ha de suceder. ←
- 5. tr. desus. Preferir algo o a alguien frente a otros de su clase.
- 6. tr. desus. Aventajar a alguien.
- 7. prnl. Dicho de una persona: Adelantarse a otra en la ejecución de algo.
- 8. prnl. Dicho de una cosa: Ocurrir antes del tiempo regular o señalado.

**Escribe:** esperar, augurar, barruntar
**Nota:** **«prever» no vale de recambio:** es sinónimo de *anticipar* en el DLE.

#### `demandar` ← *demand* — ACEPTADO

*demand* en Cambridge (5):
- [verb] to ask for something forcefully, in a way that shows that you do not expect to be refused ←
- [verb] to need something such as time, effort, or a particular quality
- [noun] a strong request
- [noun] a need for something to be sold or supplied
- [noun] the difficult things that you have to do

*demandar* en el DLE (6):
- 1. tr. Pedir, rogar. ←
- 2. tr. preguntar.
- 3. tr. Hacer cargo de algo.
- 4. tr. Entablar demanda.
- 5. tr. p. us. Apetecer, desear.
- 6. tr. desus. Intentar, pretender.

**Escribe:** no hace falta cambiar nada
**Nota:** El DLE lista *exigir, reclamar, requerir, instar* como sinónimos.

#### `remover` ← *remove* — ACEPTADO

*remove* en Cambridge (3):
- [verb] to take something or someone away from somewhere, or off something ←
- [verb] to make a negative feeling disappear
- [verb] to force someone to leave an important job or a position of power because they have behaved badly

*remover* en el DLE (6):
- 1. tr. Pasar o mudar algo de un lugar a otro.
- 2. tr. Mover algo, agitándolo o dándole vueltas, generalmente para que sus distintos elementos se mezclen.
- 3. tr. Quitar, apartar u obviar un inconveniente. ←
- 4. tr. Conmover, alterar o revolver alguna cosa o asunto que estaba olvidado, detenido, etc.
- 5. tr. Deponer o apartar a alguien de su empleo o destino.
- 6. tr. Investigar un asunto para sacar a la luz cosas que estaban ocultas.

**Escribe:** no hace falta cambiar nada
**Nota:** **No es un calco.** La RAE lo documenta desde 1325 y dice que no hay razón para censurarlo: viene del étimo latino.

#### `ignorar` ← *ignore* — ACEPTADO

*ignore* en Cambridge (1):
- [verb] to intentionally not listen or give attention to ←

*ignorar* en el DLE (2):
- 1. tr. No saber algo o no tener noticia de ello. Ignoro quién pudo haberlo hecho.
- 2. tr. No hacer caso de algo o de alguien, o tratarlos como si no merecieran atención. Me duele que me ignore. ←

**Escribe:** no hace falta cambiar nada
**Nota:** La RAE reconoce el calco y lo admite: asentado en el uso culto desde la primera mitad del siglo XX.

#### `aplicar` ← *apply* — ACEPTADO

*apply* en Cambridge (5):
- [verb] to request something, usually officially, especially in writing or by sending in a form ←
- [verb] (especially of rules or laws) to have a connection or be important
- [verb] to make use of something or use it for a practical purpose
- [verb] to spread or rub a substance such as cream or paint on a surface
- [verb] If you apply yourself to something, you work hard at it

*aplicar* en el DLE (9):
- 1. tr. Poner algo sobre otra cosa o en contacto de otra cosa.
- 2. tr. Emplear, administrar o poner en práctica un conocimiento, medida o principio, a fin de obtener un determinado efecto.
- 3. tr. Referir a un caso particular lo que se ha dicho en general, o a un individuo lo que se ha dicho de otro.
- 4. tr. Atribuir o imputar a alguien algún hecho o dicho.
- 5. tr. Destinar, adjudicar, asignar.
- 6. tr. Der. Adjudicar bienes o efectos.
- 7. intr. Am. Presentar una solicitud oficial para algo, como un puesto de trabajo, una beca o una plaza en la universidad. La joven aplica a varias universidades. ←
- 8. intr. Am. Tener validez o relevancia para algo. La norma no aplica a las compras hechas en el extranjero.
- 9. prnl. Poner esmero, diligencia y cuidado en ejecutar algo, especialmente en estudiar.

**Escribe:** no hace falta cambiar nada

#### `accesar` ← *access* — ACEPTADO

*access* en Cambridge (5):
- [noun] the method or possibility of getting near to a place or person
- [noun] the right or opportunity to use or look at something
- [verb] to be able to get to or get inside a place
- [verb] to be able to use or obtain something such as a service ←
- [verb] to open a computer file, a website, etc. in order to look at or change information in it

*accesar* en el DLE (1):
- 1. tr. Am. Tener acceso a algo, especialmente a datos contenidos en un sistema informático. Los estudiantes podrán accesar sus calificaciones en la intranet. ←

**Escribe:** no hace falta cambiar nada

#### `asistir` ← *assist* — ACEPTADO

*assist* en Cambridge (3):
- [verb] to help ←
- [verb] If someone is assisting the police with their inquiries, it usually means they have been taken to the police station to be asked questions about a crime
- [noun] in ball sports, an occasion when a player touches the ball and this leads to another player on the same team scoring

*asistir* en el DLE (11):
- 1. tr. Acompañar a alguien en un acto público.
- 2. tr. Servir o atender a alguien, especialmente de un modo eventual o desempeñando tareas específicas.
- 3. tr. Servir interinamente.
- 4. tr. Socorrer, favorecer, ayudar. ←
- 5. tr. Cuidar enfermos y procurar su curación.
- 6. tr. Dicho de la razón, del derecho, etc.: Estar de parte de alguien.
- 7. tr. Dep. En baloncesto y en otros deportes de equipo, dar una asistencia.
- 8. intr. Concurrir a una casa o reunión, tertulia, curso, acto público, etc.
- 9. intr. Estar o hallarse presente.
- 10. intr. En ciertos juegos de naipes, echar cartas del mismo palo que el de aquella que se jugó primero.
- 11. intr. Col. Vivir, habitar.

**Escribe:** no hace falta cambiar nada

#### `reportar` ← *report* — ACEPTADO

*report* en Cambridge (8):
- [verb] to give a description of something or information about it to someone ←
- [verb] to be described by people as being or doing a particular thing although there is no real proof
- [verb] to make a complaint to a person in authority about something or someone
- [verb] to go to a place or a person and say that you are there
- [noun] a teacher's written statement to parents about a child's ability and performance at school
- [noun] a description of an event or situation
- [noun] stories for which you do not yet have real proof
- [noun] the loud noise of a shot

*reportar* en el DLE (7):
- 1. tr. Refrenar, reprimir o moderar una pasión de ánimo o a quien la tiene.
- 2. tr. Alcanzar, conseguir, lograr, obtener.
- 3. tr. Dicho de una cosa: Producir algún beneficio o ventaja, o, por el contrario, dificultades o disgustos.
- 4. tr. Traer o llevar.
- 5. tr. Pasar una prueba litográfica a la piedra para multiplicar las tiradas de un mismo dibujo.
- 6. tr. Retribuir, proporcionar, recompensar.
- 7. tr. Transmitir, comunicar, dar noticia. U. m. en Am. ←

**Escribe:** no hace falta cambiar nada

#### `encriptar` ← *encrypt* — ACEPTADO

*encrypt* en Cambridge (1):
- [verb] to change electronic information or signals into a secret code that people cannot understand or use on normal equipment ←

*encriptar* en el DLE (1):
- 1. tr. cifrar (‖ transcribir con una clave). ←

**Escribe:** no hace falta cambiar nada

#### `editar` ← *edit* — ACEPTADO

*edit* en Cambridge (4):
- [verb] to make changes to a text or film, deciding what will be removed and what will be kept in, in order to prepare it for being printed or shown ←
- [verb] to be in charge of the reports in a newspaper or magazine, etc.
- [noun] an act of making changes to a text or film
- [noun] a range of clothes or other goods that has been chosen for a particular purpose

*editar* en el DLE (5):
- 1. tr. Publicar por medio de la imprenta o por otros procedimientos una obra, periódico, folleto, mapa, etc.
- 2. tr. Pagar y administrar una publicación.
- 3. tr. Adaptar un texto a las normas de estilo de una publicación.
- 4. tr. Organizar las grabaciones originales para la emisión de un programa de radio o televisión.
- 5. tr. Inform. Modificar un documento o archivo. ←

**Escribe:** no hace falta cambiar nada

### Adjetivos y adverbios

#### `severo` ← *severe* — NO CONSTA

*severe* en Cambridge (4):
- [adjective] causing very great pain, difficulty, worry, damage, etc.; very serious ←
- [adjective] extreme or very difficult
- [adjective] not kind or showing sympathy; not willing to accept other people's mistakes or failures
- [adjective] completely plain and without decoration

*severo* en el DLE (3) · **ninguna recoge el sentido inglés**:
- 1. adj. Riguroso, áspero, duro en el trato o el castigo.
- 2. adj. Exacto y rígido en la observancia de una ley, un precepto o una regla.
- 3. adj. Dicho de una estación del año: Que tiene temperaturas extremas. El invierno ha sido severo.

**Escribe:** grave, intenso, agudo
**Nota:** **«serio» no vale de recambio:** el DLE lo lista como sinónimo de *severo*. La única acepción cercana, la 3, se limita a las estaciones del año.

#### `eventual · eventualmente` ← *eventual(ly)* — NO CONSTA

*eventually* en Cambridge (1):
- [adverb] in the end, especially after a long time or a lot of effort, problems, etc. ←

*eventualmente* en el DLE (1) · **ninguna recoge el sentido inglés**:
- 1. adv. Incierta o casualmente.

**Escribe:** finalmente, con el tiempo, a la larga
**Nota:** La acepción española es la contraria de la inglesa.

#### `relevante` ← *relevant* — NO CONSTA

*relevant* en Cambridge (2):
- [adjective] connected with what is happening or being discussed ←
- [adjective] correct or suitable for a particular purpose

*relevante* en el DLE (2) · **ninguna recoge el sentido inglés**:
- 1. adj. Sobresaliente, destacado.
- 2. adj. Importante, significativo.

**Escribe:** pertinente, atinente, que viene al caso

#### `dramático` ← *dramatic* — NO CONSTA

*dramatic* en Cambridge (3):
- [adjective] very sudden or noticeable, or full of action and excitement ←
- [adjective] talking or behaving in a way that makes something seem much worse, more serious, more frightening, etc. than it really is
- [adjective] relating to plays and acting

*dramático* en el DLE (8) · **ninguna recoge el sentido inglés**:
- 1. adj. Perteneciente o relativo al drama.
- 2. adj. Que posee caracteres propios del drama, o que es apto o conveniente para él.
- 3. adj. Dicho de un autor: Que escribe obras dramáticas.
- 4. adj. Dicho de un actor: Que representa papeles dramáticos.
- 5. adj. Capaz de interesar y conmover vivamente.
- 6. adj. Teatral, afectado.
- 7. f. Género literario al que pertenecen las obras destinadas a la representación escénica.
- 8. f. dramaturgia (‖ preceptiva).

**Escribe:** drástico, brusco, acusado, pronunciado
**Nota:** De los tres sentidos ingleses, el español cubre dos: «relating to plays and acting» es la acepción 1, y «full of action and excitement» la 5. Solo falta «very sudden or noticeable». **«espectacular» no vale de recambio:** el DLE lo lista como sinónimo.

#### `doméstico` ← *domestic* — NO CONSTA

*domestic* en Cambridge (4):
- [adjective] belonging or relating to the home or family
- [adjective] relating to a person's own country ←
- [noun] someone paid to do work, such as cleaning and cooking, in someone else's house
- [noun] a fight or attack that happens in a home between people who know each other

*doméstico* en el DLE (4) · **ninguna recoge el sentido inglés**:
- 1. adj. Perteneciente o relativo a la casa u hogar.
- 2. adj. Dicho de un animal: Que se cría en la compañía del hombre, a diferencia del que se cría salvaje.
- 3. adj. Dicho de un criado: Que sirve en una casa.
- 4. m. Ciclista que, en un equipo, tiene la misión de ayudar al corredor principal.

**Escribe:** nacional, interno, interior

#### `comprensivo` ← *comprehensive* — NO CONSTA

*comprehensive* en Cambridge (4):
- [adjective] complete and including everything that is necessary ←
- [adjective] Comprehensive insurance gives financial protection against most risks
- [adjective] used in the UK to describe a school or type of education for children of all abilities above the age of eleven, paid for by the state
- [noun] in the UK, a school for children of all abilities above the age of eleven, that is paid for by the state

*comprensivo* en el DLE (3) · **ninguna recoge el sentido inglés**:
- 1. adj. Que tiene facultad o capacidad de comprender (‖ encontrar justificados actos o sentimientos).
- 2. adj. Que comprende (‖ contiene).
- 3. adj. Dicho de una persona, de una tendencia o de una actitud: tolerante.

**Escribe:** exhaustivo, completo, pormenorizado

#### `extensivo` ← *extensive* — EN PUGNA

*extensive* en Cambridge (1):
- [adjective] covering a large area; having a great range ←

*extensivo* en el DLE (1):
- 1. adj. Que se extiende o se puede extender, comunicar o aplicar a más cosas o personas. ←

**Escribe:** extenso, amplio, dilatado
**Nota:** La divergencia es real —*extensivo* es «aplicable a más cosas», *extenso* es «grande»— pero el lector recupera el sentido sin tropezar. Vale en racimo, no como prueba.

#### `desafiante` ← *challenging* — NO CONSTA

*challenging* en Cambridge (1):
- [adjective] difficult, in a way that tests your ability or determination ←

*desafiante* en el DLE (1) · **ninguna recoge el sentido inglés**:
- 1. adj. Que desafía. Una mirada desafiante.

**Escribe:** exigente, arduo, difícil, trabajoso

#### `casual` ← *casual* — NO CONSTA

*casual* en Cambridge (4):
- [adjective] Casual clothes are not formal or not suitable for special occasions ←
- [adjective] not taking or not seeming to take much interest
- [adjective] not regular or fixed
- [adjective] not serious, considered, or planned

*casual* en el DLE (4) · **ninguna recoge el sentido inglés**:
- 1. adj. Que sucede por casualidad.
- 2. adj. Gram. Perteneciente o relativo al caso.
- loc. adv. coloq. Por un casual: por casualidad.
- m. Hond. Construcción pequeña de madera, a modo de torre, en el patio de la casa, para guardar granos.

**Escribe:** informal, desenfadado, de sport

#### `interesantemente` ← *interestingly* — NO CONSTA

*interestingly* en Cambridge (1):
- [adverb] used to introduce a piece of information that the speaker thinks is strange or interesting ←

*interesantemente* en el DLE (1) · **ninguna recoge el sentido inglés**:
- SIN ENTRADA EN EL DLE

**Escribe:** curiosamente, lo curioso es que

#### `notorio` ← *notorious* — NO CONSTA

*notorious* en Cambridge (1):
- [adjective] famous for something bad ←

*notorio* en el DLE (3) · **ninguna recoge el sentido inglés**:
- 1. adj. Público y sabido por todos.
- 2. adj. Claro, evidente.
- 3. adj. Importante, relevante o famoso.

**Escribe:** de mala fama, infame, desacreditado
**Nota:** **Invierte la polaridad:** en inglés es siempre malo; en español, neutro o elogioso.

#### `vibrante` ← *vibrant* — NO CONSTA

*vibrant* en Cambridge (2):
- [adjective] energetic, exciting, and full of enthusiasm ←
- [adjective] Vibrant colour or light is bright and strong

*vibrante* en el DLE (3) · **ninguna recoge el sentido inglés**:
- 1. adj. Que vibra.
- 2. adj. Fon. Dicho de una consonante: Que se articula expulsando el aire a través de uno o varios movimientos rápidos de la lengua.
- 3. adj. Fon. En la fonología actual, dicho de una consonante rótica: Que se pronuncia con repetidos y rápidos movimientos de la lengua.

**Escribe:** animado, bullicioso, pujante, lleno de vida

#### `abrupto` ← *abrupt* — EN PUGNA

*abrupt* en Cambridge (2):
- [adjective] sudden and unexpected, and often unpleasant ←
- [adjective] using too few words when talking, in a way that seems rude and unfriendly

*abrupto* en el DLE (2):
- 1. adj. Dicho de un terreno: Escarpado, quebrado o de difícil acceso.
- 2. adj. Áspero, violento, rudo, destemplado. Declaración abrupta. Carácter abrupto. ←

**Escribe:** súbito, repentino, inesperado
**Nota:** El otro sentido inglés, «using too few words when talking», es la acepción 2. Y esa acepción roza la brusquedad temporal, así que la frontera es borrosa: señálalo en racimo, no aislado.

#### `simpático` ← *sympathetic* — NO CONSTA

*sympathetic* en Cambridge (3):
- [adjective] used to describe someone who shows, especially by what they say, that they understand and care about someone else's suffering ←
- [adjective] If a character in a book or film is sympathetic, they are described or shown in such a way that you are able to understand the character's feelings, with the result that you like them
- [adjective] agreeing with or supporting

*simpático* en el DLE (4) · **ninguna recoge el sentido inglés**:
- 1. adj. Que inspira simpatía.
- 2. adj. Anat. Dicho de una parte del sistema nervioso autónomo: Que tiene sus centros en las regiones torácica y lumbar de la médula espinal.
- 3. adj. Mús. Dicho de una cuerda: Que resuena por sí sola cuando se hace sonar otra.
- 4. adj. coloq. Bol., Cuba, Méx. y Ven. Dicho de una persona: agraciada (‖ bien parecida).

**Escribe:** compasivo, comprensivo, solidario

#### `cínico` ← *cynical* — NO CONSTA

*cynical* en Cambridge (3):
- [adjective] believing that people are only interested in themselves and are not sincere ←
- [adjective] used to say that someone's feelings or emotions are used to your own advantage
- [adjective] not showing fairness or respect to an opposing player

*cínico* en el DLE (7) · **ninguna recoge el sentido inglés**:
- 1. adj. Dicho de una persona: Que actúa con falsedad o desvergüenza descaradas.
- 2. adj. Propio de una persona cínica. Sonrisa cínica.
- 3. adj. Impúdico, procaz.
- 4. adj. Fil. Dicho de una escuela filosófica: Que nació en Grecia de la división de los discípulos de Sócrates.
- 5. adj. Fil. Partidario o seguidor de la escuela cínica.
- 6. adj. Fil. Perteneciente o relativo a la escuela cínica.
- 7. adj. desus. desaseado.

**Escribe:** escéptico, descreído, desconfiado
**Nota:** El español acusa de desvergüenza; el inglés solo describe desconfianza.

#### `adepto` ← *adept* — NO CONSTA

*adept* en Cambridge (1):
- [adjective] having a natural ability to do something that needs skill ←

*adepto* en el DLE (2) · **ninguna recoge el sentido inglés**:
- 1. adj. Partidario o seguidor de alguien o algo, como una idea o un movimiento.
- 2. adj. desus. Iniciado en los arcanos de la alquimia.

**Escribe:** experto, diestro, ducho, versado

#### `honesto` ← *honest* — EN PUGNA

*honest* en Cambridge (1):
- [adjective] telling the truth or able to be trusted and not likely to steal, cheat, or lie ←

*honesto* en el DLE (4) · **ninguna recoge el sentido inglés**:
- 1. adj. Decente o decoroso.
- 2. adj. Recatado, pudoroso.
- 3. adj. Razonable, justo.
- 4. adj. Probo, recto, honrado.

**Escribe:** veraz, sincero, franco
**Nota:** El DLE no recoge «veraz»: honesto es rectitud moral, no veracidad. Pero el uso es tan general que señalarlo aislado no se sostiene.

#### `adicionalmente` ← *additionally* — EN PUGNA

*additionally* en Cambridge (1):
- [adverb] also or in addition ←

*adicionalmente* en el DLE (1) · **ninguna recoge el sentido inglés**:
- SIN ENTRADA EN EL DLE

**Escribe:** además, asimismo, por otra parte
**Nota:** No figura en el DLE, aunque los adverbios en *-mente* se forman libremente.

#### `definitivamente` ← *definitely* — EN PUGNA

*definitely* en Cambridge (1):
- [adverb] without any doubt ←

*definitivamente* en el DLE (1):
- 1. adv. De manera definitiva. U. frecuentemente para presentar lo que se dice como una conclusión. Definitivamente, no hay quien te entienda. ←

**Escribe:** sin duda, desde luego, por supuesto

#### `notablemente` ← *notably* — EN PUGNA

*notably* en Cambridge (2):
- [adverb] especially or most importantly ←
- [adverb] to an important degree, or in a way that can or should be noticed

*notablemente* en el DLE (1):
- 1. adv. De manera notable o sobresaliente. ←

**Escribe:** en particular, sobre todo, señaladamente
**Nota:** El español marca grado; el inglés marca foco.

#### `integral` ← *integral* — EN PUGNA

*integral* en Cambridge (3):
- [adjective] necessary and important as a part of a whole ←
- [adjective] contained within something; not separate
- [noun] a number or function that gives the area under a curve on a graph between two points

*integral* en el DLE (7):
- 1. adj. Que comprende todos los elementos o aspectos de algo. Panorámica integral. Educación integral. ←
- 2. adj. Que tiene en su máximo grado lo expresado por el nombre al que acompaña. Es un demócrata integral.
- 3. adj. Dicho de un vegetal, especialmente de un cereal, o de otra sustancia: Que conserva todos sus componentes naturales.
- 4. adj. Dicho de un producto alimenticio: Elaborado a partir de una sustancia integral. Pan integral.
- 5. adj. Fil. Dicho de cada una de las partes de un todo: Que entra en su composición sin serle esencial, de manera que el todo puede subsistir, aunque incompleto, sin ella.
- 6. adj. Mat. Dicho del signo (∫): Que indica integración.
- 7. f. Mat. Resultado de integrar una expresión diferencial.

**Escribe:** esencial, fundamental, consustancial
**Nota:** Ojo a la acepción 5: la parte integral entra en el todo **sin serle esencial** — lo contrario del calco.

#### `masivo` ← *massive* — EN PUGNA

*massive* en Cambridge (2):
- [adjective] very large in size, amount, or number ←
- [noun] a group of people who spend time together and live in the same area, or who support a particular team

*masivo* en el DLE (4):
- 1. adj. Que se aplica en gran cantidad. ←
- 2. adj. Perteneciente o relativo a las masas humanas, o hecho por ellas. Emigración masiva. Ataque masivo.
- 3. adj. Fís. Que tiene una masa concentrada.
- 4. adj. Med. Dicho de la dosis de un medicamento: Cercana al límite máximo de tolerancia del organismo.

**Escribe:** enorme, ingente, colosal

#### `regular` ← *regular* — EN PUGNA

*regular* en Cambridge (14):
- [adjective] happening or doing something often ←
- [adjective] existing or happening repeatedly in a fixed pattern, with equal or similar amounts of space or time between one and the next; even
- [adjective] Someone who is regular empties their bowels often enough
- [adjective] If someone who has periods is regular, there is usually the same amount of time between each of their periods
- [adjective] usual or ordinary
- [adjective] A regular verb, noun, or adjective follows the usual rules in the structure of its various forms
- [adjective] a normal man who is liked and trusted
- [adjective] an army that exists all the time, or a soldier in such an army
- [adjective] the same on both or all sides
- [adjective] real; complete
- [noun] someone who often goes to a particular event or place, such as a shop or restaurant
- [noun] a soldier whose permanent job is being a soldier
- [noun] a player who usually plays in most of a team's competitive matches
- [noun] regularly or often

*regular* en el DLE (19):
- 1. tr. Medir, ajustar o computar algo por comparación o deducción.
- 2. tr. Ajustar, reglar o poner en orden algo. Regular el tráfico.
- 3. tr. Ajustar el funcionamiento de un sistema a determinados fines.
- 4. tr. Determinar las reglas o normas a que debe ajustarse alguien o algo.
- 5. tr. Econ. reajustar (‖ aumentar o disminuir coyunturalmente).
- 6. adj. Ajustado a una regla y conforme a ella. Vuelo regular.
- 7. adj. Uniforme, sin cambios grandes o bruscos. Respiración regular.
- 8. adj. Que se hace o se produce a intervalos regulares (‖ uniformes). Acude a revisiones médicas regulares. ←
- 9. adj. Ajustado, medido, arreglado en las acciones y modo de vivir.
- 10. adj. De tamaño o condición media o inferior a ella.
- 11. adj. Dicho de una persona o de una cosa: Que pertenece a una regla o instituto religioso.
- 12. adj. Dicho de un ejército: Que está encuadrado y dirigido legalmente por mandos profesionales.
- 13. adj. En cristalografía, cúbico.
- 14. adj. Geom. Dicho de un polígono: De lados y ángulos iguales entre sí.
- 15. adj. Geom. Dicho de un poliedro: De caras y ángulos iguales entre sí.
- 16. adj. Gram. Que se ajusta en su flexión o en su derivación a las formas fijadas como modelo de un paradigma.
- 17. m. pl. Unidades de infantería situadas en Ceuta y Melilla.
- 18. m. pl. Unidades de soldados marroquíes encuadradas en cuerpos militares españoles del antiguo protectorado.
- 19. adv. Medianamente, no demasiado bien. En las pruebas me fue regular.

**Escribe:** habitual, asiduo, fiel

#### `consistente` ← *consistent* — EN PUGNA

*consistent* en Cambridge (2):
- [adjective] always behaving or happening in a similar, especially positive, way ←
- [adjective] in agreement with other facts or with typical or previous behaviour, or having the same principles as something else

*consistente* en el DLE (2) · **ninguna recoge el sentido inglés**:
- 1. adj. Que consiste.
- 2. adj. Que tiene consistencia.

**Escribe:** constante, uniforme, sistemático
**Nota:** La definición no recoge el calco, pero el DLE lista *coherente* y *congruente* entre los sinónimos de *consistente*, así que esos dos no valen de recambio.

#### `elaborado` ← *elaborate* — EN PUGNA

*elaborate* en Cambridge (2):
- [adjective] containing a lot of careful detail or many detailed parts ←
- [verb] to add more information to or explain something that you have said

*elaborado* en el DLE (4):
- 1. adj. Que ha sido preparado o dispuesto para una finalidad.
- 2. adj. Que ha sido preparado o dispuesto con interés y cuidado. Ha leído un discurso muy elaborado. ←
- 3. adj. artificioso (‖ elaborado con arte y habilidad). Un estilo elaborado.
- 4. adj. Dicho de un producto: Que ha sufrido un proceso de elaboración.

**Escribe:** complejo, minucioso, detallado

#### `excitante` ← *exciting* — ACEPTADO

*exciting* en Cambridge (1):
- [adjective] making you feel excited ←

*excitante* en el DLE (1):
- 1. adj. Que excita. ←

**Escribe:** no hace falta cambiar nada
**Nota:** El DLE lista *estimulante, apasionante, intrigante* como sinónimos. La connotación sexual es de uso, no de norma.

#### `ordinario` ← *ordinary* — ACEPTADO

*ordinary* en Cambridge (3):
- [adjective] not different or special or unexpected in any way; usual ←
- [adjective] normally, or in the way that usually happens
- [adjective] unusual

*ordinario* en el DLE (11):
- 1. adj. Común, regular y que sucede habitualmente. ←
- 2. adj. plebeyo (‖ que no es noble).
- 3. adj. Bajo, basto, vulgar y de poca estimación.
- 4. adj. Que no tiene grado o distinción en su línea.
- 5. adj. Dicho del gasto o de la comida: Que son los que a diario suele tener una persona en su casa.
- 6. adj. Dicho de un obispo: Que tiene diócesis.
- 7. adj. Dicho del correo: Despachado por los medios y en los plazos habituales.
- 8. adj. Der. Dicho de un despacho: Corriente y con providencias de tramitación en los negocios.
- 9. m. Rel. Conjunto de las oraciones de las partes invariables de la misa.
- 10. m. p. us. Hombre que realiza encargos desplazándose regularmente a otro lugar.
- 11. m. p. us. Arriero o carretero que habitualmente conducía personas o géneros de un pueblo a otro.

**Escribe:** no hace falta cambiar nada
**Nota:** La primera acepción es la inglesa. Lo peyorativo es la tercera.

#### `patético` ← *pathetic* — ACEPTADO

*pathetic* en Cambridge (2):
- [adjective] causing feelings of sadness, sympathy, or sometimes lack of respect, especially because a person or an animal is suffering
- [adjective] unsuccessful or showing no ability, effort, or bravery, so that people feel no respect ←

*patético* en el DLE (2):
- 1. adj. Que conmueve profundamente o causa un gran dolor o tristeza.
- 2. adj. Penoso, lamentable o ridículo. ←

**Escribe:** no hace falta cambiar nada

#### `agresivo` ← *aggressive* — ACEPTADO

*aggressive* en Cambridge (4):
- [adjective] showing anger and a willingness to attack other people
- [adjective] determined to win or succeed and using forceful action to do this ←
- [adjective] An aggressive condition is one that is serious and quickly spreads in the body or gets worse
- [adjective] Aggressive treatment is strong treatment that could itself cause harm, used when someone has a serious condition

*agresivo* en el DLE (9):
- 1. adj. Dicho de una persona o de un animal: Que tiende a la violencia.
- 2. adj. Propenso a faltar al respeto, a ofender o a provocar a los demás.
- 3. adj. Que implica provocación o ataque. Discurso agresivo.
- 4. adj. Que dificulta la vida. Clima agresivo.
- 5. adj. Que extiende el daño de manera muy rápida. Tumor agresivo.
- 6. adj. Dicho de un producto o de un tratamiento: Que causa lesiones o perjuicios inherentes al beneficio que procura.
- 7. adj. Que resulta llamativo o rompe con el orden establecido. Estética agresiva.
- 8. adj. Que actúa con dinamismo, audacia y decisión. Ejecutivo agresivo. Empresa agresiva. ←
- 9. adj. Propio de quien actúa de manera agresiva. Prácticas comerciales agresivas.

**Escribe:** no hace falta cambiar nada

#### `crítico` ← *critical* — ACEPTADO

*critical* en Cambridge (6):
- [adjective] saying that someone or something is bad or wrong
- [adjective] giving or relating to opinions or judgments on books, plays, films, etc.
- [adjective] of the greatest importance to the way things might happen ←
- [adjective] (of a substance or material) needed for a country's economy and industry, but rare and likely to have problems with its supply
- [adjective] (of an illness, injury, etc.) extremely serious or dangerous, so that there is a risk of death
- [adjective] (of a person) very seriously injured or ill, so that there is a risk they will die

*crítico* en el DLE (13):
- 1. adj. Perteneciente o relativo a la crítica. Opinión crítica.
- 2. adj. Perteneciente o relativo a la crisis.
- 3. adj. Muy difícil o de mucha gravedad. Situación crítica de la economía.
- 4. adj. Dicho de un momento o una ocasión: Idóneo o más oportuno para algo. ←
- 5. adj. Inclinado a enjuiciar hechos y conductas generalmente de forma desfavorable.
- 6. adj. Fís. Dicho del valor de una variable física: A partir del cual se produce un cambio brusco en las propiedades de un sistema.
- 7. m. y f. Persona que ejerce profesionalmente la crítica.
- 8. m. y f. desus. Persona que habla con afectación o pedantería.
- 9. f. Juicio expresado, generalmente de manera pública, sobre un espectáculo, una obra artística, etc.
- 10. f. Conjunto de las críticas.
- 11. f. Actividad de hacer críticas.
- 12. f. Conjunto de las personas que ejercen la crítica en los medios de comunicación.
- 13. f. Ataque verbal o comentario negativo.

**Escribe:** no hace falta cambiar nada

#### `prominente` ← *prominent* — ACEPTADO

*prominent* en Cambridge (3):
- [adjective] very well known and important ←
- [adjective] sticking out from a surface
- [adjective] Something that is in a prominent position can easily be seen or noticed

*prominente* en el DLE (2):
- 1. adj. Que se levanta o sobresale sobre lo que está a su inmediación o alrededores.
- 2. adj. Ilustre, famoso, destacado. ←

**Escribe:** no hace falta cambiar nada

#### `bizarro` ← *bizarre* — ACEPTADO

*bizarre* en Cambridge (1):
- [adjective] very strange and unusual ←

*bizarro* en el DLE (3):
- 1. adj. valiente (‖ arriesgado).
- 2. adj. Generoso, lucido, espléndido.
- 3. adj. Raro, extravagante o fuera de lo común. ←

**Escribe:** no hace falta cambiar nada
**Nota:** Incorporado al DLE tras décadas de censura.

#### `sensible` ← *sensitive* — ACEPTADO

*sensitive* en Cambridge (7):
- [adjective] easily upset by the things people say or do, or causing people to be upset, embarrassed, or angry
- [adjective] A sensitive subject, situation, etc. needs to be dealt with carefully in order to avoid upsetting people ←
- [adjective] understanding what other people need, and being helpful and kind to them
- [adjective] easily influenced, changed, or damaged, especially by a physical activity or effect
- [adjective] Sensitive equipment is able to record small changes
- [suffix] reacting to the presence of a particular substance or physical effect
- [suffix] easily influenced, changed, or damaged by a particular thing

*sensible* en el DLE (10):
- 1. adj. Dicho de un ser vivo o de uno de sus órganos: Capaz de experimentar sensaciones.
- 2. adj. Dicho de una cosa: Que reacciona a la acción de ciertos agentes.
- 3. adj. Dicho de un aparato o de un instrumento: Capaz de registrar fenómenos poco intensos o diferencias mínimas.
- 4. adj. Capaz de apreciar algo o de reaccionar emocionalmente ante ello.
- 5. adj. Receptivo a determinados asuntos o problemas y proclive a ponerles solución.
- 6. adj. Dicho de una persona: Propensa a emocionarse o dejarse llevar por los sentimientos.
- 7. adj. Perceptible por medio de los sentidos.
- 8. adj. Evidente e importante por su cuantía o su carácter. Un sensible aumento del paro.
- 9. adj. Delicado, que por su naturaleza debe ser tratado con especial cuidado. Una materia sensible. ←
- 10. adj. Mús. Dicho de una nota: Séptima de la escala diatónica.

**Escribe:** no hace falta cambiar nada

#### `sofisticado` ← *sophisticated* — ACEPTADO

*sophisticated* en Cambridge (2):
- [adjective] having a good understanding of the way people behave and/or a good knowledge of culture and fashion
- [adjective] intelligent or made in a complicated way and therefore able to do complicated tasks ←

*sofisticado* en el DLE (3):
- 1. adj. Falto de naturalidad, afectadamente refinado.
- 2. adj. Elegante, refinado.
- 3. adj. Dicho de un sistema o de un mecanismo: Técnicamente complejo o avanzado. ←

**Escribe:** no hace falta cambiar nada

#### `nominado` ← *nominated* — ACEPTADO

*nominate* en Cambridge (3):
- [verb] to officially suggest someone for an election, job, position, or honour ←
- [verb] to say officially that a film, song, programme, etc. will be included in a competition for a prize
- [verb] to officially choose someone for a job or to do something

*nominado* en el DLE (2):
- 1. m. y f. En algunos procesos competitivos, persona que ha sido preseleccionada para un cargo o cometido.
- 2. m. y f. Persona que ha sido presentada o propuesta como candidata, generalmente para un premio. ←

**Escribe:** no hace falta cambiar nada

#### `aparente` ← *apparent* — ACEPTADO

*apparent* en Cambridge (2):
- [adjective] able to be seen or understood ←
- [adjective] seeming to exist or be true

*aparente* en el DLE (5):
- 1. adj. Que parece y no es.
- 2. adj. Conveniente, oportuno, adecuado. Esto es aparente para el caso.
- 3. adj. Que aparece y se muestra a la vista. ←
- 4. adj. Que tiene tal o cual aspecto o apariencia.
- 5. adj. coloq. Vistoso, de buena apariencia.

**Escribe:** no hace falta cambiar nada
**Nota:** Conviven dos sentidos opuestos —«que parece y no es» y «que se muestra a la vista»— y el contexto decide.

#### `plausible` ← *plausible* — ACEPTADO

*plausible* en Cambridge (2):
- [adjective] seeming likely to be true, or able to be believed ←
- [adjective] A plausible person appears to be honest and telling the truth, even if they are not

*plausible* en el DLE (2):
- 1. adj. Digno o merecedor de aplauso.
- 2. adj. Atendible, admisible, recomendable. Hubo para ello motivos plausibles. ←

**Escribe:** no hace falta cambiar nada

#### `asertivo` ← *assertive* — ACEPTADO

*assertive* en Cambridge (1):
- [adjective] Someone who is assertive behaves confidently and is not frightened to say what they want or believe ←

*asertivo* en el DLE (3):
- 1. adj. afirmativo.
- 2. adj. Psicol. Dicho de una persona: Que expresa su opinión de manera firme y con seguridad, respetando las ideas de los demás. ←
- 3. adj. Psicol. Propio de una persona asertiva.

**Escribe:** no hace falta cambiar nada

#### `errático` ← *erratic* — ACEPTADO

*erratic* en Cambridge (1):
- [adjective] moving or behaving in a way that is not regular, certain, or expected ←

*errático* en el DLE (2):
- 1. adj. Errante o que se mueve sin rumbo fijo o sin asentarse en un lugar.
- 2. adj. Impredecible o que cambia con frecuencia. ←

**Escribe:** no hace falta cambiar nada

### Sustantivos

#### `condición` ← *condition* — NO CONSTA

*condition* en Cambridge (9):
- [noun] the particular state that something or someone is in
- [noun] the physical situation that someone or something is in and affected by
- [noun] any of different types of diseases ←
- [noun] not healthy enough for hard physical exercise, as a result of not taking part in sport or other physical activities
- [noun] an arrangement that must exist before something else can happen
- [noun] only if
- [verb] to train or influence a person or animal mentally so that they do or expect a particular thing without thinking about it
- [verb] to try to improve the quality or appearance of your hair, skin, etc. by putting a conditioner on it
- [verb] to control or influence something directly

*condición* en el DLE (11) · **ninguna recoge el sentido inglés**:
- 1. f. Índole, naturaleza o propiedad de las cosas.
- 2. f. Natural, carácter o genio de las personas.
- 3. f. Estado, situación especial en que se halla alguien o algo.
- 4. f. Constitución primitiva y fundamental de un pueblo.
- 5. f. Situación o circunstancia indispensable para la existencia de otra.
- 6. f. Calidad del nacimiento o estado que se reconocía en las personas, como el de noble, el de plebeyo, el de libre, el de siervo.
- 7. f. Cualidad de noble. Es hombre de condición.
- 8. f. Der. Acontecimiento futuro e incierto del que depende la eficacia inicial o la resolución posterior de ciertos actos jurídicos.
- 9. f. Arg. Baile tradicional de salón que ejecutan parejas sueltas e independientes.
- 10. f. pl. Aptitud o disposición.
- 11. f. pl. Circunstancias que afectan a un proceso o al estado de una persona o cosa.

**Escribe:** enfermedad, afección, dolencia, trastorno

#### `asunción` ← *assumption* — NO CONSTA

*assumption* en Cambridge (2):
- [noun] something that you accept as true without question or proof ←
- [noun] the act of taking a position of power, responsibility, etc.

*asunción* en el DLE (6) · **ninguna recoge el sentido inglés**:
- 1. f. Acción y efecto de asumir.
- 2. f. por antonom. En el catolicismo, hecho de ser elevada al cielo la Virgen María en cuerpo y alma.
- 3. f. En el catolicismo, fiesta con que la Iglesia celebra la asunción de la Virgen.
- 4. f. Elevación, generalmente del espíritu.
- 5. f. Acto de ser ascendido a una de las primeras dignidades, como el pontificado, el imperio.
- 6. f. Der. Acto de hacerse cargo de una deuda ajena, de acuerdo con el acreedor.

**Escribe:** suposición, supuesto, hipótesis, premisa
**Nota:** Como *asumir* no significa suponer, *asunción* no significa suposición.

#### `data` ← *data* — NO CONSTA

*data* en Cambridge (1):
- [noun] information, especially facts or numbers, collected to be examined and considered and used to help decision-making, or information in an electronic form that can be stored and used by a computer ←

*data* en el DLE (6) · **ninguna recoge el sentido inglés**:
- 1. f. Nota o indicación del lugar y tiempo en que se hace o sucede algo, especialmente la que se pone al principio o al fin de una carta.
- 2. f. Tiempo en que ocurre o se hace algo.
- 3. f. Abertura para desviar de un embalse o de una corriente de agua parte de su caudal.
- 4. f. Com. En una cuenta, partida o partidas que componen el descargo de lo recibido.
- 5. f. desus. Permiso por escrito para hacer algo.
- 6. f. De larga data: tiempo antiguo o remoto.

**Escribe:** datos, información
**Nota:** Significa «fecha» o «plazo».

#### `facilidades` ← *facilities* — NO CONSTA

*facility* en Cambridge (5):
- [noun] a place, especially including buildings, where a particular activity happens ←
- [noun] the buildings, equipment, and services provided for a particular purpose
- [noun] a polite way of referring to a toilet in a public place
- [noun] an ability to do something easily or well
- [noun] a feature of a product that allows you to do something

*facilidad* en el DLE (5) · **ninguna recoge el sentido inglés**:
- 1. f. Cualidad de fácil.
- 2. f. Disposición para hacer algo sin gran trabajo.
- 3. f. Ligereza, demasiada condescendencia.
- 4. f. Oportunidad, ocasión propicia para hacer algo.
- 5. f. pl. Condiciones especiales que permiten lograr algo o alcanzar un fin con menor esfuerzo. Facilidades de pago.

**Escribe:** instalaciones, dependencias, equipamiento
**Nota:** El plural existe, pero significa «facilidades de pago», no «edificios».

#### `premisas` ← *premises* — NO CONSTA

*premises* en Cambridge (1):
- [noun] the land and buildings owned by someone, especially by a company or organization ←

*premisa* en el DLE (3) · **ninguna recoge el sentido inglés**:
- 1. adj. Prevenido, propuesto o enviado con anticipación.
- 2. f. Señal o indicio por donde se infiere algo o se viene en conocimiento de ello.
- 3. f. Fil. Cada una de las dos primeras proposiciones del silogismo, de donde se infiere y saca la conclusión.

**Escribe:** local, instalaciones, sede, recinto
**Nota:** **Marcador débil:** aparece en traducción jurídica automática, pero es raro.

#### `carácter` ← *character* — NO CONSTA

*character* en Cambridge (7):
- [noun] the particular combination of qualities in someone or something that makes them or it different from others
- [noun] qualities that are interesting and unusual
- [noun] the quality of being determined and able to deal with difficult situations
- [noun] a person represented in a film, play, or story ←
- [noun] a person, especially when you are describing a particular quality that they have
- [noun] someone whose behaviour is different from most people's, especially in a way that is interesting or funny
- [noun] a letter, number, or other mark or sign used in writing or printing, or the space one of these takes

*carácter* en el DLE (10) · **ninguna recoge el sentido inglés**:
- 1. m. Señal o marca que se imprime, pinta o esculpe en algo.
- 2. m. Signo de escritura o de imprenta.
- 3. m. Estilo o forma de los signos de la escritura o de los tipos de la imprenta.
- 4. m. Señal o figura mágica.
- 5. m. Marca o hierro con que los animales de un rebaño se distinguen de los de otro.
- 6. m. Conjunto de cualidades o circunstancias propias de una cosa, de una persona o de una colectividad, que las distingue por su modo de ser u obrar.
- 7. m. Condición dada a alguien o a algo por la dignidad que sustenta o la función que desempeña. El carácter de juez, de padre.
- 8. m. Señal espiritual que queda en una persona como efecto de un conocimiento o experiencia importantes.
- 9. m. Fuerza y elevación de ánimo natural de alguien, firmeza, energía. Una persona de carácter.
- 10. m. Modo de decir, o estilo.

**Escribe:** personaje

#### `argumento` ← *argument* — NO CONSTA

*argument* en Cambridge (2):
- [noun] a disagreement, or the process of disagreeing ←
- [noun] a reason or reasons why you support or oppose an idea or suggestion, or the process of explaining these reasons

*argumento* en el DLE (5) · **ninguna recoge el sentido inglés**:
- 1. m. Razonamiento para probar o demostrar una proposición, o para convencer de lo que se afirma o se niega.
- 2. m. Sucesión de hechos, episodios, situaciones, etc., de una obra literaria o cinematográfica.
- 3. m. Resumen del asunto de una obra literaria o cinematográfica, o de cada una de sus partes.
- 4. m. Gram. Cada uno de los participantes seleccionados por un predicado en función de su significado.
- 5. m. p. us. Indicio o señal.

**Escribe:** discusión, disputa, riña, altercado

#### `agenda` ← *agenda* — NO CONSTA

*agenda* en Cambridge (3):
- [noun] a list of matters to be discussed at a meeting
- [noun] a list of aims or possible future achievements
- [noun] a secret aim or reason for doing something ←

*agenda* en el DLE (3) · **ninguna recoge el sentido inglés**:
- 1. f. Libro, cuaderno o dispositivo electrónico en que se apunta, para no olvidarlo, aquello que se ha de hacer.
- 2. f. Relación de los temas que han de tratarse en una junta.
- 3. f. Relación ordenada de asuntos, compromisos o quehaceres de una persona o de una organización en un período.

**Escribe:** intereses, propósitos, motivaciones ocultas

#### `oficial` ← *officer* — EN PUGNA

*officer* en Cambridge (3):
- [noun] a person in the armed forces who has a position of authority
- [noun] a person who has a position of authority in an organization
- [noun] a member of the police force ←

*oficial* en el DLE (13) · **ninguna recoge el sentido inglés**:
- 1. adj. Que emana de la autoridad del Estado. Documento, lengua, noticia oficial.
- 2. adj. Dicho de una institución, de un edificio, de un centro de enseñanza: Que se sufraga con fondos públicos y está bajo la dependencia del Estado.
- 3. adj. Dicho de un alumno: Inscrito en un centro oficial, y que asiste a las clases.
- 4. adj. Reconocido por quien puede hacerlo de manera autorizada.
- 5. adj. En estilo cortesano, oficioso, hacendoso, cuidadoso.
- 6. m. y f. Persona que se ocupa o trabaja en un oficio.
- 7. m. y f. En un oficio manual, operario que ha terminado el aprendizaje y no es maestro todavía.
- 8. m. y f. Empleado que bajo las órdenes de un jefe estudia y prepara el despacho de los negocios en una oficina.
- 9. m. y f. Militar de categoría intermedia entre las de suboficial y oficial superior o jefe, que comprende los grados de alférez, teniente y capitán.
- 10. m. y f. En la Administración pública, persona que desempeña una función intermedia.
- 11. m. verdugo (‖ persona encargada de ejecutar la pena de muerte).
- 12. m. Carnicero que corta y pesa la carne.
- 13. m. provisor (‖ juez diocesano).

**Escribe:** agente
**Nota:** Las acepciones militares y administrativas no cubren al agente de policía.

#### `evidencia` ← *evidence* — EN PUGNA

*evidence* en Cambridge (2):
- [noun] facts, information, documents, etc. that give reason to believe that something is true ←
- [verb] to provide evidence that something is true or present

*evidencia* en el DLE (5):
- 1. f. Certeza clara y manifiesta de la que no se puede dudar. La evidencia de la derrota lo dejó aturdido.
- 2. f. Prueba determinante en un proceso. ←
- 3. f. Certidumbre de algo, de modo que el sentir o juzgar lo contrario sea tenido por temeridad.
- 4. loc. adv. Poner, estar, quedar en evidencia: en ridículo, en situación desairada.
- 5. loc. adv. En conocimiento público, revelando o demostrando algo.

**Escribe:** pruebas, indicios, datos
**Nota:** **El caso puro del conflicto:** el DLE la recoge, el DPD la censura como calco.

#### `tópico` ← *topic* — EN PUGNA

*topic* en Cambridge (3):
- [noun] a subject that is discussed, written about, or studied ←
- [noun] relating directly to the subject that is being discussed, written about, or studied
- [noun] not relating directly to the subject that is being discussed, written about, or studied

*tópico* en el DLE (6):
- 1. adj. Dicho especialmente de una expresión: Trivial o muy empleada.
- 2. adj. Perteneciente o relativo a determinado lugar.
- 3. adj. Med. Dicho de un medicamento o de su modo de aplicación: De uso externo y local.
- 4. m. Ling. Elemento de un enunciado, normalmente aislado entre pausas, que introduce alguno de los elementos de la relación predicativa.
- 5. m. Ling. tema (‖ parte de un enunciado). ←
- 6. m. Ret. Lugar común que la retórica antigua convirtió en fórmulas o clichés fijos.

**Escribe:** asunto, cuestión, materia
**Nota:** La acepción que la ampara es de lingüística. **«tema» no vale de recambio:** el DLE lo lista como sinónimo. Y al revés: `tópico` *sí* es la traducción correcta de *trope* en su sentido de motivo repetido — misma palabra, mal recambio para *topic* y buen recambio para *trope*.

#### `crimen` ← *crime* — EN PUGNA

*crime* en Cambridge (4):
- [noun] illegal activities
- [noun] an illegal act ←
- [noun] an unacceptable or very unreasonable act or situation
- [noun] books, films, and TV shows about crimes being committed and investigated

*crimen* en el DLE (4):
- 1. m. Delito grave. ←
- 2. m. Acción indebida o reprensible.
- 3. m. Acción voluntaria de matar o herir gravemente a alguien.
- 4. m. Der. Crimen de lesa majestad.

**Escribe:** delincuencia
**Nota:** **«delito» no vale de recambio:** el DLE lo lista como sinónimo de *crimen*.

#### `consistencia` ← *consistency* — EN PUGNA

*consistency* en Cambridge (2):
- [noun] the physical nature of a substance, especially a thick liquid, for example by being thick or thin, smooth or lumpy, etc.
- [noun] the quality of always behaving or performing in a similar way, or of always happening in a similar way ←

*consistencia* en el DLE (2):
- 1. f. Duración, estabilidad, solidez.
- 2. f. Trabazón, coherencia entre las partículas de una masa o los elementos de un conjunto. ←

**Escribe:** constancia, uniformidad, regularidad
**Nota:** **«coherencia» no vale de recambio:** el DLE la lista como sinónimo.

#### `rango` ← *range* — EN PUGNA

*range* en Cambridge (16):
- [noun] a set of similar things
- [noun] the goods made by one company or goods of one particular type that are sold in a shop
- [noun] a group of hills or mountains
- [noun] the amount, number, or type of something between an upper and a lower limit ←
- [noun] the distance within which you can see, hear, or hit someone
- [noun] the period of time in the future within which something is planned or expected to happen
- [noun] the distance that a vehicle or aircraft can travel without having to stop for more fuel
- [noun] all the musical notes that a singer can sing or a musical instrument is able to produce
- [noun] an area where people can practise shooting or where bombs or other weapons can be tested
- [noun] land for animals to feed on
- [noun] an old type of cooker heated with wood or coal and kept hot all the time
- [noun] a large box-shaped device that is used to cook and heat food
- [verb] to have an upper and a lower limit in amount, number, etc.
- [verb] to position people or things together, especially in rows
- [verb] to move or travel freely
- [verb] (of a piece of writing or speech) to deal with

*rango* en el DLE (6):
- 1. m. Categoría de una persona con respecto a su situación profesional o social.
- 2. m. Nivel o categoría. Una ley de rango constitucional.
- 3. m. Situación social elevada.
- 4. m. Garbo, desinterés, desprendimiento.
- 5. m. Estad. Amplitud de la variación de un fenómeno entre un límite menor y uno mayor claramente especificados. ←
- 6. m. Ec. Fila de escolares colocados en línea.

**Escribe:** gama, abanico, intervalo, horquilla
**Nota:** Amparado en estadística. Fuera de ahí, no.

#### `balance` ← *balance* — EN PUGNA

*balance* en Cambridge (11):
- [noun] the ability to remain standing, especially because your weight is equally distributed
- [noun] a situation where different things are given equal importance, or are considered or divided equally or fairly
- [noun] after thinking about all the different facts or opinions
- [noun] The balance on a piece of electronic equipment for playing music is the particular mixture of different sounds
- [noun] a device used for weighing things, consisting of two dishes hanging on a bar
- [noun] the amount of money you have in a bank account, or the amount of something that you have left ←
- [noun] the money that is returned to someone who has paid for something that costs less than the amount they gave
- [verb] to be in a position where you will stand without falling to either side
- [verb] to give several things equal amounts of importance, time, or money so that a situation is successful
- [verb] to arrange a system that relates to money so that the amount of money spent is not more than the amount received
- [verb] to make certain that the amount of money spent is not more than the amount of money received

*balance* en el DLE (10):
- 1. m. Movimiento de un cuerpo hacia un lado y hacia el otro.
- 2. m. Valoración en un momento concreto de un proceso o situación. ←
- 3. m. Esgr. Movimiento que se hace inclinando el cuerpo hacia delante o hacia atrás, sin mover los pies.
- 4. m. Mar. Movimiento que hace la nave de babor a estribor, o al contrario.
- 5. m. Tecnol. Control de la configuración y distribución del sonido en un sistema de audio.
- 6. m. Cuba. Balancín, mecedora.
- 7. m. desus. Vacilación, inseguridad.
- 8. m. Econ. Análisis del activo y el pasivo para determinar el estado económico de una empresa o entidad.
- 9. m. Econ. Resultado de un balance.
- 10. m. Econ. Documento que refleja a una determinada fecha la situación patrimonial, económica y financiera de una empresa.

**Escribe:** saldo, equilibrio

#### `patología` ← *pathology* — EN PUGNA

*pathology* en Cambridge (4):
- [noun] the scientific study of disease
- [noun] the medical characteristics of a disease
- [noun] a disease or medical condition ←
- [noun] a social, mental, or language problem

*patología* en el DLE (3):
- 1. f. Med. Parte de la medicina que estudia las enfermedades.
- 2. f. Med. Conjunto de síntomas de una enfermedad. U. t. en sent. fig. Patología social. ←
- 3. f. Constr. Estudio de los defectos y problemas que presenta una construcción.

**Escribe:** enfermedad, dolencia, afección
**Nota:** La acepción designa el cuadro de síntomas, no la enfermedad misma.

#### `políticas` ← *policies* — ACEPTADO

*policy* en Cambridge (2):
- [noun] a set of ideas or a plan of what to do in particular situations that has been agreed to officially by a group of people, a business organization, a government, or a political party ←
- [noun] a document showing an agreement you have made with an insurance company

*política* en el DLE (12):
- 1. adj. Perteneciente o relativo a la política (‖ doctrina).
- 2. adj. Perteneciente o relativo a la política (‖ actividad).
- 3. adj. Cortés, urbano.
- 4. adj. Cortés con frialdad y reserva, cuando se esperaba afecto.
- 5. adj. Dicho de una persona: Que interviene en las cosas del gobierno y negocios del Estado.
- 6. adj. Denota afinidad (‖ parentesco por razón de matrimonio). Padre político (suegro).
- 7. f. Arte, doctrina u opinión referente al gobierno de los Estados.
- 8. f. Actividad de quienes rigen o aspiran a regir los asuntos públicos.
- 9. f. Actividad del ciudadano cuando interviene en los asuntos públicos con su opinión, con su voto, o de cualquier otro modo.
- 10. f. Cortesía y buen modo de portarse.
- 11. f. Arte o traza con que se conduce un asunto o se emplean los medios para alcanzar un fin determinado.
- 12. f. Orientaciones o directrices que rigen la actuación de una persona o entidad en un asunto o campo determinado. ←

**Escribe:** no hace falta cambiar nada
**Nota:** La acepción 12 es exactamente *policy*.

#### `localización` ← *location* — ACEPTADO

*location* en Cambridge (4):
- [noun] a place or position ←
- [noun] a place away from a studio where all or part of a film or a television show is recorded
- [noun] the act of finding the exact position of something
- [noun] in baseball, the ability to throw the ball in the place where you want to throw it

*localización* en el DLE (2):
- 1. f. Acción y efecto de localizar.
- 2. f. Cinem. y TV. Escenario de un rodaje fuera de un estudio. U. m. en Esp. ←

**Escribe:** no hace falta cambiar nada
**Nota:** Amparada además por sus sinónimos, que incluyen *ubicación* y *emplazamiento*.

#### `audiencia` ← *audience* — ACEPTADO

*audience* en Cambridge (3):
- [noun] the group of people together in one place to watch or listen to a play, film, someone speaking, etc. ←
- [noun] the (number of) people watching or listening to a particular television or radio programme, reading a particular book, or visiting a particular website
- [noun] a formal meeting that you have with an important person

*audiencia* en el DLE (8):
- 1. f. Acto de oír las personas de alta jerarquía u otras autoridades, previa concesión, a quienes exponen, reclaman o solicitan algo.
- 2. f. Tribunal de justicia colegiado y que entiende en los pleitos o en las causas de determinado territorio.
- 3. f. Distrito de la jurisdicción de una audiencia.
- 4. f. Edificio en que tiene su sede una audiencia.
- 5. f. Público que atiende los programas de radio y televisión, o que asiste a un acto o espectáculo. ←
- 6. f. auditorio (‖ concurso de oyentes).
- 7. f. Número de personas que reciben un mensaje a través de cualquier medio de comunicación.
- 8. f. Der. Ocasión para aducir razones o pruebas que se ofrece a un interesado en juicio o en expediente.

**Escribe:** no hace falta cambiar nada

#### `librería` ← *library* — ACEPTADO

*library* en Cambridge (3):
- [noun] a building, room, or organization that has a collection of books, documents, music, and sometimes things such as tools or artwork, for people to borrow, usually without payment
- [noun] a collection or set of books or recordings, all produced in the same style or about the same subject ←
- [noun] a collection of songs or pieces of music on an online music service

*librería* en el DLE (6):
- 1. f. Tienda donde se venden libros.
- 2. f. Ejercicio o profesión de librero.
- 3. f. Mueble con estantes para colocar libros.
- 4. f. biblioteca (‖ lugar en que se tienen libros). ←
- 5. f. biblioteca (‖ conjunto de libros).
- 6. f. Am. papelería (‖ tienda).

**Escribe:** no hace falta cambiar nada
**Nota:** Incluido el uso informático.

#### `vegetales` ← *vegetables* — ACEPTADO

*vegetable* en Cambridge (4):
- [noun] a plant, root, seed, or pod that is used as food, especially in dishes that are not sweet ←
- [noun] a person who does not do anything or has no interest in doing anything
- [noun] an extremely offensive word for a person who is unable to think, move, or communicate in the usual way because of severe brain damage
- [adjective] made or obtained from a plant, or growing in the form of a plant

*vegetal* en el DLE (4):
- 1. adj. Perteneciente o relativo a las plantas. Especies vegetales.
- 2. adj. Obtenido de las plantas. Aceite vegetal.
- 3. m. planta (‖ ser vivo autótrofo).
- 4. m. pl. Cuba, EE. UU., El Salv., Nic., Par., P. Rico y Ven. Hortalizas en general. ←

**Escribe:** verduras
**Nota:** Amparado en siete variedades americanas. **«hortalizas» no vale de recambio:** el DLE lo lista como sinónimo.

#### `aplicación` ← *application* — ACEPTADO

*application* en Cambridge (6):
- [noun] an official request for something, usually in writing ←
- [noun] a computer program that is designed for a particular purpose
- [noun] a way in which something can be used for a particular purpose
- [noun] the determination to work hard over a period of time in order to succeed at something
- [noun] the act of spreading or rubbing a substance such as cream or paint on a surface
- [noun] a way in which a rule or law relates to or is important for someone or something

*aplicación* en el DLE (6):
- 1. f. Acción y efecto de aplicar o aplicarse.
- 2. f. Afición y asiduidad con que se hace algo, especialmente el estudio.
- 3. f. Ornamentación ejecutada en materia distinta de otra a la cual se sobrepone.
- 4. f. Inform. Programa preparado para una utilización específica, como el pago de nóminas, el tratamiento de textos.
- 5. f. Mat. correspondencia unívoca.
- 6. f. Am. Solicitud oficial que se presenta por escrito. ←

**Escribe:** no hace falta cambiar nada

#### `corporación` ← *corporation* — ACEPTADO

*corporation* en Cambridge (2):
- [noun] a large company or group of companies that is controlled together as a single organization ←
- [noun] the organization in a particular town or city that is responsible for services such as cleaning roads

*corporación* en el DLE (3):
- 1. f. Organización compuesta por personas que, como miembros de ella, la gobiernan.
- 2. f. Empresa, normalmente de grandes dimensiones, en especial si agrupa a otras menores. ←
- 3. f. Der. Corporación que establece la ley para encomendarle funciones públicas.

**Escribe:** no hace falta cambiar nada

#### `estimado` ← *estimate* — ACEPTADO

*estimate* en Cambridge (2):
- [verb] to guess or calculate the cost, size, value, etc. of something
- [noun] a guess of what the size, value, amount, cost, etc. of something might be ←

*estimado* en el DLE (2):
- 1. adj. U., antepuesto a un nombre, para dirigirse a una persona de modo formal, especialmente por escrito. Estimada señora Pérez.
- 2. m. Ec., Méx., Perú, P. Rico y R. Dom. Cálculo o valoración anticipados, generalmente del coste de alguna cosa. ←

**Escribe:** no hace falta cambiar nada

#### `escenario` ← *scenario* — ACEPTADO

*scenario* en Cambridge (2):
- [noun] a description of possible actions or events in the future ←
- [noun] a written plan of the characters and events in a play or film

*escenario* en el DLE (5):
- 1. m. En un teatro, lugar donde se representa la obra o el espectáculo.
- 2. m. En el cine, lugar donde se desarrolla cada escena de la película.
- 3. m. Lugar en que ocurre o se desarrolla un suceso.
- 4. m. Conjunto de circunstancias que rodean a una persona o un suceso.
- 5. m. Posibilidades o perspectivas de un hecho o de una situación. Este viaje espacial abre un nuevo escenario. ←

**Escribe:** no hace falta cambiar nada
**Nota:** «El peor escenario» está amparado por la acepción 5.

#### `compromiso` ← *compromise* — ACEPTADO

*compromise* en Cambridge (4):
- [noun] an agreement in an argument in which the people involved reduce their demands or change their opinion in order to agree ←
- [verb] to accept that you will reduce your demands or change your opinion in order to reach an agreement with someone
- [verb] to allow your principles to be less strong or your standards or morals to be lower
- [verb] to risk having a harmful effect on something

*compromiso* en el DLE (8):
- 1. m. Obligación contraída.
- 2. m. Palabra dada.
- 3. m. Acuerdo pactado entre distintas partes. Fueron capaces de llegar a un compromiso. ←
- 4. m. Promesa de matrimonio. Luis y Laura anunciaron su compromiso al año de conocerse.
- 5. m. Dificultad, embarazo, empeño. Estoy en un compromiso.
- 6. m. Delegación que para proveer ciertos cargos eclesiásticos o civiles hacen los electores en uno o más de ellos.
- 7. m. Der. Convenio entre litigantes, por el cual someten su litigio a árbitros o amigables componedores.
- 8. m. Der. Escritura o instrumento en que las partes otorgan un compromiso.

**Escribe:** no hace falta cambiar nada
**Nota:** El DLE trae el ejemplo literal.

#### `tropo` ← *trope* — NO CONSTA

*trope* en Cambridge (2):
- [noun] something such as an idea, phrase, or image that is often used in a particular artist's work, in a particular type of art, in the media, etc. ←
- [noun] in rhetoric (= the study of the ways of using language effectively), a way of using words that means something different from their ordinary meaning

*tropo* en el DLE (2) · **ninguna recoge el sentido inglés**:
- 1. m. Texto breve con música que, durante la Edad Media, se añadía al oficio litúrgico y que poco a poco empezó a ser recitado alternativamente por el cantor y el pueblo, y constituyó el origen del drama litúrgico.
- 2. m. Ret. Empleo de una palabra en sentido distinto del que propiamente le corresponde, pero que tiene con este alguna conexión, correspondencia o semejanza. La metáfora, la metonimia y la sinécdoque son tipos de tropos.

**Escribe:** tópico, lugar común, cliché, motivo recurrente
**Nota:** **El otro sentido inglés sí es *tropo*:** la acepción 2 de Cambridge —la retórica, con la sinécdoque como ejemplo— coincide exactamente con la acepción 2 del DLE. El calco es solo el primero, el del motivo repetido en la ficción y los medios. Los sinónimos que da el DLE para *tropo* son *metáfora, imagen, alegoría, símil*: ninguno sirve para «cliché».

#### `ironía · irónicamente` ← *irony · ironically* — NO CONSTA

*irony* en Cambridge (2):
- [noun] a situation in which something which was intended to have a particular result has the opposite or a very different result ←
- [noun] the use of words that are the opposite of what you mean, as a way of being funny

*ironía* en el DLE (3) · **ninguna recoge el sentido inglés**:
- 1. f. Burla fina y disimulada.
- 2. f. Tono burlón con que se expresa ironía.
- 3. f. Expresión que da a entender algo contrario o diferente de lo que se dice, generalmente como burla disimulada.

**Escribe:** lo curioso del caso; precisamente, justamente; contrasentido
**Nota:** El sentido verbal **sí** lo tiene el español: la acepción 3 responde a «the use of words that are the opposite of what you mean». El que falta es el situacional, que Cambridge pone primero. Las tres acepciones del DLE exigen *burla*, y sus sinónimos son *sorna, sarcasmo, causticidad, mordacidad, guasa, retintín*: llamar ironía a un resultado inesperado atribuye una burla que nadie hizo. La forma más productiva es el adverbio, «Irónicamente, …», calcado de *Ironically, …*. **Y el recambio no es *paradoja*:** el DLE la define como «contrarios a la lógica», y aquí lo que se contradice es la intención, no la lógica. El DLE no sanciona ningún sustantivo de una palabra para esto, así que la reparación es sintáctica: *curioso* en su acepción 4 «que llama la atención por su rareza», *precisamente* en el uso enfático que el propio DLE recoge («acabó perjudicando precisamente a quienes pretendía ayudar»), o *contrasentido* en su acepción 3 para registro formal.

#### `epítome` ← *epitome* — NO CONSTA

*epitome* en Cambridge (1):
- [noun] the typical or highest example of a stated quality, as shown by a particular person or thing ←

*epítome* en el DLE (2) · **ninguna recoge el sentido inglés**:
- 1. m. Resumen o compendio de una obra extensa, que expone lo fundamental o más preciso de la materia tratada en ella.
- 2. m. Ret. Resumen de un discurso extenso en unas pocas palabras finales.

**Escribe:** paradigma, encarnación, personificación, arquetipo
**Nota:** **Cero solapamiento.** Casi todas las filas de esta tabla comparten algún sentido entre los dos idiomas; esta no. Cambridge da una única acepción, y el DLE da dos que son ambas de resumir. Sus sinónimos lo confirman: *resumen, compendio, extracto, sumario, sinopsis, breviario*. «Es el epítome de la elegancia» se lee en español como «es el resumen de la elegancia». Los recambios están tomados del DLE: *paradigma* es «ejemplo o ejemplar» y sus sinónimos incluyen *arquetipo* y *modelo*; *personificación* trae *encarnación* entre los suyos. Y la trampa vale en los dos sentidos: traducir el *epítome* español por *epitome* es igual de falso — sería *summary* o *abridgement*.

## Referencias

| Fichero | Qué contiene |
|---|---|
| `references/norma-ortotipografia.md` | Acentuación, coma, punto, comillas, raya, interrogación, mayúsculas, cursiva, cifras, espacios, diálogos |
| `references/norma-gramatica.md` | Concordancia, pronombres, verbo, relativos, conjunciones, negación, grafías confundibles |
| `references/cursiva-y-comillas.md` | 56 casos: qué va en cursiva, en «comillas», en redonda o sin resalte |
| `references/marcas-de-traduccion.md` | Marcas ortotipográficas y sintácticas de que el texto viene del inglés |

El corpus completo del que sale todo esto, para consultas que las referencias no cubran,
está en `~/claude-workspace/1 - ESPAÑOL` (136 ficheros; el de puntuación tiene 91
apartados y es el mejor).

## Cuando choca la norma con un manual de estilo

Dentro de Wikipedia en español manda su **Manual de estilo**; fuera, la RAE. Se
contradicen poco, pero cuando pasa, el manual del proyecto gana en su terreno: exige
minúscula en los títulos de sección y prefiere las comillas angulares, y ahí el «siempre
angulares» se sostiene por convención del proyecto, no por prohibición de la RAE.
