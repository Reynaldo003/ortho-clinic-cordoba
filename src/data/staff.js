// src/data/staff.js
export const STAFF = [
  {
    id: "dr-hernandez",
    slug: "dr-hernandez",
    role: "Médico Ortopedista",
    name: "Dr. Miguel Hernández",
    photo: "/MartinBuganza.png",
    location: "Córdoba, Ver.",
    years: 12,
    rating: 4.9,
    badges: ["Cédula 123456", "Traumatología", "Artroscopia"],
    // Bio corta que se usa, por ejemplo, en otros componentes si la necesitas
    bio: "Más de 12 años de experiencia en cirugía de rodilla y medicina deportiva.",
    services: ["Consulta de primera vez", "Seguimiento", "Infiltración guiada"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    profile: {
      bio: "Especialista en lesiones de rodilla y hombro, con enfoque en pacientes deportistas y personas que desean regresar a su actividad diaria sin dolor. Combina cirugías mínimamente invasivas con programas de rehabilitación bien estructurados.",
      patientsPerYear: 380,
      surgeriesPerYear: 150,
      satisfaction: 98,
      education:
        "Especialidad en Ortopedia y Traumatología. Formación en centros de alta especialidad en cirugía artroscópica.",
      specialties: [
        "Reconstrucción de ligamento cruzado anterior (LCA).",
        "Lesiones meniscales y cartílago articular.",
        "Lesiones de manguito rotador y hombro inestable.",
        "Artrosis de rodilla en pacientes activos.",
        "Lesiones deportivas en futbolistas y corredores."
      ],
      focus:
        "Lesiones deportivas de rodilla y hombro, retorno seguro a la actividad física y cirugías artroscópicas.",
      research:
        "Optimización de resultados funcionales después de reconstrucción de ligamento cruzado y programas de rehabilitación acelerada.",
      languages: "Español (nativo) · Inglés médico.",
      videos: [
        "https://www.youtube.com/embed/dQw4w9WgXcQ",
        "https://www.youtube.com/embed/dQw4w9WgXcQ"
      ],
      testimonials: [
        {
          name: "Paciente de LCA",
          text: "Después de la cirugía y rehabilitación volví a correr 10 km sin dolor. El seguimiento fue muy cercano."
        },
        {
          name: "Paciente con lesión de hombro",
          text: "Me explicó todas las opciones con calma. Recuperé la movilidad del hombro mucho antes de lo que esperaba."
        }
      ]
    }
  },
  {
    id: "dr-puig",
    slug: "dr-puig",
    role: "Médico Ortopedista",
    name: "Dr. Martín Puig",
    photo: "/MiguelPuig.png",
    location: "Orizaba, Ver.",
    years: 10,
    rating: 5.0,
    badges: ["Cédula 654321", "Columna", "Reemplazo articular"],
    bio: "Enfoque en dolor crónico, columna y reemplazo articular.",
    services: ["Consulta", "Valoración preoperatoria", "Control postquirúrgico"],
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
    profile: {
      bio: "Ortopedista con dedicación especial al manejo del dolor crónico y patología de columna. Diseña planes de tratamiento escalonados que van desde medidas conservadoras hasta cirugía cuando realmente es necesaria.",
      patientsPerYear: 320,
      surgeriesPerYear: 110,
      satisfaction: 97,
      education:
        "Especialidad en Ortopedia y Traumatología. Alta especialidad en cirugía de columna y reemplazo articular.",
      specialties: [
        "Dolor lumbar y cervical mecánico.",
        "Hernias discales y estenosis de canal.",
        "Reemplazo de cadera y rodilla.",
        "Deformidades degenerativas de columna.",
        "Manejo de dolor crónico articular."
      ],
      focus:
        "Pacientes con dolor crónico de columna y articulaciones que requieren un abordaje integral y progresivo.",
      research:
        "Nuevas técnicas de descompresión mínimamente invasiva y protocolos de recuperación temprana después de reemplazo articular.",
      languages: "Español (nativo) · Inglés para lectura de literatura científica.",
      videos: [
        "https://www.youtube.com/embed/ysz5S6PUM-U",
        "https://www.youtube.com/embed/dQw4w9WgXcQ"
      ],
      testimonials: [
        {
          name: "Paciente con dolor lumbar",
          text: "Llevaba años con dolor de espalda. Me explicó muy claro qué tenía y por qué. El plan de tratamiento fue gradual y efectivo."
        },
        {
          name: "Paciente operada de cadera",
          text: "Después del reemplazo articular pude volver a caminar sin bastón y con mucha más seguridad."
        }
      ]
    }
  },
  {
    id: "fisio-ana",
    slug: "fisio-ana",
    role: "Fisioterapeuta",
    name: "Lic. Ana Ramírez",
    photo: "/avatars/fisio-ana.jpg",
    location: "Córdoba, Ver.",
    years: 6,
    rating: 4.9,
    badges: ["Rehabilitación deportiva", "Electroterapia"],
    bio: "Rehabilitación funcional y retorno al deporte con enfoque en biomecánica.",
    services: ["Sesión 45 min", "Sesión 60 min", "Terapia manual"],
    videoUrl: "https://www.youtube.com/embed/5qap5aO4i9A",
    profile: {
      bio: "Fisioterapeuta enfocada en rehabilitación deportiva y prevención de recaídas. Combina terapia manual, ejercicio terapéutico y educación al paciente para lograr resultados duraderos.",
      patientsPerYear: 420,
      surgeriesPerYear: 180, // aquí lo usamos como "programas de rehabilitación/año"
      satisfaction: 99,
      education:
        "Licenciatura en Fisioterapia. Cursos en rehabilitación deportiva y terapia manual avanzada.",
      specialties: [
        "Rehabilitación post-quirúrgica de rodilla y hombro.",
        "Lesiones musculares en corredores y futbolistas.",
        "Readaptación al entrenamiento después de lesión.",
        "Corrección de patrones de movimiento.",
        "Programas de prevención de lesiones."
      ],
      focus:
        "Retorno seguro al deporte y mejora del rendimiento mediante programas de fuerza, estabilidad y movilidad.",
      research:
        "Aplicación de ejercicio de fuerza en rehabilitación y prevención de lesiones en miembros inferiores.",
      languages: "Español (nativo).",
      videos: [
        "https://www.youtube.com/embed/5qap5aO4i9A",
        "https://www.youtube.com/embed/ysz5S6PUM-U"
      ],
      testimonials: [
        {
          name: "Corredora recreativa",
          text: "Después de un esguince repetido de tobillo, con el plan de Ana volví a entrenar sin miedo y con mejor estabilidad."
        },
        {
          name: "Paciente post-cirugía de rodilla",
          text: "Muy paciente para explicar ejercicios y corregir la técnica. Noté avance desde las primeras semanas."
        }
      ]
    }
  },
  {
    id: "fisio-luis",
    slug: "fisio-luis",
    role: "Fisioterapeuta",
    name: "Lic. Luis Pérez",
    photo: "/avatars/fisio-luis.jpg",
    location: "Orizaba, Ver.",
    years: 7,
    rating: 5.0,
    badges: ["Neuromodulación", "Kinesiotaping"],
    bio: "Experto en dolor musculoesquelético y terapia neuromuscular.",
    services: ["Sesión 45 min", "Sesión 60 min", "Readaptación"],
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
    profile: {
      bio: "Fisioterapeuta especializado en manejo de dolor crónico y readaptación funcional. Utiliza técnicas de neuromodulación, terapia manual y ejercicio terapéutico basado en evidencia.",
      patientsPerYear: 400,
      surgeriesPerYear: 160, // programas de rehab/año
      satisfaction: 98,
      education:
        "Licenciatura en Fisioterapia. Formación en neuromodulación y terapia de dolor crónico.",
      specialties: [
        "Dolor cervical y lumbar de origen muscular.",
        "Cefaleas tensionales y dolor miofascial.",
        "Readaptación después de largos periodos de inactividad.",
        "Programas de higiene postural.",
        "Tratamiento combinado con neuromodulación."
      ],
      focus:
        "Reducción del dolor y mejora de la funcionalidad mediante programas progresivos y educación al paciente.",
      research:
        "Uso de neuromodulación en dolor crónico y su integración con ejercicio terapéutico.",
      languages: "Español (nativo).",
      videos: [
        "https://www.youtube.com/embed/ysz5S6PUM-U",
        "https://www.youtube.com/embed/5qap5aO4i9A"
      ],
      testimonials: [
        {
          name: "Paciente con dolor lumbar crónico",
          text: "Después de varios tratamientos sin resultado, con Luis entendí mejor mi problema y logré disminuir el dolor de forma importante."
        },
        {
          name: "Paciente de oficina",
          text: "Los ejercicios y recomendaciones para el trabajo frente a la computadora hicieron mucha diferencia en mi día a día."
        }
      ]
    }
  }
];
