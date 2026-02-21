// Extraemos useState de la variable global de React
const { useState } = React;

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
      }
    ]
  }
];

// --- Iconos SVG en línea ---
const CheckCircleIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const CircleIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const DumbbellIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.4 14.4 9.6 9.6" />
    <path d="M18.65 21.35a2.12 2.12 0 0 0 2.99-2.99l-2.83-2.83a2.12 2.12 0 0 0-2.99 2.99l2.83 2.83Z" />
    <path d="m2.65 5.65 2.83 2.83a2.12 2.12 0 0 0 2.99-2.99L5.64 2.65a2.12 2.12 0 0 0-2.99 2.99Z" />
    <path d="m11.3 6.64 2.12-2.12a2.12 2.12 0 0 1 2.99 2.99l-2.12 2.12" />
    <path d="m6.64 11.3-2.12 2.12a2.12 2.12 0 0 0 2.99 2.99l2.12-2.12" />
  </svg>
);

const InfoIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const FlameIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
  </svg>
);

const bgColors = ['bg-blue-100', 'bg-indigo-100', 'bg-purple-100', 'bg-pink-100', 'bg-rose-100', 'bg-orange-100', 'bg-emerald-100', 'bg-cyan-100'];

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [userProgress, setUserProgress] = useState({});

  const activeDayData = routineData[activeTab];

  const handleWeightChange = (exerciseId, value) => {
    setUserProgress(prev => ({
      ...prev,
      [exerciseId]: {
        ...prev[exerciseId],
        weight: value
      }
    }));
  };

  const toggleComplete = (exerciseId) => {
    setUserProgress(prev => ({
      ...prev,
      [exerciseId]: {
        ...prev[exerciseId],
        completed: !prev[exerciseId]?.completed
      }
    }));
  };

  const completedToday = activeDayData.exercises.filter(ex => userProgress[ex.id]?.completed).length;
  const totalToday = activeDayData.exercises.length;
  const progressPercentage = (completedToday / totalToday) * 100;

  const isLegDay = [1, 3, 5].includes(activeDayData.day);

  return (
    <div className="min-h-screen bg-gray-50 text-slate-800 font-sans pb-12">
      <header className="bg-indigo-600 text-white shadow-lg sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
            <DumbbellIcon className="w-8 h-8" />
            Mi Rastreador de Rutina
          </h1>
          <p className="text-indigo-200 mt-2 text-sm md:text-base">
            Tu plan de 5 días enfocado en piernas, glúteos y torso estético.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-4 pt-2">
            {routineData.map((day, index) => (
              <button
                key={day.day}
                onClick={() => setActiveTab(index)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                  activeTab === index 
                    ? 'bg-white text-indigo-600 shadow-md' 
                    : 'bg-indigo-500/50 text-indigo-50 hover:bg-indigo-500'
                }`}
              >
                Día {day.day}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 mt-8">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Día {activeDayData.day}: {activeDayData.title}
              </h2>
              <p className="text-lg text-indigo-600 font-medium mt-1">
                {activeDayData.subtitle}
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 min-w-[200px]">
              <div className="flex justify-between text-sm mb-2 font-semibold">
                <span>Progreso de hoy</span>
                <span className="text-indigo-600">{completedToday} / {totalToday}</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5">
                <div 
                  className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500 ease-out" 
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 bg-orange-50 rounded-3xl p-6 border border-orange-200 shadow-sm">
          <h3 className="text-xl font-bold text-orange-900 mb-2 flex items-center gap-2">
            <FlameIcon className="w-6 h-6 text-orange-600" /> 
            Calentamiento Pre-Entrenamiento
          </h3>
          <p className="text-orange-800 text-sm mb-5 font-medium">
            Fórmula de entrada: Cardio suave + Estabilidad de Core + Activación Específica.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 border border-orange-100 shadow-sm flex flex-col">
              <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-700 w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                Base Innegociable (Siempre)
              </h4>
              <ul className="list-disc list-inside text-sm text-slate-700 space-y-1.5 mb-4 flex-1">
                <li>5 minutos de caminata ligera</li>
                <li>Gato-Camello</li>
                <li>Bird-Dog</li>
              </ul>
              <div className="flex items-start gap-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100 mt-auto">
                <InfoIcon className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                <p>El core es tu centro de gravedad. Requiere estar activado para proteger tu columna sin importar si vas a levantar una mancuerna o empujar la prensa.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-orange-100 shadow-sm flex flex-col">
              <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-700 w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                Activación: {isLegDay ? 'Piernas y Glúteos' : 'Torso'}
              </h4>
              {isLegDay ? (
                <React.Fragment>
                  <ul className="list-disc list-inside text-sm text-slate-700 space-y-1.5 mb-4 flex-1">
                    <li>Puentes de glúteo sin peso</li>
                    <li>Ejercicios de movilidad de cadera</li>
                  </ul>
                  <div className="flex items-start gap-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100 mt-auto">
                    <InfoIcon className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                    <p>Contrarresta el estar sentada. Despierta tus glúteos inhibidos para que tu espalda baja no haga el trabajo que le toca a las piernas al hacer peso muerto o sentadillas.</p>
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <ul className="list-disc list-inside text-sm text-slate-700 space-y-1.5 mb-4 flex-1">
                    <li>Círculos con los brazos (pequeños a grandes)</li>
                    <li>Dislocaciones de hombro (Palo de PVC o banda)</li>
                  </ul>
                  <div className="flex items-start gap-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100 mt-auto">
                    <InfoIcon className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                    <p>Enfocado en hombros y espalda alta. Crea tensión sin fatigarte, preparándote perfecto para el press y los jalones.</p>
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeDayData.exercises.map((exercise, index) => {
            const isCompleted = userProgress[exercise.id]?.completed || false;
            const currentWeight = userProgress[exercise.id]?.weight || '';
            const bgColorClass = bgColors[index % bgColors.length];

            return (
              <div 
                key={exercise.id} 
                className={`bg-white rounded-3xl shadow-sm border transition-all duration-300 overflow-hidden flex flex-col ${
                  isCompleted ? 'border-indigo-400 ring-1 ring-indigo-400/50 shadow-indigo-100' : 'border-slate-200'
                }`}
              >
                <div className={`h-48 ${bgColorClass} relative flex items-center justify-center border-b border-slate-100 overflow-hidden group`}>
                  <div className="absolute inset-0 bg-slate-800/5 group-hover:bg-transparent transition-colors z-0"></div>
                  
                  {/* Imagen SVG del ejercicio */}
                  <img 
                    src={exercise.img} 
                    alt={exercise.name} 
                    className="h-32 w-auto z-10 drop-shadow-sm opacity-90 transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Etiqueta flotante con el nombre corto (opcional, si se quiere mantener) */}
                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-slate-600 text-xs font-semibold px-3 py-1 bg-white/90 rounded-full backdrop-blur-sm shadow-sm whitespace-nowrap z-20">
                    {exercise.imageItem}
                  </span>
                  
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-800 font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-sm z-20">
                    {index + 1}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4 flex-1">
                    <h3 className={`text-xl font-bold leading-tight mb-3 ${isCompleted ? 'text-indigo-900' : 'text-slate-900'}`}>
                      {exercise.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-sm font-semibold bg-indigo-50 text-indigo-700">
                        {exercise.sets} Series
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-sm font-semibold bg-emerald-50 text-emerald-700">
                        {exercise.reps}
                      </span>
                    </div>
                    
                    {exercise.notes && (
                      <div className="flex items-start gap-2 text-sm text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <InfoIcon className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                        <p>{exercise.notes}</p>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 mt-auto border-t border-slate-100 flex items-center gap-4">
                    <div className="flex-1">
                      <label htmlFor={`weight-${exercise.id}`} className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                        Peso usado
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id={`weight-${exercise.id}`}
                          value={currentWeight}
                          onChange={(e) => handleWeightChange(exercise.id, e.target.value)}
                          placeholder="Ej: 20 kg"
                          className="block w-full rounded-xl border-slate-300 bg-slate-50 px-4 py-2.5 text-slate-900 focus:border-indigo-500 focus:ring-indigo-500 focus:bg-white transition-colors sm:text-sm shadow-sm outline-none border"
                        />
                      </div>
                    </div>

                    <button
                      onClick={() => toggleComplete(exercise.id)}
                      className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-sm ${
                        isCompleted 
                          ? 'bg-emerald-500 text-white hover:bg-emerald-600' 
                          : 'bg-slate-100 text-slate-400 hover:bg-slate-200 border border-slate-200'
                      }`}
                      aria-label="Marcar como completado"
                    >
                      {isCompleted ? (
                        <CheckCircleIcon className="w-7 h-7" />
                      ) : (
                        <CircleIcon className="w-7 h-7" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      
      <footer className="max-w-4xl mx-auto px-4 mt-12 text-center text-slate-500 text-sm">
        <p>Los datos (pesos y progreso) se guardan temporalmente en la memoria durante esta sesión.</p>
      </footer>
    </div>
  );
}

// Renderizar la aplicación en el DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);