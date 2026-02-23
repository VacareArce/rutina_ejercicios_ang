// --- Datos de la Rutina ---
const routineData = [
    {
        day: 1,
        title: "Piernas y Glúteos",
        subtitle: "Énfasis Cuádriceps",
        exercises: [
            {
                id: "d1_e1",
                name: "Sentadilla Goblet con mancuerna",
                sets: 4,
                reps: "12 repeticiones",
                notes: "Baja completo, sube a la mitad, baja de nuevo y sube completo (1.5 reps).",
                imageItem: "Sentadilla Goblet",
                img: "img/icons/legs.svg"
            },
            {
                id: "d1_e2",
                name: "Hip Thrust (Puente de cadera) con barra",
                sets: 4,
                reps: "8 repeticiones",
                notes: "",
                imageItem: "Hip Thrust",
                img: "img/icons/glute.svg"
            },
            {
                id: "d1_e3",
                name: "Máquina de extensión de cuádriceps",
                sets: 3,
                reps: "12 a 15 repeticiones",
                notes: "Te dará fuerza sin pedirte equilibrio.",
                imageItem: "Extensión de cuádriceps",
                img: "img/icons/machine.svg"
            },
            {
                id: "d1_e4",
                name: "Abducción de cadera sentada",
                sets: 3,
                reps: "15 a 20 repeticiones",
                notes: "Enfocado en el glúteo medio.",
                imageItem: "Abducción de cadera",
                img: "img/icons/machine.svg"
            },
            {
                id: "d1_c1",
                name: "Rodilla al pecho",
                time: "30 segundos por pierna",
                notes: "Objetivo: Liberar tensión lumbar y calmar el nervio ciático.",
                imageItem: "Rodilla al pecho",
                img: "img/icons/core.svg",
                isCooldown: true
            },
            {
                id: "d1_c2",
                name: "Postura de la Esfinge",
                time: "7 ciclos de respiración profunda",
                notes: "Objetivo: Devolver la postura natural a la columna.",
                imageItem: "Esfinge",
                img: "img/icons/core.svg",
                isCooldown: true
            },
            {
                id: "d1_c3",
                name: "Postura del Niño",
                time: "1 minuto",
                notes: "Objetivo: Relajación total del estrés mecánico en la espalda baja.",
                imageItem: "Niño",
                img: "img/icons/core.svg",
                isCooldown: true
            }
        ]
    },
    {
        day: 2,
        title: "Torso",
        subtitle: "Espalda y Hombros estéticos",
        exercises: [
            {
                id: "d2_e1",
                name: "Jalón al pecho (agarre neutro)",
                sets: 4,
                reps: "12 repeticiones",
                notes: "",
                imageItem: "Jalón al pecho",
                img: "img/icons/pull.svg"
            },
            {
                id: "d2_e2",
                name: "Remo con mancuerna a un brazo",
                sets: 4,
                reps: "8 a 12 repeticiones",
                notes: "",
                imageItem: "Remo con mancuerna",
                img: "img/icons/pull.svg"
            },
            {
                id: "d2_e3",
                name: "Elevaciones laterales con mancuernas",
                sets: 3,
                reps: "12 a 20 repeticiones",
                notes: "",
                imageItem: "Elevaciones laterales",
                img: "img/icons/isolation.svg"
            },
            {
                id: "d2_e4",
                name: "Plancha abdominal (Plank)",
                sets: 3,
                reps: "Al fallo",
                notes: "Hasta que no aguantes más.",
                imageItem: "Plancha abdominal",
                img: "img/icons/core.svg"
            },
            {
                id: "d2_c1",
                name: "Rodilla al pecho",
                time: "30 segundos por pierna",
                notes: "Objetivo: Liberar tensión lumbar y calmar el nervio ciático.",
                imageItem: "Rodilla al pecho",
                img: "img/icons/core.svg",
                isCooldown: true
            },
            {
                id: "d2_c2",
                name: "Postura de la Esfinge",
                time: "7 ciclos de respiración profunda",
                notes: "Objetivo: Devolver la postura natural a la columna.",
                imageItem: "Esfinge",
                img: "img/icons/core.svg",
                isCooldown: true
            },
            {
                id: "d2_c3",
                name: "Postura del Niño",
                time: "1 minuto",
                notes: "Objetivo: Relajación total del estrés mecánico en la espalda baja.",
                imageItem: "Niño",
                img: "img/icons/core.svg",
                isCooldown: true
            }
        ]
    },
    {
        day: 3,
        title: "Piernas y Glúteos",
        subtitle: "Énfasis Cadena Posterior",
        exercises: [
            {
                id: "d3_e1",
                name: "Peso Muerto Rumano con Landmine",
                sets: 3,
                reps: "12 a 15 repeticiones",
                notes: "Apoyado en el piso. Reduce muchísimo la tensión lumbar.",
                imageItem: "Peso Muerto Rumano",
                img: "img/icons/legs.svg"
            },
            {
                id: "d3_e2",
                name: "Curl de piernas acostada en máquina",
                sets: 3,
                reps: "12 a 15 repeticiones",
                notes: "",
                imageItem: "Curl de piernas",
                img: "img/icons/machine.svg"
            },
            {
                id: "d3_e3",
                name: "Puentes de glúteo con banda elástica",
                sets: 3,
                reps: "20 a 30 repeticiones",
                notes: "",
                imageItem: "Puente con banda",
                img: "img/icons/glute.svg"
            },
            {
                id: "d3_e4",
                name: "Almejas laterales (Clamshells) en el piso",
                sets: 3,
                reps: "25 por cada lado",
                notes: "",
                imageItem: "Almejas laterales",
                img: "img/icons/glute.svg"
            },
            {
                id: "d3_c1",
                name: "Rodilla al pecho",
                time: "30 segundos por pierna",
                notes: "Objetivo: Liberar tensión lumbar y calmar el nervio ciático.",
                imageItem: "Rodilla al pecho",
                img: "img/icons/core.svg",
                isCooldown: true
            },
            {
                id: "d3_c2",
                name: "Postura de la Esfinge",
                time: "7 ciclos de respiración profunda",
                notes: "Objetivo: Devolver la postura natural a la columna.",
                imageItem: "Esfinge",
                img: "img/icons/core.svg",
                isCooldown: true
            },
            {
                id: "d3_c3",
                name: "Postura del Niño",
                time: "1 minuto",
                notes: "Objetivo: Relajación total del estrés mecánico en la espalda baja.",
                imageItem: "Niño",
                img: "img/icons/core.svg",
                isCooldown: true
            }
        ]
    },
    {
        day: 4,
        title: "Torso y Brazos",
        subtitle: "Trabajo superior",
        exercises: [
            {
                id: "d4_e1",
                name: "Press de pecho en máquina",
                sets: 4,
                reps: "8 a 12 repeticiones",
                notes: "Utiliza agarre neutro.",
                imageItem: "Press de pecho",
                img: "img/icons/push.svg"
            },
            {
                id: "d4_e2",
                name: "Curl de bíceps con mancuernas",
                sets: 3,
                reps: "12 a 15 repeticiones",
                notes: "",
                imageItem: "Curl de bíceps",
                img: "img/icons/isolation.svg"
            },
            {
                id: "d4_e3",
                name: "Extensión de tríceps en polea",
                sets: 3,
                reps: "12 a 15 repeticiones",
                notes: "",
                imageItem: "Extensión de tríceps",
                img: "img/icons/isolation.svg"
            },
            {
                id: "d4_e4",
                name: "Crunches (abdominales) en pelota suiza",
                sets: 3,
                reps: "20 a 25 repeticiones",
                notes: "",
                imageItem: "Crunches en pelota",
                img: "img/icons/core.svg"
            },
            {
                id: "d4_c1",
                name: "Rodilla al pecho",
                time: "30 segundos por pierna",
                notes: "Objetivo: Liberar tensión lumbar y calmar el nervio ciático.",
                imageItem: "Rodilla al pecho",
                img: "img/icons/core.svg",
                isCooldown: true
            },
            {
                id: "d4_c2",
                name: "Postura de la Esfinge",
                time: "7 ciclos de respiración profunda",
                notes: "Objetivo: Devolver la postura natural a la columna.",
                imageItem: "Esfinge",
                img: "img/icons/core.svg",
                isCooldown: true
            },
            {
                id: "d4_c3",
                name: "Postura del Niño",
                time: "1 minuto",
                notes: "Objetivo: Relajación total del estrés mecánico en la espalda baja.",
                imageItem: "Niño",
                img: "img/icons/core.svg",
                isCooldown: true
            }
        ]
    },
    {
        day: 5,
        title: "Glúteos y Estabilización",
        subtitle: "Día de Bombeo",
        exercises: [
            {
                id: "d5_e1",
                name: "Prensa de piernas",
                sets: 4,
                reps: "10 a 12 repeticiones",
                notes: "Coloca los pies altos y separados en la plataforma para enfocarte en los glúteos de forma muy segura.",
                imageItem: "Prensa de piernas",
                img: "img/icons/machine.svg"
            },
            {
                id: "d5_e2",
                name: "Hiperextensiones en banco",
                sets: 3,
                reps: "20 a 30 repeticiones",
                notes: "Enfocadas en glúteo.",
                imageItem: "Hiperextensiones",
                img: "img/icons/glute.svg"
            },
            {
                id: "d5_e3",
                name: "Patada de glúteo en polea baja",
                sets: 3,
                reps: "12 a 15 repeticiones",
                notes: "",
                imageItem: "Patada en polea",
                img: "img/icons/glute.svg"
            },
            {
                id: "d5_e4",
                name: "Elevación de piernas en el suelo",
                sets: 3,
                reps: "15 a 20 repeticiones",
                notes: "",
                imageItem: "Elevación de piernas",
                img: "img/icons/core.svg"
            },
            {
                id: "d5_c1",
                name: "Rodilla al pecho",
                time: "30 segundos por pierna",
                notes: "Objetivo: Liberar tensión lumbar y calmar el nervio ciático.",
                imageItem: "Rodilla al pecho",
                img: "img/icons/core.svg",
                isCooldown: true
            },
            {
                id: "d5_c2",
                name: "Postura de la Esfinge",
                time: "7 ciclos de respiración profunda",
                notes: "Objetivo: Devolver la postura natural a la columna.",
                imageItem: "Esfinge",
                img: "img/icons/core.svg",
                isCooldown: true
            },
            {
                id: "d5_c3",
                name: "Postura del Niño",
                time: "1 minuto",
                notes: "Objetivo: Relajación total del estrés mecánico en la espalda baja.",
                imageItem: "Niño",
                img: "img/icons/core.svg",
                isCooldown: true
            }
        ]
    }
];
