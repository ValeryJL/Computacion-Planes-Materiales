# 🎓 Portal y Mapa Conceptual de Estudio · Ingeniería en Computación (UNLP)

> **Plataforma web interactiva para el seguimiento de la carrera, visualización de correlatividades, gestión de planes de estudio (Plan 2011 & Plan 2024), selección de asignaturas optativas y repositorio de materiales académicos.**
>
> 🏛️ **Universidad Nacional de La Plata (UNLP)**  
> 💻 Facultad de Informática & ⚙️ Facultad de Ingeniería

---

## 🌟 Características Principales

### 1. 🔄 Soporte Dual de Planes de Estudio (Plan 2011 / Plan 2024)
- **Toggle interactivo con persistencia de memoria**: Cambia fluidamente entre el **Plan 2011** y el **Plan 2024** desde el botón de la barra superior.
- **Mapeo inteligente de equivalencias**: Conserva y sincroniza automáticamente notas, fechas de aprobación y estados académicos entre asignaturas equivalentes con códigos distintos (ej. `I101` ↔ `I1101`, `F0301` ↔ `F1301`, `E0301` ↔ `E1301`).

### 2. 🎯 Catálogo Oficial y Selector de Optativas (Tipo A y Tipo B)
- **26 Materias Optativas verificadas** (19 de Informática Tipo A y 7 de Ingeniería Tipo B).
- **Selector modal con búsqueda en tiempo real**:
  - Filtros instantáneos: *Todas*, *Tipo A (Informática)*, *Tipo B (Ingeniería)*, *1º Semestre*, *2º Semestre*.
  - Buscador por nombre, profesor a cargo, código o temas de correlatividad.
- **Detección y trazado dinámico de correlatividades**: Al seleccionar una optativa, sus correlativas se reflejan de inmediato en la tarjeta de la matriz, en el banner del drawer y con cables interactivos en el grafo.
- **Carpetas individuales en `materias/`**: Cada optativa dispone de una carpeta dedicada (`OPT_<código>_<nombre>`) con su ficha académica `README.md` para almacenar resúmenes, apuntes y parciales personales.

### 3. ⚡ Grafo Interactivo de Correlatividades (SVG Blueprint)
- **Trazado visual en tiempo real**: Al posar el mouse sobre cualquier materia, se dibujan cables fluidos Bezier que iluminan simultáneamente todos sus requisitos previos (ancestros) y las materias que desbloquea (descendientes).
- **Columna independiente de Ingreso**: Las materias de nivelación (`Mate PI` y `Introducción a la Informática`) se integran con desplazamiento visual sincronizado hacia el primer año.

### 4. 📊 Telemetría Académica y Persistencia
- **HUD con métricas en vivo**:
  - Promedio académico ponderado en tiempo real.
  - Porcentaje de avance de la carrera y contador de materias aprobadas.
  - Chips de filtrado interactivo por condición (*Aprobadas*, *En curso*, *Cursada*, *Pendientes*, *Recursa*).
- **Persistencia en LocalStorage**: Guarda de forma persistente tus notas, estados y las optativas elegidas para cada plan.
- **Exportación e Importación JSON**: Permite descargar una copia de seguridad (`estado_academico_unlp.json`) y restaurarla en cualquier navegador con un solo click.

### 5. 📂 Drawer Académico y Repositorio de Materiales
- **Botonera de accesos directos oficiales**:
  - 📑 **Programa Oficial (PDF)**
  - 🎥 **Presentación / Video de Cátedra**
  - 🌐 **Sitio Web de la Cátedra**
  - 📂 **Carpeta de Archivos de la Materia**
- **Clasificación por categorías**: Pestañas de filtrado para *Resúmenes*, *Teoría*, *Prácticas*, *Parciales*, *Proyectos* y *Multimedia*.
- **Editor de notas y condición académica**: Permite alternar rápidamente entre estados y registrar notas finales con actualización inmediata del HUD.

---

## 🏗️ Estructura del Proyecto

```text
├── index.html            # Estructura semántica, canvas de grafo SVG y modales
├── styles.css            # Sistema de diseño, layout flex/grid y animaciones
├── app.js                # Lógica del motor conceptual, SVG wiring, HUD y persistencia
├── data.js               # Base de datos curricular del Plan 2011 (UNLP)
├── data_2024.js          # Base de datos curricular del Plan 2024 (UNLP)
├── optativas_data.js     # Catálogo oficial de 26 optativas (Tipo A y Tipo B)
└── materias/             # Repositorio organizado de carpetas por materia
    ├── E0228_... / E0301_... / I101_...
    ├── IAI_Introduccion_Informatica/
    ├── MATE_PI_Ingreso/
    └── OPT_I133_... / OPT_E0312_... (Carpetas individuales de optativas)
```

---

## 🚀 Cómo Ejecutarlo Localmente

No requiere herramientas de compilación complejas ni instalación de dependencias pesadas:

1. Clona el repositorio:
   ```bash
   git clone git@github.com:ValeryJL/Computacion-Planes-Materiales.git
   cd Computacion-Planes-Materiales
   ```
2. Ábrelo con cualquier servidor estático local o extensión Live Server:
   ```bash
   # Opción 1: Con Python 3
   python -m http.server 8080

   # Opción 2: Con Node (npx)
   npx serve .
   ```
3. Accede desde tu navegador a `http://localhost:8080`.

---

## 📝 Licencia y Créditos
- Desarrollado para estudiantes y docentes de **Ingeniería en Computación** de la **UNLP**.
- Planes de estudio y programas oficiales basados en las resoluciones vigentes de la Facultad de Informática y Facultad de Ingeniería (UNLP).
