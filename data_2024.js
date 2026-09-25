// Base de datos - Mapa Conceptual de Estudio
// Ingeniería en Computación (UNLP - Plan 2024)

window.PLAN_2024_DATA = {
  "carrera": "Ingeniería en Computación",
  "universidad": "Universidad Nacional de La Plata",
  "facultades": "Facultad de Informática & Facultad de Ingeniería",
  "plan": "Plan 2024",
  "promedio": 0,
  "stats": {
    "total": 42,
    "aprobadas": 0,
    "cursada_aprobada": 0,
    "en_curso": 0,
    "pendientes": 42,
    "reprobadas_previas": 0,
    "promedio": 0,
    "horas_aprobadas": 0,
    "horas_totales": 3854
  },
  "materias": [
    {
      "code": "D1001",
      "name": "Matemática para Ingeniería",
      "short_name": "Mate PI",
      "year": "Curso de Nivelación",
      "semester": "Ingreso UNLP",
      "sem_num": 0,
      "hs_s": "20",
      "hs_t": "80",
      "prereq_codes": [],
      "program_url": "https://www.ing.unlp.edu.ar/ingreso",
      "catedra_url": "https://www.ing.unlp.edu.ar/",
      "p2011_code": "MATE-PI",
      "unlocks_codes": [
        "F1301"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "MATE_PI_Ingreso",
      "folder_rel": "materias/MATE_PI_Ingreso",
      "materials": [],
      "all_ancestors": [],
      "all_descendants": [
        "F1301",
        "F1302",
        "F1304",
        "F1306",
        "E1302",
        "E1304",
        "E1282",
        "I1113",
        "I1117",
        "F1305",
        "F1315",
        "F1303"
      ]
    },
    {
      "code": "I1001",
      "name": "Introducción a la Informática",
      "short_name": "IaI",
      "year": "Curso de Nivelación",
      "semester": "Ingreso UNLP",
      "sem_num": 0,
      "hs_s": "5",
      "hs_t": "20",
      "prereq_codes": [],
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2025/05/Introduccion-a-la-Informatica-Plan-2024.pdf",
      "catedra_url": "https://catedras.info.unlp.edu.ar/",
      "p2011_code": "IAI",
      "unlocks_codes": [
        "I1101",
        "I1166"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "IAI_Introduccion_Informatica",
      "folder_rel": "materias/IAI_Introduccion_Informatica",
      "materials": [],
      "all_ancestors": [],
      "all_descendants": [
        "I1101",
        "I1102",
        "I1103",
        "I1104",
        "I1107",
        "I1111",
        "I1115",
        "I1116",
        "I1106",
        "E1303",
        "I1114",
        "I1108",
        "I1112",
        "I1110",
        "E1306",
        "E1307",
        "I1118",
        "I1167",
        "I1166",
        "I1105",
        "E1301",
        "I1109",
        "E1305"
      ]
    },
    {
      "code": "F1301",
      "name": "Matemática A",
      "short_name": "Mate A",
      "year": "1º Año",
      "semester": "1º Semestre",
      "sem_num": 1,
      "hs_s": "12",
      "hs_t": "192",
      "prereq_codes": [
        "D1001"
      ],
      "p2011_code": "F0301",
      "unlocks_codes": [
        "F1302",
        "F1303"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "F0301_Matematica_A",
      "folder_rel": "materias/F0301_Matematica_A",
      "materials": [],
      "catedra_url": "http://www.ing.unlp.edu.ar/catedras/F0301/",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/ANEXO_Matematica_A.pdf",
      "all_ancestors": [
        "D1001"
      ],
      "all_descendants": [
        "F1302",
        "F1304",
        "F1306",
        "E1302",
        "E1304",
        "E1282",
        "I1113",
        "I1117",
        "F1305",
        "F1315",
        "F1303"
      ]
    },
    {
      "code": "I1101",
      "name": "Programación I",
      "short_name": "Prog I",
      "year": "1º Año",
      "semester": "1º Semestre",
      "sem_num": 1,
      "hs_s": "8",
      "hs_t": "112",
      "prereq_codes": [
        "I1001"
      ],
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Programacion-I-Plan-2024.pdf",
      "p2011_code": "I101",
      "unlocks_codes": [
        "I1102"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "I101_Programacion_I",
      "folder_rel": "materias/I101_Programacion_I",
      "materials": [],
      "catedra_url": "http://blogs.unlp.edu.ar/progra1/",
      "all_ancestors": [
        "I1001"
      ],
      "all_descendants": [
        "I1102",
        "I1103",
        "I1104",
        "I1107",
        "I1111",
        "I1115",
        "I1116",
        "I1106",
        "E1303",
        "I1114",
        "I1108",
        "I1112",
        "I1110",
        "E1306",
        "E1307",
        "I1118",
        "I1167"
      ]
    },
    {
      "code": "I1166",
      "name": "Fundamentos de Arquitectura de Computadoras",
      "short_name": "Fund. Arq.",
      "year": "1º Año",
      "semester": "1º Semestre",
      "sem_num": 1,
      "hs_s": "4",
      "hs_t": "64",
      "prereq_codes": [
        "I1001"
      ],
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Fundamentos-de-Arquitectura-de-Computadoras-Plan-2024-2.pdf",
      "unlocks_codes": [
        "I1105"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "I1166_Fund__Arq_",
      "folder_rel": "materias/I1166_Fund__Arq_",
      "materials": [],
      "all_ancestors": [
        "I1001"
      ],
      "all_descendants": [
        "I1105",
        "I1106",
        "E1303",
        "I1114",
        "I1111",
        "I1115",
        "I1116",
        "E1301",
        "I1109",
        "E1305",
        "E1306",
        "E1307",
        "I1167"
      ]
    },
    {
      "code": "F1302",
      "name": "Matemática B",
      "short_name": "Mate B",
      "year": "1º Año",
      "semester": "2º Semestre",
      "sem_num": 2,
      "hs_s": "12",
      "hs_t": "192",
      "prereq_codes": [
        "F1301"
      ],
      "p2011_code": "F0302",
      "unlocks_codes": [
        "F1304",
        "F1305",
        "F1315"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "F0302_Matematica_B",
      "folder_rel": "materias/F0302_Matematica_B",
      "materials": [],
      "catedra_url": "http://www.ing.unlp.edu.ar/catedras/F0302/",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/ANEXO_Matematica_B.pdf",
      "all_ancestors": [
        "F1301",
        "D1001"
      ],
      "all_descendants": [
        "F1304",
        "F1306",
        "E1302",
        "E1304",
        "E1282",
        "I1113",
        "I1117",
        "F1305",
        "F1315"
      ]
    },
    {
      "code": "I1102",
      "name": "Programación II",
      "short_name": "Prog II",
      "year": "1º Año",
      "semester": "2º Semestre",
      "sem_num": 2,
      "hs_s": "8",
      "hs_t": "112",
      "prereq_codes": [
        "I1101"
      ],
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Programacion-II-Plan-2024-1.pdf",
      "p2011_code": "I102",
      "unlocks_codes": [
        "I1103",
        "I1104",
        "I1106",
        "I1108",
        "I1110"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "I102_Programacion_II",
      "folder_rel": "materias/I102_Programacion_II",
      "materials": [],
      "catedra_url": "http://blogs.unlp.edu.ar/programacion2/",
      "all_ancestors": [
        "I1101",
        "I1001"
      ],
      "all_descendants": [
        "I1103",
        "I1104",
        "I1107",
        "I1111",
        "I1115",
        "I1116",
        "I1106",
        "E1303",
        "I1114",
        "I1108",
        "I1112",
        "I1110",
        "E1306",
        "E1307",
        "I1118",
        "I1167"
      ]
    },
    {
      "code": "F1303",
      "name": "Física I",
      "short_name": "Física I",
      "year": "1º Año",
      "semester": "2º Semestre",
      "sem_num": 2,
      "hs_s": "8",
      "hs_t": "128",
      "prereq_codes": [
        "F1301"
      ],
      "p2011_code": "F0316",
      "unlocks_codes": [
        "F1305"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "F0317_Fisica_II",
      "folder_rel": "materias/F0317_Fisica_II",
      "materials": [],
      "catedra_url": "http://www.ing.unlp.edu.ar/catedras/F0305/",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/ANEXO_Fisica_-II.pdf",
      "all_ancestors": [
        "F1301",
        "D1001"
      ],
      "all_descendants": [
        "F1305",
        "E1282",
        "E1304"
      ]
    },
    {
      "code": "F1304",
      "name": "Matemática C",
      "short_name": "Mate C",
      "year": "2º Año",
      "semester": "1º Semestre",
      "sem_num": 3,
      "hs_s": "9",
      "hs_t": "144",
      "prereq_codes": [
        "F1302"
      ],
      "p2011_code": "F0304",
      "unlocks_codes": [
        "F1306",
        "E1282",
        "I1113"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "F0304_Matematica_C",
      "folder_rel": "materias/F0304_Matematica_C",
      "materials": [],
      "catedra_url": "http://www.ing.unlp.edu.ar/catedras/F0304/",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/ANEXO_Matematica_C.pdf",
      "all_ancestors": [
        "F1302",
        "F1301",
        "D1001"
      ],
      "all_descendants": [
        "F1306",
        "E1302",
        "E1304",
        "E1282",
        "I1113",
        "I1117"
      ]
    },
    {
      "code": "I1103",
      "name": "Programación III",
      "short_name": "Prog III",
      "year": "2º Año",
      "semester": "1º Semestre",
      "sem_num": 3,
      "hs_s": "6",
      "hs_t": "96",
      "prereq_codes": [
        "I1102"
      ],
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Programacion-II-Plan-2024-1.pdf",
      "p2011_code": "I103",
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "I103_Programacion_III",
      "folder_rel": "materias/I103_Programacion_III",
      "materials": [],
      "catedra_url": "http://www.linti.unlp.edu.ar/articulo/2011/3/10/avisos_programacion3",
      "all_ancestors": [
        "I1102",
        "I1101",
        "I1001"
      ],
      "all_descendants": []
    },
    {
      "code": "I1105",
      "name": "Arquitectura de Computadoras",
      "short_name": "Arq. Comp.",
      "year": "2º Año",
      "semester": "1º Semestre",
      "sem_num": 3,
      "hs_s": "6",
      "hs_t": "96",
      "prereq_codes": [
        "I1166"
      ],
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2025/05/Arquitectura-de-Computadoras-Plan-2024.pdf",
      "p2011_code": "I105",
      "unlocks_codes": [
        "I1106",
        "E1301",
        "I1167"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "I105_Conceptos_de_Arquitecturade_Computadoras",
      "folder_rel": "materias/I105_Conceptos_de_Arquitecturade_Computadoras",
      "materials": [],
      "catedra_url": "http://weblidi.info.unlp.edu.ar/catedras/ConArqCom/index.htm",
      "all_ancestors": [
        "I1166",
        "I1001"
      ],
      "all_descendants": [
        "I1106",
        "E1303",
        "I1114",
        "I1111",
        "I1115",
        "I1116",
        "E1301",
        "I1109",
        "E1305",
        "E1306",
        "E1307",
        "I1167"
      ]
    },
    {
      "code": "I1104",
      "name": "Taller de Lenguajes I",
      "short_name": "Taller I",
      "year": "2º Año",
      "semester": "1º Semestre",
      "sem_num": 3,
      "hs_s": "6",
      "hs_t": "96",
      "prereq_codes": [
        "I1102"
      ],
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Taller-de-Lenguajes-I-Plan-2024-1.pdf",
      "p2011_code": "I104",
      "unlocks_codes": [
        "I1107"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "I104_Taller_de_Lenguajes_I",
      "folder_rel": "materias/I104_Taller_de_Lenguajes_I",
      "materials": [],
      "catedra_url": "http://weblidi.info.unlp.edu.ar/catedras/TallerLeng1/",
      "all_ancestors": [
        "I1102",
        "I1101",
        "I1001"
      ],
      "all_descendants": [
        "I1107",
        "I1111",
        "I1115",
        "I1116"
      ]
    },
    {
      "code": "F1306",
      "name": "Matemática D",
      "short_name": "Mate D",
      "year": "2º Año",
      "semester": "2º Semestre",
      "sem_num": 4,
      "hs_s": "6",
      "hs_t": "96",
      "prereq_codes": [
        "F1304"
      ],
      "p2011_code": "F0310",
      "unlocks_codes": [
        "E1302"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "F0312_Probabilidades",
      "folder_rel": "materias/F0312_Probabilidades",
      "materials": [],
      "catedra_url": "",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/ANEXO_Probabilidades.pdf",
      "all_ancestors": [
        "F1304",
        "F1302",
        "F1301",
        "D1001"
      ],
      "all_descendants": [
        "E1302",
        "E1304"
      ]
    },
    {
      "code": "F1305",
      "name": "Física II",
      "short_name": "Física II",
      "year": "2º Año",
      "semester": "2º Semestre",
      "sem_num": 4,
      "hs_s": "8",
      "hs_t": "128",
      "prereq_codes": [
        "F1302",
        "F1303"
      ],
      "p2011_code": "F0317",
      "unlocks_codes": [
        "E1282"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "F0307_Estadistica",
      "folder_rel": "materias/F0307_Estadistica",
      "materials": [],
      "catedra_url": "",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/ANEXO_Estadistica.pdf",
      "all_ancestors": [
        "F1302",
        "F1301",
        "D1001",
        "F1303"
      ],
      "all_descendants": [
        "E1282",
        "E1304"
      ]
    },
    {
      "code": "I1106",
      "name": "Conceptos de Sistemas Operativos",
      "short_name": "Sistemas Op.",
      "year": "2º Año",
      "semester": "2º Semestre",
      "sem_num": 4,
      "hs_s": "6",
      "hs_t": "96",
      "prereq_codes": [
        "I1102",
        "I1105"
      ],
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Conceptos-de-Sistemas-Operativos-Plan-2024.pdf",
      "p2011_code": "I106",
      "unlocks_codes": [
        "E1303",
        "I1111"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "I106_Conceptos_de_Sistemas_Operativos",
      "folder_rel": "materias/I106_Conceptos_de_Sistemas_Operativos",
      "materials": [],
      "catedra_url": "",
      "all_ancestors": [
        "I1102",
        "I1101",
        "I1001",
        "I1105",
        "I1166"
      ],
      "all_descendants": [
        "E1303",
        "I1114",
        "I1111",
        "I1115",
        "I1116"
      ]
    },
    {
      "code": "I1107",
      "name": "Taller de Lenguajes II",
      "short_name": "Taller II",
      "year": "2º Año",
      "semester": "2º Semestre",
      "sem_num": 4,
      "hs_s": "6",
      "hs_t": "96",
      "prereq_codes": [
        "I1104"
      ],
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Taller-de-Lenguajes-II-Plan-2008-2011-2024.pdf",
      "p2011_code": "I107",
      "unlocks_codes": [
        "I1111"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "I107_Taller_de_Lenguajes_II",
      "folder_rel": "materias/I107_Taller_de_Lenguajes_II",
      "materials": [],
      "catedra_url": "http://www.linti.unlp.edu.ar/articulo/2011/8/18/avisos_taller_leng_2",
      "all_ancestors": [
        "I1104",
        "I1102",
        "I1101",
        "I1001"
      ],
      "all_descendants": [
        "I1111",
        "I1115",
        "I1116"
      ]
    },
    {
      "code": "F1315",
      "name": "Probabilidades y Estadística",
      "short_name": "Probabilidad",
      "year": "3º Año",
      "semester": "1º Semestre",
      "sem_num": 5,
      "hs_s": "6",
      "hs_t": "96",
      "prereq_codes": [
        "F1302"
      ],
      "p2011_code": "F0312",
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "F0310_Matematica_D1",
      "folder_rel": "materias/F0310_Matematica_D1",
      "materials": [],
      "catedra_url": "https://www.ing.unlp.edu.ar/catedras/F0310/",
      "program_url": "",
      "all_ancestors": [
        "F1302",
        "F1301",
        "D1001"
      ],
      "all_descendants": []
    },
    {
      "code": "E1282",
      "name": "Electrotecnia y Electrónica",
      "short_name": "Electrotecnia",
      "year": "3º Año",
      "semester": "1º Semestre",
      "sem_num": 5,
      "hs_s": "6",
      "hs_t": "96",
      "prereq_codes": [
        "F1304",
        "F1305"
      ],
      "p2011_code": "E0282",
      "unlocks_codes": [
        "E1304"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "E0282_Electrotecnia_y_Electronica",
      "folder_rel": "materias/E0282_Electrotecnia_y_Electronica",
      "materials": [],
      "catedra_url": "http://www.ing.unlp.edu.ar/catedras/E0282/",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/ANEXO_Electrotecnia_y_Electronica.pdf",
      "all_ancestors": [
        "F1304",
        "F1302",
        "F1301",
        "D1001",
        "F1305",
        "F1303"
      ],
      "all_descendants": [
        "E1304"
      ]
    },
    {
      "code": "I1108",
      "name": "Conceptos de bases de datos",
      "short_name": "Bases de Datos",
      "year": "3º Año",
      "semester": "1º Semestre",
      "sem_num": 5,
      "hs_s": "6",
      "hs_t": "96",
      "prereq_codes": [
        "I1102"
      ],
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Conceptos-de-bases-de-datos-Plan-2024-1.pdf",
      "p2011_code": "I108",
      "unlocks_codes": [
        "I1112"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "I108_Conceptos_de_bases_de_datos",
      "folder_rel": "materias/I108_Conceptos_de_bases_de_datos",
      "materials": [],
      "catedra_url": "http://weblidi.info.unlp.edu.ar/catedras/ing_cbd/index.html",
      "all_ancestors": [
        "I1102",
        "I1101",
        "I1001"
      ],
      "all_descendants": [
        "I1112"
      ]
    },
    {
      "code": "E1301",
      "name": "Introducción al Diseño Lógico",
      "short_name": "Diseño Lógico",
      "year": "3º Año",
      "semester": "1º Semestre",
      "sem_num": 5,
      "hs_s": "6",
      "hs_t": "96",
      "prereq_codes": [
        "I1105"
      ],
      "p2011_code": "E0301",
      "unlocks_codes": [
        "I1109"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "E0301_Introduccion_al_Diseno_Logico",
      "folder_rel": "materias/E0301_Introduccion_al_Diseno_Logico",
      "materials": [],
      "catedra_url": "http://www.ing.unlp.edu.ar/catedras/E0301/",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/ANEXO_Introduccion_al_Diseno_Logico.pdf",
      "all_ancestors": [
        "I1105",
        "I1166",
        "I1001"
      ],
      "all_descendants": [
        "I1109",
        "E1305",
        "E1306",
        "E1307"
      ]
    },
    {
      "code": "E1302",
      "name": "Introducción al Procesamiento de Señales",
      "short_name": "Proc. Señales",
      "year": "3º Año",
      "semester": "2º Semestre",
      "sem_num": 6,
      "hs_s": "5",
      "hs_t": "80",
      "prereq_codes": [
        "F1306"
      ],
      "p2011_code": "E0302",
      "unlocks_codes": [
        "E1304"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "E0302_Introduccion_al_Procesamiento_de_Senales",
      "folder_rel": "materias/E0302_Introduccion_al_Procesamiento_de_Senales",
      "materials": [],
      "catedra_url": "",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/ANEXO_Introduccion_al_Procesamiento_de_Senales.pdf",
      "all_ancestors": [
        "F1306",
        "F1304",
        "F1302",
        "F1301",
        "D1001"
      ],
      "all_descendants": [
        "E1304"
      ]
    },
    {
      "code": "I1109",
      "name": "Taller de Arquitectura",
      "short_name": "Taller Arq.",
      "year": "3º Año",
      "semester": "2º Semestre",
      "sem_num": 6,
      "hs_s": "6",
      "hs_t": "96",
      "prereq_codes": [
        "E1301"
      ],
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2025/05/Taller-de-Arquitectura-Plan-2024.pdf",
      "p2011_code": "I109",
      "unlocks_codes": [
        "E1305"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "I109_Taller_de_Arquitectura",
      "folder_rel": "materias/I109_Taller_de_Arquitectura",
      "materials": [
        {
          "title": "Guía Completa VHDL y Arquitectura de Procesadores",
          "filename": "Resumen_VHDL_Guia_Completa.html",
          "path": "materias/I109_Taller_de_Arquitectura/Resumen_VHDL_Guia_Completa.html",
          "type": "html",
          "category": "resumenes",
          "badge": "HTML Interactivo",
          "desc": "Cheat-sheet integral de sintaxis VHDL, bloques combinacionales, registros, pipeline y testbenches."
        },
        {
          "title": "Clase VHDL 1A - Introducción al Flujo FPGA",
          "filename": "VHDL1A_Introduccion.pdf",
          "path": "materias/I109_Taller_de_Arquitectura/VHDL1A_Introduccion.pdf",
          "type": "pdf",
          "category": "clases",
          "badge": "PDF Cátedra",
          "desc": "Fundamentos del lenguaje VHDL, entidades y arquitecturas."
        },
        {
          "title": "Clase VHDL 2A - Procesos y Lógica Secuencial",
          "filename": "VHDL2A_Procesos_Secuenciales.pdf",
          "path": "materias/I109_Taller_de_Arquitectura/VHDL2A_Procesos_Secuenciales.pdf",
          "type": "pdf",
          "category": "clases",
          "badge": "PDF Cátedra",
          "desc": "Procesos, flip-flops, señales vs variables y listas de sensibilidad."
        },
        {
          "title": "Clase VHDL 2B - Síntesis y Máquinas de Estados",
          "filename": "VHDL2B_Sintesis_RTL.pdf",
          "path": "materias/I109_Taller_de_Arquitectura/VHDL2B_Sintesis_RTL.pdf",
          "type": "pdf",
          "category": "clases",
          "badge": "PDF Cátedra",
          "desc": "Máquinas FSM (Mealy/Moore) y síntesis en hardware reconfigurable."
        },
        {
          "title": "Práctica 9 - Diseño y Testbench VHDL",
          "filename": "Practica_9_VHDL.pdf",
          "path": "materias/I109_Taller_de_Arquitectura/Practica_9_VHDL.pdf",
          "type": "pdf",
          "category": "practicas",
          "badge": "PDF Práctica",
          "desc": "Enunciados de simulación y bancos de prueba para diseño digital."
        },
        {
          "title": "Clase VHDL 1B - Señales, Tipos y Modelado",
          "filename": "VHDL1B_Panoramica_Lenguaje.pdf",
          "path": "materias/I109_Taller_de_Arquitectura/VHDL1B_Panoramica_Lenguaje.pdf",
          "type": "pdf",
          "category": "clases",
          "badge": "PDF Cátedra",
          "desc": "Panorámica de VHDL (Parte 2), biblioteca std_logic_1164, tipos binarios y simulación."
        },
        {
          "title": "Clase Complementaria - Flip-Flop Tipo D (sobreFFD)",
          "filename": "Clase_Flip_Flop_D.ppt",
          "path": "materias/I109_Taller_de_Arquitectura/Clase_Flip_Flop_D.ppt",
          "type": "ppt",
          "category": "clases",
          "badge": "PPT Presentación",
          "desc": "Fundamentos y funcionamiento del biestable D para diseño síncrono en FPGAs."
        }
      ],
      "catedra_url": "http://weblidi.info.unlp.edu.ar/catedras/TallerArquitectura/",
      "all_ancestors": [
        "E1301",
        "I1105",
        "I1166",
        "I1001"
      ],
      "all_descendants": [
        "E1305",
        "E1306",
        "E1307"
      ]
    },
    {
      "code": "I1110",
      "name": "Ingeniería de Software",
      "short_name": "Ing. Software",
      "year": "3º Año",
      "semester": "2º Semestre",
      "sem_num": 6,
      "hs_s": "9",
      "hs_t": "144",
      "prereq_codes": [
        "I1102"
      ],
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Ingenieria-de-Software-Plan-2024-1.pdf",
      "p2011_code": "I110",
      "unlocks_codes": [
        "I1115",
        "E1306",
        "I1118",
        "I1167"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "I110_Ingenieria_de_Software",
      "folder_rel": "materias/I110_Ingenieria_de_Software",
      "materials": [],
      "catedra_url": "http://blogs.unlp.edu.ar/ingenieriadesoftware/",
      "all_ancestors": [
        "I1102",
        "I1101",
        "I1001"
      ],
      "all_descendants": [
        "I1115",
        "E1306",
        "E1307",
        "I1118",
        "I1167"
      ]
    },
    {
      "code": "E1303",
      "name": "Redes de Datos 1",
      "short_name": "Redes 1",
      "year": "3º Año",
      "semester": "2º Semestre",
      "sem_num": 6,
      "hs_s": "6",
      "hs_t": "96",
      "prereq_codes": [
        "I1106"
      ],
      "p2011_code": "E0303",
      "unlocks_codes": [
        "I1114"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "E0303_Redes_de_Datos_1",
      "folder_rel": "materias/E0303_Redes_de_Datos_1",
      "materials": [
        {
          "title": "Resumen Redes de Datos I - Módulo 1 (Teorías 1 a 5)",
          "filename": "Resumen_Redes_Modulo1.html",
          "path": "materias/E0303_Redes_de_Datos_1/Resumen_Redes_Modulo1.html",
          "type": "html",
          "category": "resumenes",
          "badge": "HTML Interactivo",
          "desc": "Modelos de referencia, capas físicas, enlace de datos, direccionamiento IP y subredes."
        },
        {
          "title": "Resumen Redes de Datos I - Módulo 2 (Teorías 6 a 11)",
          "filename": "Resumen_Redes_Modulo2.html",
          "path": "materias/E0303_Redes_de_Datos_1/Resumen_Redes_Modulo2.html",
          "type": "html",
          "category": "resumenes",
          "badge": "HTML Interactivo",
          "desc": "Capa de transporte (TCP/UDP), control de flujo y congestión, capa de aplicación y wireless."
        },
        {
          "title": "Resumen Oficial Redes - Módulo 1 (PDF Imprimible)",
          "filename": "Resumen_Redes_Modulo1.pdf",
          "path": "materias/E0303_Redes_de_Datos_1/Resumen_Redes_Modulo1.pdf",
          "type": "pdf",
          "category": "resumenes",
          "badge": "PDF Resumen",
          "desc": "Versión PDF completa imprimible de teorías 1 a 5."
        },
        {
          "title": "Resumen Oficial Redes - Módulo 2 (PDF Imprimible)",
          "filename": "Resumen_Redes_Modulo2.pdf",
          "path": "materias/E0303_Redes_de_Datos_1/Resumen_Redes_Modulo2.pdf",
          "type": "pdf",
          "category": "resumenes",
          "badge": "PDF Resumen",
          "desc": "Versión PDF completa imprimible de teorías 6 a 11."
        },
        {
          "title": "Teoría 1 - Arquitectura y Modelos OSI / TCP-IP",
          "filename": "Teoria_1_Arquitectura_Modelos.pdf",
          "path": "materias/E0303_Redes_de_Datos_1/Teoria_1_Arquitectura_Modelos.pdf",
          "type": "pdf",
          "category": "clases",
          "badge": "PDF Cátedra",
          "desc": "Diapositivas oficiales de la clase 1 de Redes de Datos I."
        },
        {
          "title": "Parcial Recuperatorio Módulo 1 (Tema 3)",
          "filename": "Parcial_Recuperatorio_Modulo1.pdf",
          "path": "materias/E0303_Redes_de_Datos_1/Parcial_Recuperatorio_Modulo1.pdf",
          "type": "pdf",
          "category": "parciales",
          "badge": "PDF Parcial",
          "desc": "Examen parcial recuperatorio real con enunciados teóricos y ejercicios prácticos."
        }
      ],
      "catedra_url": "http://www.ing.unlp.edu.ar/catedras/E0303/",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/ANEXO_Redes_de_Datos-I.pdf",
      "all_ancestors": [
        "I1106",
        "I1102",
        "I1101",
        "I1001",
        "I1105",
        "I1166"
      ],
      "all_descendants": [
        "I1114"
      ]
    },
    {
      "code": "I1111",
      "name": "Concurrencia y Paralelismo",
      "short_name": "Concurrencia",
      "year": "4º Año",
      "semester": "1º Semestre",
      "sem_num": 7,
      "hs_s": "6",
      "hs_t": "96",
      "prereq_codes": [
        "I1107",
        "I1106"
      ],
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Concurrencia-y-Paralelismo-Plan-2024.pdf",
      "p2011_code": "I111",
      "unlocks_codes": [
        "I1115",
        "I1116"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "I111_Concurrencia_y_Paralelismo",
      "folder_rel": "materias/I111_Concurrencia_y_Paralelismo",
      "materials": [
        {
          "title": "Resumen Completo de Concurrencia (Interactivo)",
          "filename": "Resumen_Concurrencia_Completo.html",
          "path": "materias/I111_Concurrencia_y_Paralelismo/Resumen_Concurrencia_Completo.html",
          "type": "html",
          "category": "resumenes",
          "badge": "HTML Interactivo",
          "desc": "Apunte exhaustivo: Variables Compartidas, Semáforos, Monitores, PMA, PMS y ADA."
        },
        {
          "title": "Libro: An Introduction to Parallel Computing (Addison Wesley)",
          "filename": "Libro_Introduction_Parallel_Computing.pdf",
          "path": "materias/I111_Concurrencia_y_Paralelismo/Libro_Introduction_Parallel_Computing.pdf",
          "type": "pdf",
          "category": "clases",
          "badge": "PDF Libro",
          "desc": "Libro de cabecera de la cátedra para computación paralela y distribuida."
        },
        {
          "title": "Cuestionario Teórico 1 y 2",
          "filename": "Cuestionario_T1_T2.pdf",
          "path": "materias/I111_Concurrencia_y_Paralelismo/Cuestionario_T1_T2.pdf",
          "type": "pdf",
          "category": "parciales",
          "badge": "PDF Parcial",
          "desc": "Evaluación teórica: Conceptos fundamentales de concurrencia y mecanismos básicos."
        },
        {
          "title": "Cuestionario Teórico 3, 4 y 5",
          "filename": "Cuestionario_T3_T4_T5.pdf",
          "path": "materias/I111_Concurrencia_y_Paralelismo/Cuestionario_T3_T4_T5.pdf",
          "type": "pdf",
          "category": "parciales",
          "badge": "PDF Parcial",
          "desc": "Evaluación teórica: Pasaje de mensajes sincrónico/asincrónico y rendezvous ADA."
        },
        {
          "title": "Práctica 1 - Variables Compartidas",
          "filename": "Practica_1_Variables_Compartidas.pdf",
          "path": "materias/I111_Concurrencia_y_Paralelismo/Practica_1_Variables_Compartidas.pdf",
          "type": "pdf",
          "category": "practicas",
          "badge": "PDF Práctica",
          "desc": "Ejercicios de concurrencia con memoria común y exclusión mutua."
        },
        {
          "title": "Práctica 2 - Semáforos",
          "filename": "Practica_2_Semaforos.pdf",
          "path": "materias/I111_Concurrencia_y_Paralelismo/Practica_2_Semaforos.pdf",
          "type": "pdf",
          "category": "practicas",
          "badge": "PDF Práctica",
          "desc": "Sincronización por condición y exclusión con semáforos generales y binarios."
        },
        {
          "title": "Práctica 3 - Monitores",
          "filename": "Practica_3_Monitores.pdf",
          "path": "materias/I111_Concurrencia_y_Paralelismo/Practica_3_Monitores.pdf",
          "type": "pdf",
          "category": "practicas",
          "badge": "PDF Práctica",
          "desc": "Variables condition, señales signal/wait y monitores en concurrencia."
        },
        {
          "title": "Práctica de Laboratorio",
          "filename": "Practica_Laboratorio.pdf",
          "path": "materias/I111_Concurrencia_y_Paralelismo/Practica_Laboratorio.pdf",
          "type": "pdf",
          "category": "practicas",
          "badge": "PDF Laboratorio",
          "desc": "Guía de trabajos prácticos de implementación en laboratorio."
        },
        {
          "title": "Guía Práctica: Variables Compartidas",
          "filename": "Guia_Variables_Compartidas.pdf",
          "path": "materias/I111_Concurrencia_y_Paralelismo/Guia_Variables_Compartidas.pdf",
          "type": "pdf",
          "category": "practicas",
          "badge": "PDF Guía",
          "desc": "Resoluciones y explicaciones de ejercicios de variables compartidas."
        },
        {
          "title": "Guía Práctica: Semáforos",
          "filename": "Guia_Semaforos.pdf",
          "path": "materias/I111_Concurrencia_y_Paralelismo/Guia_Semaforos.pdf",
          "type": "pdf",
          "category": "practicas",
          "badge": "PDF Guía",
          "desc": "Resoluciones paso a paso y patrones de sincronización con semáforos."
        },
        {
          "title": "Guía Práctica: Monitores",
          "filename": "Guia_Monitores.pdf",
          "path": "materias/I111_Concurrencia_y_Paralelismo/Guia_Monitores.pdf",
          "type": "pdf",
          "category": "practicas",
          "badge": "PDF Guía",
          "desc": "Patrones de diseño concurrente con monitores."
        },
        {
          "title": "Guía Práctica: Pasaje de Mensajes Asincrónicos (PMA)",
          "filename": "Guia_PMA.pdf",
          "path": "materias/I111_Concurrencia_y_Paralelismo/Guia_PMA.pdf",
          "type": "pdf",
          "category": "practicas",
          "badge": "PDF Guía",
          "desc": "Canales de comunicación asincrónica, send y receive no bloqueante."
        },
        {
          "title": "Guía Práctica: Pasaje de Mensajes Sincrónicos (PMS)",
          "filename": "Guia_PMS.pdf",
          "path": "materias/I111_Concurrencia_y_Paralelismo/Guia_PMS.pdf",
          "type": "pdf",
          "category": "practicas",
          "badge": "PDF Guía",
          "desc": "Canales sincrónicos y comunicación estilo CSP."
        },
        {
          "title": "Guía Práctica: Lenguaje ADA (Rendezvous)",
          "filename": "Guia_ADA.pdf",
          "path": "materias/I111_Concurrencia_y_Paralelismo/Guia_ADA.pdf",
          "type": "pdf",
          "category": "practicas",
          "badge": "PDF Guía",
          "desc": "Sintaxis, tareas, select y rendezvous en el lenguaje ADA."
        },
        {
          "title": "Libro: Foundations of Multithreaded, Parallel & Distributed Programming",
          "filename": "Addison_Wesley_Foundations_Multithreaded_Parallel_Programming.pdf",
          "path": "materias/I111_Concurrencia_y_Paralelismo/Addison_Wesley_Foundations_Multithreaded_Parallel_Programming.pdf",
          "type": "pdf",
          "category": "clases",
          "badge": "PDF Libro",
          "desc": "Libro de Gregory R. Andrews (Addison-Wesley), texto fundamental de la materia."
        },
        {
          "title": "Teoría 1: Fundamentos de Concurrencia",
          "filename": "Teoria_1_Fundamentos.pdf",
          "path": "materias/I111_Concurrencia_y_Paralelismo/Teoria_1_Fundamentos.pdf",
          "type": "pdf",
          "category": "clases",
          "badge": "PDF Teoría",
          "desc": "Procesos, estados, interleaving y concurrencia lógica vs física."
        },
        {
          "title": "Clase 1: Introducción a la Concurrencia",
          "filename": "Clase_1_Introduccion.pdf",
          "path": "materias/I111_Concurrencia_y_Paralelismo/Clase_1_Introduccion.pdf",
          "type": "pdf",
          "category": "clases",
          "badge": "PDF Clase",
          "desc": "Diapositivas de clase: conceptos iniciales y motivación."
        },
        {
          "title": "Teoría 2: Variables Compartidas",
          "filename": "Teoria_2_Variables_Compartidas.pdf",
          "path": "materias/I111_Concurrencia_y_Paralelismo/Teoria_2_Variables_Compartidas.pdf",
          "type": "pdf",
          "category": "clases",
          "badge": "PDF Teoría",
          "desc": "Mecanismos de sincronización con memoria compartida y exclusión mutua."
        },
        {
          "title": "Clase 2: Variables Compartidas",
          "filename": "Clase_2_Variables_Compartidas.pdf",
          "path": "materias/I111_Concurrencia_y_Paralelismo/Clase_2_Variables_Compartidas.pdf",
          "type": "pdf",
          "category": "clases",
          "badge": "PDF Clase",
          "desc": "Diapositivas de clase: algoritmos de exclusión mutua y espera ocupada."
        },
        {
          "title": "Teoría 3: Semáforos",
          "filename": "Teoria_3_Semaforos.pdf",
          "path": "materias/I111_Concurrencia_y_Paralelismo/Teoria_3_Semaforos.pdf",
          "type": "pdf",
          "category": "clases",
          "badge": "PDF Teoría",
          "desc": "Semáforos generales y binarios, primitiva P y V, pasaje de testigo."
        },
        {
          "title": "Clase 3: Semáforos",
          "filename": "Clase_3_Semaforos.pdf",
          "path": "materias/I111_Concurrencia_y_Paralelismo/Clase_3_Semaforos.pdf",
          "type": "pdf",
          "category": "clases",
          "badge": "PDF Clase",
          "desc": "Diapositivas de clase: patrones clásicos con semáforos."
        },
        {
          "title": "Teoría 4: Monitores",
          "filename": "Teoria_4_Monitores.pdf",
          "path": "materias/I111_Concurrencia_y_Paralelismo/Teoria_4_Monitores.pdf",
          "type": "pdf",
          "category": "clases",
          "badge": "PDF Teoría",
          "desc": "Estructuras de encapsulamiento concurrente, variables condition y disciplinas."
        },
        {
          "title": "Clase 4: Monitores",
          "filename": "Clase_4_Monitores.pdf",
          "path": "materias/I111_Concurrencia_y_Paralelismo/Clase_4_Monitores.pdf",
          "type": "pdf",
          "category": "clases",
          "badge": "PDF Clase",
          "desc": "Diapositivas de clase: sincronización por condición con monitores."
        },
        {
          "title": "Teoría 5: Pasaje de Mensajes Asincrónicos (PMA)",
          "filename": "Teoria_5_Pasaje_Mensajes_Asincronicos.pdf",
          "path": "materias/I111_Concurrencia_y_Paralelismo/Teoria_5_Pasaje_Mensajes_Asincronicos.pdf",
          "type": "pdf",
          "category": "clases",
          "badge": "PDF Teoría",
          "desc": "Canales asincrónicos, primitivas send y receive no bloqueante."
        },
        {
          "title": "Teoría 6: Pasaje de Mensajes Sincrónicos (PMS)",
          "filename": "Teoria_6_Pasaje_Mensajes_Sincronicos.pdf",
          "path": "materias/I111_Concurrencia_y_Paralelismo/Teoria_6_Pasaje_Mensajes_Sincronicos.pdf",
          "type": "pdf",
          "category": "clases",
          "badge": "PDF Teoría",
          "desc": "Comunicación sincrónica, CSP de Hoare y guardas alternativas."
        },
        {
          "title": "Teoría 7: RPC & Rendezvous",
          "filename": "Teoria_7_RPC_Rendezvous.pdf",
          "path": "materias/I111_Concurrencia_y_Paralelismo/Teoria_7_RPC_Rendezvous.pdf",
          "type": "pdf",
          "category": "clases",
          "badge": "PDF Teoría",
          "desc": "Mecanismo bidireccional cliente-servidor y rendezvous en ADA."
        },
        {
          "title": "Teoría 8: Paralelismo y Memoria Distribuida",
          "filename": "Teoria_8_Paralelismo_Memoria_Distribuida.pdf",
          "path": "materias/I111_Concurrencia_y_Paralelismo/Teoria_8_Paralelismo_Memoria_Distribuida.pdf",
          "type": "pdf",
          "category": "clases",
          "badge": "PDF Teoría",
          "desc": "Arquitecturas paralelas, paso de mensajes distribuidos y MPI."
        }
      ],
      "catedra_url": "http://weblidi.info.unlp.edu.ar/catedras/concurrenciayparalelismo/index.html",
      "all_ancestors": [
        "I1107",
        "I1104",
        "I1102",
        "I1101",
        "I1001",
        "I1106",
        "I1105",
        "I1166"
      ],
      "all_descendants": [
        "I1115",
        "I1116"
      ]
    },
    {
      "code": "E1304",
      "name": "Instrumentación y Control",
      "short_name": "Inst. y Control",
      "year": "4º Año",
      "semester": "1º Semestre",
      "sem_num": 7,
      "hs_s": "6",
      "hs_t": "96",
      "prereq_codes": [
        "E1282",
        "E1302"
      ],
      "p2011_code": "E0304",
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "E0304_Instrumentacion_y_Control",
      "folder_rel": "materias/E0304_Instrumentacion_y_Control",
      "materials": [
        {
          "title": "Resumen Teórico-Práctico IyC Módulo 2",
          "filename": "Resumen_IyC_Modulo2.html",
          "path": "materias/E0304_Instrumentacion_y_Control/Resumen_IyC_Modulo2.html",
          "type": "html",
          "category": "resumenes",
          "badge": "HTML Interactivo",
          "desc": "Control continuo, transformada de Laplace, función de transferencia y PID."
        },
        {
          "title": "Manual Oficial de Ingeniería de Control",
          "filename": "MO_Ingenieria_de_Control.pdf",
          "path": "materias/E0304_Instrumentacion_y_Control/MO_Ingenieria_de_Control.pdf",
          "type": "pdf",
          "category": "clases",
          "badge": "PDF Libro",
          "desc": "Texto guía oficial de la cátedra de Instrumentación y Control."
        },
        {
          "title": "TP Simulación y Sintonía PID (2026)",
          "filename": "TP_Simulacion_PID_2026.pdf",
          "path": "materias/E0304_Instrumentacion_y_Control/TP_Simulacion_PID_2026.pdf",
          "type": "pdf",
          "category": "practicas",
          "badge": "PDF Guía",
          "desc": "Guía de simulación computacional de lazos de control PID."
        },
        {
          "title": "Enunciado TP5 - Modelos y Sistemas",
          "filename": "TP5_Enunciado_Modelos_Sistemas.pdf",
          "path": "materias/E0304_Instrumentacion_y_Control/TP5_Enunciado_Modelos_Sistemas.pdf",
          "type": "pdf",
          "category": "practicas",
          "badge": "PDF Enunciado",
          "desc": "Guía de problemas de modelado de sistemas físicos."
        },
        {
          "title": "Enunciado TP7 - Estabilidad Routh, LDR y Bode",
          "filename": "TP7_Estabilidad_LDR_Routh_Bode.pdf",
          "path": "materias/E0304_Instrumentacion_y_Control/TP7_Estabilidad_LDR_Routh_Bode.pdf",
          "type": "pdf",
          "category": "practicas",
          "badge": "PDF Enunciado",
          "desc": "Guía práctica de estabilidad en lazo cerrado."
        }
      ],
      "catedra_url": "",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/ANEXO_INSTRUMENTACION_Y_CONTROL.pdf",
      "all_ancestors": [
        "E1282",
        "F1304",
        "F1302",
        "F1301",
        "D1001",
        "F1305",
        "F1303",
        "E1302",
        "F1306"
      ],
      "all_descendants": []
    },
    {
      "code": "E1305",
      "name": "Circuitos Digitales y Microcontroladores",
      "short_name": "Circuitos Dig.",
      "year": "4º Año",
      "semester": "1º Semestre",
      "sem_num": 7,
      "hs_s": "6",
      "hs_t": "96",
      "prereq_codes": [
        "I1109"
      ],
      "p2011_code": "E0305",
      "unlocks_codes": [
        "E1306"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "E0305_Circuitos_Digitales_y_Microcontroladores",
      "folder_rel": "materias/E0305_Circuitos_Digitales_y_Microcontroladores",
      "materials": [],
      "catedra_url": "http://www.ing.unlp.edu.ar/catedras/E0305",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/ANEXO_CIRCUITOS_DIGITALES_Y_MICROCONTROLADORES.pdf",
      "all_ancestors": [
        "I1109",
        "E1301",
        "I1105",
        "I1166",
        "I1001"
      ],
      "all_descendants": [
        "E1306",
        "E1307"
      ]
    },
    {
      "code": "I1113",
      "name": "Economía y Emprendedorismo",
      "short_name": "Economía",
      "year": "4º Año",
      "semester": "1º Semestre",
      "sem_num": 7,
      "hs_s": "3",
      "hs_t": "48",
      "prereq_codes": [
        "F1304"
      ],
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2025/05/Economia-y-Emprendedorismo-Plan-2024.pdf",
      "p2011_code": "I113",
      "unlocks_codes": [
        "I1117"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "I113_Economia_y_Emprendedorismo",
      "folder_rel": "materias/I113_Economia_y_Emprendedorismo",
      "materials": [],
      "catedra_url": "http://www.ing.unlp.edu.ar/catedras/I0113/",
      "all_ancestors": [
        "F1304",
        "F1302",
        "F1301",
        "D1001"
      ],
      "all_descendants": [
        "I1117"
      ]
    },
    {
      "code": "AFC1",
      "name": "Actividades de Formación Complementaria I",
      "short_name": "AFC I",
      "year": "4º Año",
      "semester": "1º Semestre",
      "sem_num": 7,
      "hs_s": "2",
      "hs_t": "32",
      "prereq_codes": [],
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Ordenanza-335-23-Reglamento-para-actividades-complementarias-AFC.pdf",
      "unlocks_codes": [
        "AFC2"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "AFC1_AFC_I",
      "folder_rel": "materias/AFC1_AFC_I",
      "materials": [],
      "all_ancestors": [],
      "all_descendants": [
        "AFC2",
        "AFC3",
        "AFC4"
      ]
    },
    {
      "code": "I1114",
      "name": "Redes de Datos II",
      "short_name": "Redes 2",
      "year": "4º Año",
      "semester": "2º Semestre",
      "sem_num": 8,
      "hs_s": "6",
      "hs_t": "96",
      "prereq_codes": [
        "E1303"
      ],
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Redes-de-Datos-II-IC-2026-Plan-2024.pdf",
      "p2011_code": "I114",
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "E0306_Taller_de_Proyecto_I",
      "folder_rel": "materias/E0306_Taller_de_Proyecto_I",
      "materials": [],
      "catedra_url": "",
      "all_ancestors": [
        "E1303",
        "I1106",
        "I1102",
        "I1101",
        "I1001",
        "I1105",
        "I1166"
      ],
      "all_descendants": []
    },
    {
      "code": "I1115",
      "name": "Sistemas de Tiempo Real",
      "short_name": "Tiempo Real",
      "year": "4º Año",
      "semester": "2º Semestre",
      "sem_num": 8,
      "hs_s": "6",
      "hs_t": "96",
      "prereq_codes": [
        "I1110",
        "I1111"
      ],
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2025/05/Sistemas-de-Tiempo-Real-Plan-2024.pdf",
      "p2011_code": "I115",
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "I115_Sistemas_de_Tiempo_Real",
      "folder_rel": "materias/I115_Sistemas_de_Tiempo_Real",
      "materials": [],
      "catedra_url": "http://weblidi.info.unlp.edu.ar/catedras/tiemporeal/index.html",
      "all_ancestors": [
        "I1110",
        "I1102",
        "I1101",
        "I1001",
        "I1111",
        "I1107",
        "I1104",
        "I1106",
        "I1105",
        "I1166"
      ],
      "all_descendants": []
    },
    {
      "code": "E1306",
      "name": "Taller de Proyecto I",
      "short_name": "Proyecto I",
      "year": "4º Año",
      "semester": "2º Semestre",
      "sem_num": 8,
      "hs_s": "4",
      "hs_t": "64",
      "prereq_codes": [
        "I1110",
        "E1305"
      ],
      "p2011_code": "E0306",
      "unlocks_codes": [
        "E1307"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "I114_Redes_de_Datos_II",
      "folder_rel": "materias/I114_Redes_de_Datos_II",
      "materials": [],
      "catedra_url": "",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Redes-de-Datos-II-IC-2026-Plan-2008-2011.pdf",
      "all_ancestors": [
        "I1110",
        "I1102",
        "I1101",
        "I1001",
        "E1305",
        "I1109",
        "E1301",
        "I1105",
        "I1166"
      ],
      "all_descendants": [
        "E1307"
      ]
    },
    {
      "code": "I1112",
      "name": "Bases de Datos",
      "short_name": "Bases Datos II",
      "year": "4º Año",
      "semester": "2º Semestre",
      "sem_num": 8,
      "hs_s": "6",
      "hs_t": "96",
      "prereq_codes": [
        "I1108"
      ],
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Bases-de-Datos-Plan-2024-1.pdf",
      "p2011_code": "I112",
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "I112_Bases_de_Datos",
      "folder_rel": "materias/I112_Bases_de_Datos",
      "materials": [],
      "catedra_url": "http://weblidi.info.unlp.edu.ar/catedras/ing_bd/index.html",
      "all_ancestors": [
        "I1108",
        "I1102",
        "I1101",
        "I1001"
      ],
      "all_descendants": []
    },
    {
      "code": "AFC2",
      "name": "Actividades de Formación Complementaria II",
      "short_name": "AFC II",
      "year": "4º Año",
      "semester": "2º Semestre",
      "sem_num": 8,
      "hs_s": "2",
      "hs_t": "32",
      "prereq_codes": [
        "AFC1"
      ],
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Ordenanza-335-23-Reglamento-para-actividades-complementarias-AFC.pdf",
      "unlocks_codes": [
        "AFC3"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "AFC2_AFC_II",
      "folder_rel": "materias/AFC2_AFC_II",
      "materials": [],
      "all_ancestors": [
        "AFC1"
      ],
      "all_descendants": [
        "AFC3",
        "AFC4"
      ]
    },
    {
      "code": "I1116",
      "name": "Sistemas Distribuidos y Paralelos",
      "short_name": "Distribuidos",
      "year": "5º Año",
      "semester": "1º Semestre",
      "sem_num": 9,
      "hs_s": "6",
      "hs_t": "96",
      "prereq_codes": [
        "I1111"
      ],
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Sistemas-Distribuidos-y-Paralelos-Plan-2024-1.pdf",
      "p2011_code": "I116",
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "I116_Sistemas_Distribuidos_y_Paralelos",
      "folder_rel": "materias/I116_Sistemas_Distribuidos_y_Paralelos",
      "materials": [],
      "catedra_url": "http://weblidi.info.unlp.edu.ar/catedras/sistemasdistribuidosyparalelos/index.html",
      "all_ancestors": [
        "I1111",
        "I1107",
        "I1104",
        "I1102",
        "I1101",
        "I1001",
        "I1106",
        "I1105",
        "I1166"
      ],
      "all_descendants": []
    },
    {
      "code": "I1117",
      "name": "Aspectos Legales Ingenieria Informatica",
      "short_name": "Legales",
      "year": "5º Año",
      "semester": "1º Semestre",
      "sem_num": 9,
      "hs_s": "3",
      "hs_t": "48",
      "prereq_codes": [
        "I1113"
      ],
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Aspectos-Legales-Ingenieria-Informatica-Plan-2008-2011-2024.pdf",
      "p2011_code": "I117",
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "I117_Aspectos_Legales_Ingenieria_Informatica",
      "folder_rel": "materias/I117_Aspectos_Legales_Ingenieria_Informatica",
      "materials": [],
      "catedra_url": "",
      "all_ancestors": [
        "I1113",
        "F1304",
        "F1302",
        "F1301",
        "D1001"
      ],
      "all_descendants": []
    },
    {
      "code": "E1307",
      "name": "Introducción a la Arquitectura de Computadoras Cuánticas",
      "short_name": "Arq. Cuántica",
      "year": "5º Año",
      "semester": "1º Semestre",
      "sem_num": 9,
      "hs_s": "4",
      "hs_t": "94",
      "prereq_codes": [
        "E1306"
      ],
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "E1307_Arq__Cu_ntica",
      "folder_rel": "materias/E1307_Arq__Cu_ntica",
      "materials": [],
      "all_ancestors": [
        "E1306",
        "I1110",
        "I1102",
        "I1101",
        "I1001",
        "E1305",
        "I1109",
        "E1301",
        "I1105",
        "I1166"
      ],
      "all_descendants": []
    },
    {
      "code": "OPT1",
      "slot_id": "OPT1",
      "is_optativa_slot": true,
      "name": "Optativa 1",
      "short_name": "Optativa 1",
      "year": "5º Año",
      "semester": "1º Semestre",
      "sem_num": 9,
      "hs_s": "6",
      "hs_t": "96",
      "prereq_codes": [],
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "OPT1_Optativa_1",
      "folder_rel": "materias/OPT1_Optativa_1",
      "materials": [],
      "all_ancestors": [],
      "all_descendants": []
    },
    {
      "code": "AFC3",
      "name": "Actividades de Formación Complementaria III",
      "short_name": "AFC III",
      "year": "5º Año",
      "semester": "1º Semestre",
      "sem_num": 9,
      "hs_s": "2",
      "hs_t": "32",
      "prereq_codes": [
        "AFC2"
      ],
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Ordenanza-335-23-Reglamento-para-actividades-complementarias-AFC.pdf",
      "unlocks_codes": [
        "AFC4"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "AFC3_AFC_III",
      "folder_rel": "materias/AFC3_AFC_III",
      "materials": [],
      "all_ancestors": [
        "AFC2",
        "AFC1"
      ],
      "all_descendants": [
        "AFC4"
      ]
    },
    {
      "code": "I1118",
      "name": "Taller de Proyecto II",
      "short_name": "Proyecto II",
      "year": "5º Año",
      "semester": "2º Semestre",
      "sem_num": 10,
      "hs_s": "4",
      "hs_t": "64",
      "prereq_codes": [
        "I1110"
      ],
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Taller-de-Proyecto-II-Plan-2024.pdf",
      "p2011_code": "I118",
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "I118_Taller_de_Proyecto_II",
      "folder_rel": "materias/I118_Taller_de_Proyecto_II",
      "materials": [],
      "catedra_url": "https://lidi.info.unlp.edu.ar/~fernando/clases/clases.html",
      "all_ancestors": [
        "I1110",
        "I1102",
        "I1101",
        "I1001"
      ],
      "all_descendants": []
    },
    {
      "code": "HUM",
      "name": "Electiva Aspectos Humanísticos de la Profesión",
      "short_name": "Humanística",
      "year": "5º Año",
      "semester": "2º Semestre",
      "sem_num": 10,
      "hs_s": "3",
      "hs_t": "48",
      "prereq_codes": [],
      "p2011_code": "S0012",
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "S0012_Seminario_de_Redaccion_de_Textos_Profesionales",
      "folder_rel": "materias/S0012_Seminario_de_Redaccion_de_Textos_Profesionales",
      "materials": [],
      "catedra_url": "",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/ANEXO_Seminario_de_Redaccion_de_Textos_Profesionales.pdf",
      "all_ancestors": [],
      "all_descendants": []
    },
    {
      "code": "I1167",
      "name": "Introducción a la Programación Cuántica",
      "short_name": "Prog. Cuántica",
      "year": "5º Año",
      "semester": "2º Semestre",
      "sem_num": 10,
      "hs_s": "3",
      "hs_t": "48",
      "prereq_codes": [
        "I1105",
        "I1110"
      ],
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/08/IC-Obligatoria-Introduccion-a-la-Programacion-Cuantica-Plan-2024-1.pdf",
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "I1167_Prog__Cu_ntica",
      "folder_rel": "materias/I1167_Prog__Cu_ntica",
      "materials": [],
      "all_ancestors": [
        "I1105",
        "I1166",
        "I1001",
        "I1110",
        "I1102",
        "I1101"
      ],
      "all_descendants": []
    },
    {
      "code": "OPT2",
      "slot_id": "OPT2",
      "is_optativa_slot": true,
      "name": "Optativa 2",
      "short_name": "Optativa 2",
      "year": "5º Año",
      "semester": "2º Semestre",
      "sem_num": 10,
      "hs_s": "6",
      "hs_t": "96",
      "prereq_codes": [],
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "OPT2_Optativa_2",
      "folder_rel": "materias/OPT2_Optativa_2",
      "materials": [],
      "all_ancestors": [],
      "all_descendants": []
    },
    {
      "code": "AFC4",
      "name": "Actividades de Formación Complementaria IV",
      "short_name": "AFC IV",
      "year": "5º Año",
      "semester": "2º Semestre",
      "sem_num": 10,
      "hs_s": "2",
      "hs_t": "32",
      "prereq_codes": [
        "AFC3"
      ],
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Ordenanza-335-23-Reglamento-para-actividades-complementarias-AFC.pdf",
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "folder_name": "AFC4_AFC_IV",
      "folder_rel": "materias/AFC4_AFC_IV",
      "materials": [],
      "all_ancestors": [
        "AFC3",
        "AFC2",
        "AFC1"
      ],
      "all_descendants": []
    }
  ]
};
