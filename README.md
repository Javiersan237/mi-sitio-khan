# 🎨 Mis Proyectos de Khan Academy

Sitio web educativo que reúne 5 dibujos animados desarrollados originalmente en **Khan Academy** con Processing.js, ahora adaptados a **p5.js** y desplegados como sitio estático con HTML5, CSS3 y JavaScript puro.

🌐 **Sitio en vivo:** [https://TU-USUARIO.github.io/mi-sitio-khan/](https://javiersan237.github.io/mi-sitio-khan/)

---

## 📋 Descripción

Este proyecto forma parte de una actividad académica de la asignatura de **Graficación**. Consiste en un sitio web estructurado en tres secciones que documentan y muestran el proceso de creación de gráficos interactivos usando tecnologías web estándar.

El objetivo principal es **migrar los proyectos originales de Khan Academy** hacia un sitio propio, reemplazando los embeds (que ya no funcionan por políticas de cookies y CORS) por una implementación moderna con **p5.js**, la librería sucesora de Processing.js.

---

## 🗂️ Estructura del proyecto

```
mi-sitio-khan/
├── index.html          # Página principal
├── teoria.html         # Sección informativa (Canvas + p5.js)
├── proyectos.html      # Galería con los 5 dibujos
├── css/
│   └── estilos.css     # Estilos globales del sitio
├── js/
│   ├── script.js       # Menú activo y animaciones
│   └── dibujos.js      # Los 5 sketches con p5.js
└── README.md
```

---

## 🖼️ Proyectos incluidos

| # | Proyecto | Descripción |
|---|----------|-------------|
| 1 | 🐸 **Rana loca** | Rana verde con ojos saltones y boca |
| 2 | 🐰 **Dientes de conejo** | Conejo con orejas largas y dientes |
| 3 | 🍽️ **¿Qué hay de cena?** | Plato de pizza sobre mesa de madera |
| 4 | ☀️❄️ **Día nevado soleado** | Paisaje con sol, pasto y muñeco de nieve |
| 5 | ⛄ **Muñeco de nieve que saluda** | Muñeco con brazos extendidos |

Cada proyecto incluye un enlace al original en Khan Academy.

---

## 📚 Sección teórica

La página `teoria.html` explica detalladamente:

### 1. La etiqueta HTML `<canvas>`
- Sintaxis básica.
- Obtención del contexto de renderizado 2D (`getContext("2d")`).
- Métodos más usados: `fillRect`, `arc`, `beginPath`, `fillText`, etc.

### 2. La librería p5.js
- ¿Qué es y para qué sirve?
- Cómo se incluye desde una CDN.
- Estructura básica de un sketch: `setup()` y `draw()`.
- Funciones clave: `createCanvas`, `background`, `ellipse`, `mouseX`, `mouseY`.

Incluye **demos en vivo** de ambos conceptos.

---

## 🛠️ Tecnologías utilizadas

- **HTML5** — estructura semántica del sitio.
- **CSS3** — diseño responsivo con Grid y Flexbox.
- **JavaScript (Vanilla)** — interactividad y gestión del menú.
- **p5.js** — renderizado de los dibujos animados.
- **Canvas API** — demostraciones en la sección de teoría.

---

## 🚀 Cómo ejecutarlo localmente

### Opción 1: Live Server (VS Code) — recomendado
1. Abre la carpeta del proyecto en VS Code.
2. Instala la extensión **Live Server** (Ritwick Dey).
3. Clic derecho sobre `index.html` → **"Open with Live Server"**.
4. Se abrirá en `http://127.0.0.1:5500`.

### Opción 2: Python
```bash
python -m http.server 8000
```
Luego abre `http://localhost:8000`.

> ⚠️ **No abras los HTML directamente con doble clic** (`file://`), porque el navegador bloquea recursos externos por seguridad.

---

## 📦 Despliegue en GitHub Pages

Este sitio está publicado automáticamente con **GitHub Pages** desde la rama `main`.

Para replicarlo:
1. Sube el código a un repositorio público.
2. Ve a **Settings → Pages**.
3. En **Source**, selecciona `main` y `/ (root)`.
4. Guarda. La URL estará disponible en 1-2 minutos.

---

## 🎓 Contexto académico

- **Asignatura:** Graficación
- **Semestre:** 5°
- **Carrera:** P&P Universidad
- **Tipo:** Proyecto de escuela

---

## 📝 Licencia

Proyecto educativo sin fines de lucro. Los dibujos originales fueron creados en Khan Academy con fines de aprendizaje.

---

## 👤 Autor

**Javier Aram**
- GitHub: [@Javiersan237](https://github.com/Javiersan237)

---

⭐ Si te gustó este proyecto, dale una estrella al repositorio.
