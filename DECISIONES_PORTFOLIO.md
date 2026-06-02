# Decisiones del Portfolio

## Contexto
Proyecto de portfolio one-page para Juan Caro Vaquero, orientado a perfil `Dev Junior Fullstack`, construido en HTML, CSS y JavaScript nativo dentro de `C:\Users\Juan\Documents\portfolio`.

Se han trabajado dos direcciones visuales en paralelo:

1. `index.html`
   Versión principal, más profesional, pensada para recruiters y equipos técnicos.
2. `samuel.html`
   Variante experimental con estética line-art / indie manga inspirada en "Samuel" y "Oyasumi Punpun".

---

## Objetivo General
Construir un portfolio minimalista, responsive y semántico, con personalidad visual, pero evitando sensación de plantilla genérica o "AI slop".

Se ha priorizado:

- claridad para lectura rápida
- buena jerarquía visual
- accesibilidad básica real
- microinteracciones contenidas
- separación entre versión profesional y versión experimental

---

## Estructura del Proyecto

- [index.html](C:/Users/Juan/Documents/portfolio/index.html)
- [styles.css](C:/Users/Juan/Documents/portfolio/styles.css)
- [script.js](C:/Users/Juan/Documents/portfolio/script.js)
- [samuel.html](C:/Users/Juan/Documents/portfolio/samuel.html)
- [samuel.css](C:/Users/Juan/Documents/portfolio/samuel.css)
- [samuel.js](C:/Users/Juan/Documents/portfolio/samuel.js)

---

## Decisiones de la Versión Principal

### Dirección de diseño
Se decidió que la versión principal debía sentirse:

- profesional
- limpia
- monocromática
- más orientada a portfolio técnico serio que a experimento visual

Lectura de diseño aplicada:
Portfolio dev para recruiters y equipos técnicos, con lenguaje dark minimalista y microinteracciones sobrias.

### Tipografía
Se volvió a:

- `Space Grotesk` para títulos
- `Inter` para cuerpo

Razón:
El brief final de la versión principal pedía explícitamente esa pareja, y en esta variante interesa más claridad y legibilidad estándar que rareza tipográfica.

### Paleta
Se mantuvo:

- fondo `#0b0b0b`
- superficies `#161616`
- texto principal `#ffffff`
- texto secundario `#a3a3a3`

Razón:
Es consistente con el brief profesional y funciona bien para un portfolio técnico monocromático.

### Estructura
La versión principal quedó organizada en:

1. Header sticky con blur
2. Hero
3. Sobre Mí
4. Stack
5. Proyectos
6. Experiencia
7. Favoritos
8. Footer

Razón:
Se volvió a una estructura más convencional porque el objetivo aquí es transmitir claridad y escaneo rápido.

### Proyectos
Hubo varias iteraciones:

1. Primero se hicieron tres cards simétricas.
2. Luego se intentó romper el patrón porque se veía demasiado plantilla.
3. Finalmente, para la versión profesional, se restauró el grid de 3 tarjetas porque el brief final lo pedía de forma explícita.

Decisión final:
Mantener grid de 3 tarjetas, pero con mejor jerarquía, mejor espaciado y hover más limpio.

### Favoritos
Hubo una fase en la que se eliminaron como sección y se repartieron por el portfolio.

Decisión final para la versión principal:
Recuperar sección `Favoritos` con 3 micro-cards:

- Gatito
- Pokémon
- Cine

Razón:
El brief profesional final lo pedía explícitamente y además sirve para cerrar con personalidad sin contaminar demasiado las secciones principales.

### Microinteracciones activas en la principal

- Hover en menú con símbolos `> <`
- Typing sutil en el nombre del hero
- Borde de tarjetas que cambia de gris a blanco en hover
- Gatito con `translate` suave
- Pokémon con rotación 3D ligera
- Cine con efecto `tilt`
- Reveal al hacer scroll

### Accesibilidad en la principal
Se añadieron:

- `:focus-visible` para enlaces y botones
- landmarks semánticos
- contraste monocromático suficiente
- placeholders explícitos para textos manuales

Además, se incluyó una checklist QA al final del HTML como comentario.

---

## Decisiones de la Variante Samuel

### Dirección de diseño
La variante `samuel.html` evolucionó bastante.

Primera intención:
Hacer una versión line-art / indie manga.

Problema detectado:
La primera iteración se acercaba demasiado a neo-brutalismo de cajas repetidas y seguía teniendo sensación de "output AI".

Lectura de diseño aplicada:
Portfolio dev autoral con lenguaje íntimo, melancólico y editorial, inspirado en libreta, margen y trazo.

### Tipografía
Se usó:

