// Base de datos - Mapa Conceptual de Estudio
// Ingeniería en Computación (UNLP - Plan 2011)

window.ACADEMIC_DATA = {
  "carrera": "Ingeniería en Computación",
  "universidad": "Universidad Nacional de La Plata",
  "facultades": "Facultad de Informática & Facultad de Ingeniería",
  "plan": "Plan 2011",
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
    "horas_totales": 3888
  },
  "materias": [
    {
      "code": "MATE-PI",
      "name": "Matemática para Ingeniería (Mate PI)",
      "short_name": "Mate PI",
      "year": "Curso de Nivelación",
      "semester": "Ingreso UNLP",
      "sem_num": 0,
      "hs_s": "8",
      "hs_t": "64",
      "facultad": "Facultad de Ingeniería (UNLP)",
      "program_url": "https://www.ing.unlp.edu.ar/ingreso",
      "catedra_url": "https://www.ing.unlp.edu.ar/",
      "correlativas": "",
      "prereq_codes": [],
      "unlocks_codes": [
        "F0301"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [],
      "all_descendants": [
        "F0301",
        "E0304",
        "F0317",
        "F0302",
        "F0307",
        "F0304",
        "I117",
        "F0310",
        "E0282",
        "I113",
        "F0312",
        "F0316",
        "E0302"
      ],
      "folder_name": "MATE_PI_Ingreso",
      "folder_rel": "materias/MATE_PI_Ingreso",
      "materials": []
    },
    {
      "code": "IAI",
      "name": "Introducción a la Informática (IaI)",
      "short_name": "IaI",
      "year": "Curso de Nivelación",
      "semester": "Ingreso UNLP",
      "sem_num": 0,
      "hs_s": "8",
      "hs_t": "64",
      "facultad": "Facultad de Informática (UNLP)",
      "program_url": "https://www.info.unlp.edu.ar/ingreso/",
      "catedra_url": "https://www.info.unlp.edu.ar/",
      "correlativas": "",
      "prereq_codes": [],
      "unlocks_codes": [
        "I101"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [],
      "all_descendants": [
        "I101",
        "I116",
        "I110",
        "I106",
        "I104",
        "I112",
        "I102",
        "I105",
        "E0306",
        "I111",
        "E0305",
        "E0303",
        "E0301",
        "I118",
        "I114",
        "I115",
        "I109",
        "I103",
        "I108",
        "I107"
      ],
      "folder_name": "IAI_Introduccion_Informatica",
      "folder_rel": "materias/IAI_Introduccion_Informatica",
      "materials": []
    },
    {
      "code": "F0301",
      "name": "Matemática A",
      "year": "Primer año",
      "semester": "Primer semestre",
      "sem_num": 1,
      "hs_s": "12",
      "hs_t": "168",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/ANEXO_Matematica_A.pdf",
      "catedra_url": "http://www.ing.unlp.edu.ar/catedras/F0301/",
      "correlativas": "",
      "prereq_codes": [
        "MATE-PI"
      ],
      "unlocks_codes": [
        "F0302",
        "F0316"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "MATE-PI"
      ],
      "all_descendants": [
        "E0304",
        "F0317",
        "F0302",
        "F0307",
        "F0304",
        "I117",
        "F0310",
        "E0282",
        "I113",
        "F0312",
        "F0316",
        "E0302"
      ],
      "folder_name": "F0301_Matematica_A",
      "folder_rel": "materias/F0301_Matematica_A",
      "materials": []
    },
    {
      "code": "I101",
      "name": "Programación I",
      "year": "Primer año",
      "semester": "Primer semestre",
      "sem_num": 1,
      "hs_s": "8",
      "hs_t": "112",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Programacion-I-Plan-2008-2011.pdf",
      "catedra_url": "http://blogs.unlp.edu.ar/progra1/",
      "correlativas": "",
      "prereq_codes": [
        "IAI"
      ],
      "unlocks_codes": [
        "I102"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "IAI"
      ],
      "all_descendants": [
        "I116",
        "I110",
        "I106",
        "I104",
        "I112",
        "I102",
        "I105",
        "E0306",
        "I111",
        "E0305",
        "E0303",
        "E0301",
        "I118",
        "I114",
        "I115",
        "I109",
        "I103",
        "I108",
        "I107"
      ],
      "folder_name": "I101_Programacion_I",
      "folder_rel": "materias/I101_Programacion_I",
      "materials": []
    },
    {
      "code": "U0902",
      "name": "Química",
      "year": "Primer año",
      "semester": "Primer semestre",
      "sem_num": 1,
      "hs_s": "6",
      "hs_t": "84",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/ANEXO_Quimica.pdf",
      "catedra_url": "http://www.ing.unlp.edu.ar/catedras/U0902/",
      "correlativas": "",
      "prereq_codes": [],
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [],
      "all_descendants": [],
      "folder_name": "U0902_Quimica",
      "folder_rel": "materias/U0902_Quimica",
      "materials": []
    },
    {
      "code": "F0302",
      "name": "Matemática B",
      "year": "Primer año",
      "semester": "Segundo Semestre",
      "sem_num": 2,
      "hs_s": "12",
      "hs_t": "168",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/ANEXO_Matematica_B.pdf",
      "catedra_url": "http://www.ing.unlp.edu.ar/catedras/F0302/",
      "correlativas": "F0301",
      "prereq_codes": [
        "F0301"
      ],
      "unlocks_codes": [
        "F0304",
        "F0317",
        "F0312"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "F0301",
        "MATE-PI"
      ],
      "all_descendants": [
        "E0304",
        "F0317",
        "F0307",
        "F0304",
        "I117",
        "F0310",
        "E0282",
        "I113",
        "F0312",
        "E0302"
      ],
      "folder_name": "F0302_Matematica_B",
      "folder_rel": "materias/F0302_Matematica_B",
      "materials": []
    },
    {
      "code": "I102",
      "name": "Programación II",
      "year": "Primer año",
      "semester": "Segundo Semestre",
      "sem_num": 2,
      "hs_s": "8",
      "hs_t": "112",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Programacion-II-Plan-2008-2011-1.pdf",
      "catedra_url": "http://blogs.unlp.edu.ar/programacion2/",
      "correlativas": "I101",
      "prereq_codes": [
        "I101"
      ],
      "unlocks_codes": [
        "I103",
        "I104",
        "I105",
        "I106"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "I101",
        "IAI"
      ],
      "all_descendants": [
        "I115",
        "I116",
        "I109",
        "I103",
        "E0305",
        "E0303",
        "E0301",
        "I108",
        "I112",
        "I110",
        "I118",
        "I106",
        "I104",
        "I114",
        "I105",
        "E0306",
        "I111",
        "I107"
      ],
      "folder_name": "I102_Programacion_II",
      "folder_rel": "materias/I102_Programacion_II",
      "materials": []
    },
    {
      "code": "M0670",
      "name": "Sistemas de Representación",
      "year": "Primer año",
      "semester": "Segundo Semestre",
      "sem_num": 2,
      "hs_s": "3",
      "hs_t": "42",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/ANEXO_Sistemas_de_Representacion_C.pdf",
      "catedra_url": "https://catedras.ing.unlp.edu.ar/grafica/",
      "correlativas": "",
      "prereq_codes": [],
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [],
      "all_descendants": [],
      "folder_name": "M0670_Sistemas_de_Representacion",
      "folder_rel": "materias/M0670_Sistemas_de_Representacion",
      "materials": []
    },
    {
      "code": "F0316",
      "name": "Física I",
      "year": "Segundo año",
      "semester": "Primer semestre",
      "sem_num": 3,
      "hs_s": "7",
      "hs_t": "98",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/ANEXO_Fisica_I.pdf",
      "catedra_url": "http://www.ing.unlp.edu.ar/catedras/F0303/",
      "correlativas": "F0301",
      "prereq_codes": [
        "F0301"
      ],
      "unlocks_codes": [
        "F0317"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "F0301",
        "MATE-PI"
      ],
      "all_descendants": [
        "E0282",
        "F0317",
        "E0304"
      ],
      "folder_name": "F0316_Fisica_I",
      "folder_rel": "materias/F0316_Fisica_I",
      "materials": []
    },
    {
      "code": "I103",
      "name": "Programación III",
      "year": "Segundo año",
      "semester": "Primer semestre",
      "sem_num": 3,
      "hs_s": "6",
      "hs_t": "96",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Programacion-III-Plan-2008-2011.pdf",
      "catedra_url": "http://www.linti.unlp.edu.ar/articulo/2011/3/10/avisos_programacion3",
      "correlativas": "I102",
      "prereq_codes": [
        "I102"
      ],
      "unlocks_codes": [
        "I108"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "I102",
        "I101",
        "IAI"
      ],
      "all_descendants": [
        "I115",
        "I108",
        "I112",
        "I118",
        "I110",
        "E0306"
      ],
      "folder_name": "I103_Programacion_III",
      "folder_rel": "materias/I103_Programacion_III",
      "materials": []
    },
    {
      "code": "I104",
      "name": "Taller de Lenguajes I",
      "year": "Segundo año",
      "semester": "Primer semestre",
      "sem_num": 3,
      "hs_s": "6",
      "hs_t": "96",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Taller-de-Lenguajes-I-Plan-2008-2011-1.pdf",
      "catedra_url": "http://weblidi.info.unlp.edu.ar/catedras/TallerLeng1/",
      "correlativas": "I102",
      "prereq_codes": [
        "I102"
      ],
      "unlocks_codes": [
        "I107"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "I102",
        "I101",
        "IAI"
      ],
      "all_descendants": [
        "I115",
        "I116",
        "I111",
        "I107"
      ],
      "folder_name": "I104_Taller_de_Lenguajes_I",
      "folder_rel": "materias/I104_Taller_de_Lenguajes_I",
      "materials": []
    },
    {
      "code": "I105",
      "name": "Conceptos de Arquitecturade Computadoras",
      "year": "Segundo año",
      "semester": "Primer semestre",
      "sem_num": 3,
      "hs_s": "6",
      "hs_t": "96",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2025/05/Conceptos-de-Arquitectura-de-Computadoras-Plan-2008-2011.pdf",
      "catedra_url": "http://weblidi.info.unlp.edu.ar/catedras/ConArqCom/index.htm",
      "correlativas": "I102",
      "prereq_codes": [
        "I102"
      ],
      "unlocks_codes": [
        "I106",
        "E0301"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "I102",
        "I101",
        "IAI"
      ],
      "all_descendants": [
        "I109",
        "I116",
        "I115",
        "E0305",
        "E0303",
        "E0301",
        "I106",
        "I114",
        "E0306",
        "I111"
      ],
      "folder_name": "I105_Conceptos_de_Arquitecturade_Computadoras",
      "folder_rel": "materias/I105_Conceptos_de_Arquitecturade_Computadoras",
      "materials": []
    },
    {
      "code": "F0304",
      "name": "Matemática C",
      "year": "Segundo año",
      "semester": "Segundo semestre",
      "sem_num": 4,
      "hs_s": "9",
      "hs_t": "126",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/ANEXO_Matematica_C.pdf",
      "catedra_url": "http://www.ing.unlp.edu.ar/catedras/F0304/",
      "correlativas": "F0302",
      "prereq_codes": [
        "F0302"
      ],
      "unlocks_codes": [
        "F0310",
        "E0282",
        "F0307",
        "I113"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "F0302",
        "F0301",
        "MATE-PI"
      ],
      "all_descendants": [
        "E0304",
        "I117",
        "F0307",
        "F0310",
        "I113",
        "E0282",
        "E0302"
      ],
      "folder_name": "F0304_Matematica_C",
      "folder_rel": "materias/F0304_Matematica_C",
      "materials": []
    },
    {
      "code": "F0317",
      "name": "Física II",
      "year": "Segundo año",
      "semester": "Segundo semestre",
      "sem_num": 4,
      "hs_s": "7",
      "hs_t": "98",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/ANEXO_Fisica_-II.pdf",
      "catedra_url": "http://www.ing.unlp.edu.ar/catedras/F0305/",
      "correlativas": "F0302-F0316",
      "prereq_codes": [
        "F0302",
        "F0316"
      ],
      "unlocks_codes": [
        "E0282"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "F0302",
        "F0316",
        "F0301",
        "MATE-PI"
      ],
      "all_descendants": [
        "E0282",
        "E0304"
      ],
      "folder_name": "F0317_Fisica_II",
      "folder_rel": "materias/F0317_Fisica_II",
      "materials": []
    },
    {
      "code": "I106",
      "name": "Conceptos de Sistemas Operativos",
      "year": "Segundo año",
      "semester": "Segundo semestre",
      "sem_num": 4,
      "hs_s": "6",
      "hs_t": "96",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Conceptos-de-Sistemas-Operativos-Plan-2008-2011-Redictado.pdf",
      "catedra_url": "",
      "correlativas": "I102-I105",
      "prereq_codes": [
        "I102",
        "I105"
      ],
      "unlocks_codes": [
        "E0303",
        "I111"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "I105",
        "I102",
        "I101",
        "IAI"
      ],
      "all_descendants": [
        "I115",
        "I116",
        "E0303",
        "I114",
        "I111"
      ],
      "folder_name": "I106_Conceptos_de_Sistemas_Operativos",
      "folder_rel": "materias/I106_Conceptos_de_Sistemas_Operativos",
      "materials": []
    },
    {
      "code": "I107",
      "name": "Taller de Lenguajes II",
      "year": "Segundo año",
      "semester": "Segundo semestre",
      "sem_num": 4,
      "hs_s": "6",
      "hs_t": "96",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Taller-de-Lenguajes-II-Plan-2008-2011-2024.pdf",
      "catedra_url": "http://www.linti.unlp.edu.ar/articulo/2011/8/18/avisos_taller_leng_2",
      "correlativas": "I104",
      "prereq_codes": [
        "I104"
      ],
      "unlocks_codes": [
        "I111"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "I104",
        "I102",
        "I101",
        "IAI"
      ],
      "all_descendants": [
        "I115",
        "I116",
        "I111"
      ],
      "folder_name": "I107_Taller_de_Lenguajes_II",
      "folder_rel": "materias/I107_Taller_de_Lenguajes_II",
      "materials": []
    },
    {
      "code": "F0312",
      "name": "Probabilidades",
      "year": "Segundo año",
      "semester": "Segundo semestre",
      "sem_num": 4,
      "hs_s": "3",
      "hs_t": "42",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/ANEXO_Probabilidades.pdf",
      "catedra_url": "",
      "correlativas": "F0302",
      "prereq_codes": [
        "F0302"
      ],
      "unlocks_codes": [
        "F0307"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "F0302",
        "F0301",
        "MATE-PI"
      ],
      "all_descendants": [
        "E0304",
        "F0307",
        "E0302"
      ],
      "folder_name": "F0312_Probabilidades",
      "folder_rel": "materias/F0312_Probabilidades",
      "materials": []
    },
    {
      "code": "F0310",
      "name": "Matemática D1",
      "year": "Tercer año",
      "semester": "Primer semestre",
      "sem_num": 5,
      "hs_s": "6",
      "hs_t": "84",
      "program_url": "",
      "catedra_url": "https://www.ing.unlp.edu.ar/catedras/F0310/",
      "correlativas": "F0304",
      "prereq_codes": [
        "F0304"
      ],
      "unlocks_codes": [
        "E0302"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "F0304",
        "F0302",
        "F0301",
        "MATE-PI"
      ],
      "all_descendants": [
        "E0304",
        "E0302"
      ],
      "folder_name": "F0310_Matematica_D1",
      "folder_rel": "materias/F0310_Matematica_D1",
      "materials": []
    },
    {
      "code": "E0282",
      "name": "Electrotecnia y Electrónica",
      "year": "Tercer año",
      "semester": "Primer semestre",
      "sem_num": 5,
      "hs_s": "6",
      "hs_t": "96",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/ANEXO_Electrotecnia_y_Electronica.pdf",
      "catedra_url": "http://www.ing.unlp.edu.ar/catedras/E0282/",
      "correlativas": "F0304-F0317",
      "prereq_codes": [
        "F0304",
        "F0317"
      ],
      "unlocks_codes": [
        "E0304"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "F0317",
        "F0302",
        "F0304",
        "F0316",
        "F0301",
        "MATE-PI"
      ],
      "all_descendants": [
        "E0304"
      ],
      "folder_name": "E0282_Electrotecnia_y_Electronica",
      "folder_rel": "materias/E0282_Electrotecnia_y_Electronica",
      "materials": []
    },
    {
      "code": "I108",
      "name": "Conceptos de bases de datos",
      "year": "Tercer año",
      "semester": "Primer semestre",
      "sem_num": 5,
      "hs_s": "6",
      "hs_t": "96",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Conceptos-de-bases-de-datos-Plan-2008-2011-1.pdf",
      "catedra_url": "http://weblidi.info.unlp.edu.ar/catedras/ing_cbd/index.html",
      "correlativas": "I103",
      "prereq_codes": [
        "I103"
      ],
      "unlocks_codes": [
        "I110",
        "I112"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "I103",
        "I102",
        "I101",
        "IAI"
      ],
      "all_descendants": [
        "I115",
        "I112",
        "I118",
        "I110",
        "E0306"
      ],
      "folder_name": "I108_Conceptos_de_bases_de_datos",
      "folder_rel": "materias/I108_Conceptos_de_bases_de_datos",
      "materials": []
    },
    {
      "code": "E0301",
      "name": "Introducción al Diseño Lógico",
      "year": "Tercer año",
      "semester": "Primer semestre",
      "sem_num": 5,
      "hs_s": "6",
      "hs_t": "96",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/ANEXO_Introduccion_al_Diseno_Logico.pdf",
      "catedra_url": "http://www.ing.unlp.edu.ar/catedras/E0301/",
      "correlativas": "I105",
      "prereq_codes": [
        "I105"
      ],
      "unlocks_codes": [
        "I109"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "I105",
        "I102",
        "I101",
        "IAI"
      ],
      "all_descendants": [
        "I109",
        "E0306",
        "E0305"
      ],
      "folder_name": "E0301_Introduccion_al_Diseno_Logico",
      "folder_rel": "materias/E0301_Introduccion_al_Diseno_Logico",
      "materials": []
    },
    {
      "code": "F0307",
      "name": "Estadistica",
      "year": "Tercer año",
      "semester": "Primer semestre",
      "sem_num": 5,
      "hs_s": "3",
      "hs_t": "42",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/ANEXO_Estadistica.pdf",
      "catedra_url": "",
      "correlativas": "F0304-F0312",
      "prereq_codes": [
        "F0304",
        "F0312"
      ],
      "unlocks_codes": [
        "E0302"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "F0304",
        "F0302",
        "F0301",
        "F0312",
        "MATE-PI"
      ],
      "all_descendants": [
        "E0304",
        "E0302"
      ],
      "folder_name": "F0307_Estadistica",
      "folder_rel": "materias/F0307_Estadistica",
      "materials": []
    },
    {
      "code": "E0302",
      "name": "Introducción al Procesamiento de Señales",
      "year": "Tercer año",
      "semester": "Segundo semestre",
      "sem_num": 6,
      "hs_s": "5",
      "hs_t": "80",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/ANEXO_Introduccion_al_Procesamiento_de_Senales.pdf",
      "catedra_url": "",
      "correlativas": "F0310-F0307",
      "prereq_codes": [
        "F0310",
        "F0307"
      ],
      "unlocks_codes": [
        "E0304"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "F0304",
        "F0302",
        "F0307",
        "F0310",
        "F0312",
        "F0301",
        "MATE-PI"
      ],
      "all_descendants": [
        "E0304"
      ],
      "folder_name": "E0302_Introduccion_al_Procesamiento_de_Senales",
      "folder_rel": "materias/E0302_Introduccion_al_Procesamiento_de_Senales",
      "materials": []
    },
    {
      "code": "I109",
      "name": "Taller de Arquitectura",
      "year": "Tercer año",
      "semester": "Segundo semestre",
      "sem_num": 6,
      "hs_s": "6",
      "hs_t": "96",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Taller-de-Arquitectura-Plan-2008-2011-1.pdf",
      "catedra_url": "http://weblidi.info.unlp.edu.ar/catedras/TallerArquitectura/",
      "correlativas": "E0301",
      "prereq_codes": [
        "E0301"
      ],
      "unlocks_codes": [
        "E0305"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "E0301",
        "I105",
        "I102",
        "I101",
        "IAI"
      ],
      "all_descendants": [
        "E0306",
        "E0305"
      ],
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
      ]
    },
    {
      "code": "I110",
      "name": "Ingeniería de Software",
      "year": "Tercer año",
      "semester": "Segundo semestre",
      "sem_num": 6,
      "hs_s": "9",
      "hs_t": "144",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Ingenieria-de-Software-Plan-2008-2011.pdf",
      "catedra_url": "http://blogs.unlp.edu.ar/ingenieriadesoftware/",
      "correlativas": "I108",
      "prereq_codes": [
        "I108"
      ],
      "unlocks_codes": [
        "I112",
        "I115",
        "E0306",
        "I118"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "I103",
        "I108",
        "I102",
        "I101",
        "IAI"
      ],
      "all_descendants": [
        "I115",
        "E0306",
        "I118",
        "I112"
      ],
      "folder_name": "I110_Ingenieria_de_Software",
      "folder_rel": "materias/I110_Ingenieria_de_Software",
      "materials": []
    },
    {
      "code": "E0303",
      "name": "Redes de Datos 1",
      "year": "Tercer año",
      "semester": "Segundo semestre",
      "sem_num": 6,
      "hs_s": "6",
      "hs_t": "96",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/ANEXO_Redes_de_Datos-I.pdf",
      "catedra_url": "http://www.ing.unlp.edu.ar/catedras/E0303/",
      "correlativas": "I106",
      "prereq_codes": [
        "I106"
      ],
      "unlocks_codes": [
        "I114"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "I102",
        "I105",
        "I106",
        "I101",
        "IAI"
      ],
      "all_descendants": [
        "I114"
      ],
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
      ]
    },
    {
      "code": "I111",
      "name": "Concurrencia y Paralelismo",
      "year": "Cuarto año",
      "semester": "Primer semestre",
      "sem_num": 7,
      "hs_s": "6",
      "hs_t": "96",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Concurrencia-y-Paralelismo-Plan-2008-2011.pdf",
      "catedra_url": "http://weblidi.info.unlp.edu.ar/catedras/concurrenciayparalelismo/index.html",
      "correlativas": "I107-I106",
      "prereq_codes": [
        "I107",
        "I106"
      ],
      "unlocks_codes": [
        "I115",
        "I116"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "I102",
        "I106",
        "I104",
        "I105",
        "I101",
        "I107",
        "IAI"
      ],
      "all_descendants": [
        "I115",
        "I116"
      ],
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
      ]
    },
    {
      "code": "E0304",
      "name": "Instrumentación y Control",
      "year": "Cuarto año",
      "semester": "Primer semestre",
      "sem_num": 7,
      "hs_s": "6",
      "hs_t": "96",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/ANEXO_INSTRUMENTACION_Y_CONTROL.pdf",
      "catedra_url": "",
      "correlativas": "E0282-E0302",
      "prereq_codes": [
        "E0282",
        "E0302"
      ],
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "F0304",
        "F0302",
        "F0307",
        "F0317",
        "F0310",
        "E0282",
        "F0312",
        "F0301",
        "E0302",
        "F0316",
        "MATE-PI"
      ],
      "all_descendants": [],
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
      ]
    },
    {
      "code": "I112",
      "name": "Bases de Datos",
      "year": "Cuarto año",
      "semester": "Primer semestre",
      "sem_num": 7,
      "hs_s": "6",
      "hs_t": "96",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Bases-de-Datos-Plan-2008-2011-1.pdf",
      "catedra_url": "http://weblidi.info.unlp.edu.ar/catedras/ing_bd/index.html",
      "correlativas": "I108-I110",
      "prereq_codes": [
        "I108",
        "I110"
      ],
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "I103",
        "I108",
        "I102",
        "I110",
        "I101",
        "IAI"
      ],
      "all_descendants": [],
      "folder_name": "I112_Bases_de_Datos",
      "folder_rel": "materias/I112_Bases_de_Datos",
      "materials": []
    },
    {
      "code": "E0305",
      "name": "Circuitos Digitales y Microcontroladores",
      "year": "Cuarto año",
      "semester": "Primer semestre",
      "sem_num": 7,
      "hs_s": "6",
      "hs_t": "96",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/ANEXO_CIRCUITOS_DIGITALES_Y_MICROCONTROLADORES.pdf",
      "catedra_url": "http://www.ing.unlp.edu.ar/catedras/E0305",
      "correlativas": "I109",
      "prereq_codes": [
        "I109"
      ],
      "unlocks_codes": [
        "E0306"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "I109",
        "I102",
        "E0301",
        "I105",
        "I101",
        "IAI"
      ],
      "all_descendants": [
        "E0306"
      ],
      "folder_name": "E0305_Circuitos_Digitales_y_Microcontroladores",
      "folder_rel": "materias/E0305_Circuitos_Digitales_y_Microcontroladores",
      "materials": []
    },
    {
      "code": "I113",
      "name": "Economía y Emprendedorismo",
      "year": "Cuarto año",
      "semester": "Primer semestre",
      "sem_num": 7,
      "hs_s": "3",
      "hs_t": "48",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2025/05/Economia-y-Emprendedorismo-Plan-2008-2011.pdf",
      "catedra_url": "http://www.ing.unlp.edu.ar/catedras/I0113/",
      "correlativas": "F0304",
      "prereq_codes": [
        "F0304"
      ],
      "unlocks_codes": [
        "I117"
      ],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "F0304",
        "F0302",
        "F0301",
        "MATE-PI"
      ],
      "all_descendants": [
        "I117"
      ],
      "folder_name": "I113_Economia_y_Emprendedorismo",
      "folder_rel": "materias/I113_Economia_y_Emprendedorismo",
      "materials": []
    },
    {
      "code": "I114",
      "name": "Redes de Datos II",
      "year": "Cuarto año",
      "semester": "Segundo semestre",
      "sem_num": 8,
      "hs_s": "6",
      "hs_t": "96",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Redes-de-Datos-II-IC-2026-Plan-2008-2011.pdf",
      "catedra_url": "",
      "correlativas": "E0303",
      "prereq_codes": [
        "E0303"
      ],
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "I102",
        "E0303",
        "I106",
        "I105",
        "I101",
        "IAI"
      ],
      "all_descendants": [],
      "folder_name": "I114_Redes_de_Datos_II",
      "folder_rel": "materias/I114_Redes_de_Datos_II",
      "materials": []
    },
    {
      "code": "I115",
      "name": "Sistemas de Tiempo Real",
      "year": "Cuarto año",
      "semester": "Segundo semestre",
      "sem_num": 8,
      "hs_s": "6",
      "hs_t": "96",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2025/05/Sistemas-de-Tiempo-Real-Plan-2008-2011.pdf",
      "catedra_url": "http://weblidi.info.unlp.edu.ar/catedras/tiemporeal/index.html",
      "correlativas": "I110-I111",
      "prereq_codes": [
        "I110",
        "I111"
      ],
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "I103",
        "I108",
        "I102",
        "I110",
        "I106",
        "I104",
        "I105",
        "I101",
        "I111",
        "I107",
        "IAI"
      ],
      "all_descendants": [],
      "folder_name": "I115_Sistemas_de_Tiempo_Real",
      "folder_rel": "materias/I115_Sistemas_de_Tiempo_Real",
      "materials": []
    },
    {
      "code": "E0306",
      "name": "Taller de Proyecto I",
      "year": "Cuarto año",
      "semester": "Segundo semestre",
      "sem_num": 8,
      "hs_s": "4",
      "hs_t": "64",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/ANEXO_Taller_de_Proyecto_I.pdf",
      "catedra_url": "",
      "correlativas": "I110-E0305",
      "prereq_codes": [
        "I110",
        "E0305"
      ],
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "I109",
        "I103",
        "I108",
        "I102",
        "E0305",
        "E0301",
        "I110",
        "I105",
        "I101",
        "IAI"
      ],
      "all_descendants": [],
      "folder_name": "E0306_Taller_de_Proyecto_I",
      "folder_rel": "materias/E0306_Taller_de_Proyecto_I",
      "materials": []
    },
    {
      "code": "OPT1",
      "slot_id": "OPT1",
      "is_optativa_slot": true,
      "name": "Optativa 1",
      "year": "Cuarto año",
      "semester": "Segundo semestre",
      "sem_num": 8,
      "hs_s": "6",
      "hs_t": "96",
      "program_url": "https://ic.info.unlp.edu.ar/optativas-2023/",
      "catedra_url": "",
      "correlativas": "",
      "prereq_codes": [],
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [],
      "all_descendants": [],
      "folder_name": "OPT_33_Optativa_1",
      "folder_rel": "materias/OPT_33_Optativa_1",
      "materials": []
    },
    {
      "code": "I116",
      "name": "Sistemas Distribuidos y Paralelos",
      "year": "Quinto año",
      "semester": "Primer Semestre",
      "sem_num": 9,
      "hs_s": "6",
      "hs_t": "96",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Sistemas-Distribuidos-y-Paralelos-Plan-2008-2011.pdf",
      "catedra_url": "http://weblidi.info.unlp.edu.ar/catedras/sistemasdistribuidosyparalelos/index.html",
      "correlativas": "I111",
      "prereq_codes": [
        "I111"
      ],
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "I102",
        "I106",
        "I104",
        "I105",
        "I101",
        "I111",
        "I107",
        "IAI"
      ],
      "all_descendants": [],
      "folder_name": "I116_Sistemas_Distribuidos_y_Paralelos",
      "folder_rel": "materias/I116_Sistemas_Distribuidos_y_Paralelos",
      "materials": []
    },
    {
      "code": "I117",
      "name": "Aspectos Legales Ingenieria Informatica",
      "year": "Quinto año",
      "semester": "Primer Semestre",
      "sem_num": 9,
      "hs_s": "3",
      "hs_t": "48",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Aspectos-Legales-Ingenieria-Informatica-Plan-2008-2011-2024.pdf",
      "catedra_url": "",
      "correlativas": "I113",
      "prereq_codes": [
        "I113"
      ],
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "I113",
        "F0304",
        "F0302",
        "F0301",
        "MATE-PI"
      ],
      "all_descendants": [],
      "folder_name": "I117_Aspectos_Legales_Ingenieria_Informatica",
      "folder_rel": "materias/I117_Aspectos_Legales_Ingenieria_Informatica",
      "materials": []
    },
    {
      "code": "OPT2",
      "slot_id": "OPT2",
      "is_optativa_slot": true,
      "name": "Optativa 2",
      "year": "Quinto año",
      "semester": "Primer Semestre",
      "sem_num": 9,
      "hs_s": "6",
      "hs_t": "96",
      "program_url": "https://ic.info.unlp.edu.ar/optativas-2025/",
      "catedra_url": "",
      "correlativas": "",
      "prereq_codes": [],
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [],
      "all_descendants": [],
      "folder_name": "OPT_36_Optativa_2",
      "folder_rel": "materias/OPT_36_Optativa_2",
      "materials": []
    },
    {
      "code": "OPT3",
      "slot_id": "OPT3",
      "is_optativa_slot": true,
      "name": "Optativa 3",
      "year": "Quinto año",
      "semester": "Primer Semestre",
      "sem_num": 9,
      "hs_s": "6",
      "hs_t": "96",
      "program_url": "https://ic.info.unlp.edu.ar/optativas-2025/",
      "catedra_url": "",
      "correlativas": "",
      "prereq_codes": [],
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [],
      "all_descendants": [],
      "folder_name": "OPT_37_Optativa_3",
      "folder_rel": "materias/OPT_37_Optativa_3",
      "materials": []
    },
    {
      "code": "I118",
      "name": "Taller de Proyecto II",
      "year": "Quinto año",
      "semester": "Segundo semestre",
      "sem_num": 10,
      "hs_s": "4",
      "hs_t": "64",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2026/03/Taller-de-Proyecto-II-Plan-2008-2011.pdf",
      "catedra_url": "https://lidi.info.unlp.edu.ar/~fernando/clases/clases.html",
      "correlativas": "I110",
      "prereq_codes": [
        "I110"
      ],
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [
        "I103",
        "I108",
        "I102",
        "I110",
        "I101",
        "IAI"
      ],
      "all_descendants": [],
      "folder_name": "I118_Taller_de_Proyecto_II",
      "folder_rel": "materias/I118_Taller_de_Proyecto_II",
      "materials": []
    },
    {
      "code": "S0012",
      "name": "Seminario de Redacción de Textos Profesionales",
      "year": "Quinto año",
      "semester": "Segundo semestre",
      "sem_num": 10,
      "hs_s": "3",
      "hs_t": "48",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/ANEXO_Seminario_de_Redaccion_de_Textos_Profesionales.pdf",
      "catedra_url": "",
      "correlativas": "15 asignaturas aprobadas",
      "prereq_codes": [],
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [],
      "all_descendants": [],
      "folder_name": "S0012_Seminario_de_Redaccion_de_Textos_Profesionales",
      "folder_rel": "materias/S0012_Seminario_de_Redaccion_de_Textos_Profesionales",
      "materials": []
    },
    {
      "code": "OPT4",
      "slot_id": "OPT4",
      "is_optativa_slot": true,
      "name": "Optativa 4",
      "year": "Quinto año",
      "semester": "Segundo semestre",
      "sem_num": 10,
      "hs_s": "6",
      "hs_t": "96",
      "program_url": "https://ic.info.unlp.edu.ar/optativas-2023/",
      "catedra_url": "",
      "correlativas": "",
      "prereq_codes": [],
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [],
      "all_descendants": [],
      "folder_name": "OPT_40_Optativa_4",
      "folder_rel": "materias/OPT_40_Optativa_4",
      "materials": []
    },
    {
      "code": "E0228",
      "name": "Práctica Profesional Supervisada",
      "year": "Quinto año",
      "semester": "Segundo semestre",
      "sem_num": 10,
      "hs_s": "",
      "hs_t": "200",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/Reglamento_PPS_Ing_Computacion.pdf",
      "catedra_url": "",
      "correlativas": "(Debe tener 20asignaturas aprobadas para realizar las PPS)",
      "prereq_codes": [],
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [],
      "all_descendants": [],
      "folder_name": "E0228_Practica_Profesional_Supervisada",
      "folder_rel": "materias/E0228_Practica_Profesional_Supervisada",
      "materials": []
    },
    {
      "code": "INFIN",
      "name": "Inglés (Prueba de Suficiencia)",
      "year": "Quinto año",
      "semester": "Segundo semestre",
      "sem_num": 4,
      "hs_s": "",
      "hs_t": "",
      "program_url": "https://ic.info.unlp.edu.ar/wp-content/uploads/2022/02/ANEXO_Prueba_de_Suficiencia_de_Ingles.pdf",
      "catedra_url": "",
      "correlativas": "(Antes de iniciar las cursadas de 3er año.)",
      "prereq_codes": [],
      "unlocks_codes": [],
      "status": "pendiente",
      "grade": null,
      "has_failed": false,
      "all_ancestors": [],
      "all_descendants": [],
      "folder_name": "INFIN_Ingles_Prueba_de_Suficiencia",
      "folder_rel": "materias/INFIN_Ingles_Prueba_de_Suficiencia",
      "materials": []
    }
  ]
};