- `Caveat` para títulos principales
- `Courier Prime` para cuerpo

Razón:
Se buscó contraste entre gesto manuscrito y estructura técnica seca.

### Correcciones importantes aplicadas

1. Se redujo la sensación de "card repetida".
2. Se reorganizó el layout en bloques más editoriales.
3. Se hizo más puro el sistema monocromo.
4. Se reforzaron estados de interfaz visibles.
5. Se hizo la composición menos simétrica y menos tipo plantilla.

### Elementos estructurales de Samuel

- Hero con columna principal y anotaciones laterales
- Sobre Mí con columna textual y nota lateral
- Stack tipo ledger
- Proyectos como entradas de cuaderno
- Experiencia con estructura seca y lineal
- Notas personales integradas como figuras line-art

### Estados de interfaz añadidos en Samuel
Se decidió incluir explícitamente referencias a:

- `hover`
- `focus`
- `active`
- `disabled`
- `loading`
- `empty`
- `error`

Razón:
El matiz posterior del usuario pedía estos estados como no negociables.

---

## Skills y Criterios Usados

### `taste-skill`
Se instaló desde:
[Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)

Ruta instalada:
`C:\Users\Juan\.codex\skills\taste-skill`

Uso:
Se empleó para auditar ambas variantes y detectar:

- repetición excesiva de layouts
- sensación de plantilla
- problemas de jerarquía
- decisiones visuales demasiado típicas

Aprendizaje clave:
La crítica de la skill fue especialmente útil para detectar cuándo una composición seguía leyendo como "tres cards iguales" aunque técnicamente se hubiera cambiado algo.

### `design-taste-frontend`
Se invocó después para rehacer la versión principal con una lectura más profesional y recruiter-friendly.

Uso:

- fijar dirección de diseño clara
- evitar decisiones visuales gratuitas
- reencuadrar la principal como portfolio técnico serio

---

## Problemas Detectados Durante el Proceso

### 1. Sensación de AI slop
Detectada sobre todo cuando:

- había demasiadas cards parecidas
- la composición era muy simétrica
- el diseño dependía de recursos genéricos como blur + panel + grid estándar

### 2. Tipografía demasiado típica
Se criticó especialmente en una fase intermedia donde la combinación se veía demasiado común.

Solución:

- la variante `samuel` se llevó a una dirección más personal
- la principal volvió a la tipografía pedida por brief, asumiendo un tono más estándar pero más profesional

### 3. Cambios que existían en código pero no se percibían visualmente
Ocurrió con la sección de proyectos:
Aunque la estructura había cambiado, el usuario seguía percibiendo "las 3 cards".

Aprendizaje:
No basta con cambiar markup; el cambio debe ser visualmente inequívoco.

### 4. Riesgo de exceso estético en Samuel
La variante experimental se fue en un momento hacia algo demasiado duro y poco melancólico.

Solución:
Rehacerla con más vacío, más ritmo editorial y menos abuso de cajas similares.

---

## Estado Actual

### Versión principal
Archivo:
[index.html](C:/Users/Juan/Documents/portfolio/index.html)

Estado:

- funcional
- profesional
- alineada con el brief final de portfolio técnico
- con favoritos restaurados
- con microinteracciones definidas

### Variante Samuel
Archivo:
[samuel.html](C:/Users/Juan/Documents/portfolio/samuel.html)

Estado:

- funcional
- bastante más autoral
- menos plantilla que antes
- más fiel al sistema line-art monocromo

---

## Decisiones Cerradas

- Mantener dos versiones separadas: principal y `samuel`.
- No mezclar ambas direcciones en una sola página.
- La principal prioriza claridad profesional.
- `samuel` prioriza personalidad visual.
- Los textos largos deben seguir siendo placeholders humanos.
- No usar emojis.
- Mantener placeholders de imagen con el texto exacto `Aquí falta imagen`.

---

## Próximos Pasos Recomendados

1. Elegir cuál de las dos versiones será la base final.
2. Escribir los textos manuales reales.
3. Sustituir placeholders de imagen por assets reales.
4. Revisar responsive visualmente en navegador:
   - 320px
   - 768px
   - 1440px
5. Si se elige una sola dirección, hacer una última pasada de pulido solo sobre esa versión.

---

## Nota Final
El trabajo ha sido una combinación de:

- implementación directa
- auditoría visual
- corrección por percepción real del usuario
- uso de skills para evitar soluciones de plantilla

La decisión más importante tomada durante el proceso fue separar claramente:

- una versión usable y profesional
- una versión expresiva y más autoral

en lugar de intentar que una única interfaz hiciera ambas cosas a la vez.
