// Extraemos useState de la variable global de React
const { useState } = React;

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
    const strengthExercises = activeDayData.exercises.filter(ex => !ex.isCooldown);
    const cooldownExercises = activeDayData.exercises.filter(ex => ex.isCooldown);

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
                                className={`whitespace-nowrap px-5 py-2.5 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${activeTab === index
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

                {(() => {
                    const warmupExercises = [
                        {
                            id: `w_base_${activeDayData.day}`,
                            name: "Base Innegociable",
                            time: "5-10 minutos",
                            items: [
                                "5 minutos de caminata ligera",
                                "Gato-Camello",
                                "Bird-Dog"
                            ],
                            objective: "El core es tu centro de gravedad. Requiere estar activado para proteger tu columna sin importar si vas a levantar una mancuerna o empujar la prensa."
                        },
                        {
                            id: `w_act_${activeDayData.day}`,
                            name: `Activación: ${isLegDay ? 'Piernas y Glúteos' : 'Torso'}`,
                            time: "2 series x 15-20 repeticiones",
                            items: isLegDay
                                ? ["Puentes de glúteo sin peso", "Ejercicios de movilidad de cadera"]
                                : ["Círculos con los brazos (pequeños a grandes)", "Dislocaciones de hombro (Palo de PVC o banda)"],
                            objective: isLegDay
                                ? "Contrarresta el estar sentada. Despierta tus glúteos inhibidos para que tu espalda baja no haga el trabajo que le toca a las piernas al hacer peso muerto o sentadillas."
                                : "Enfocado en hombros y espalda alta. Crea tensión sin fatigarte, preparándote perfecto para el press y los jalones."
                        }
                    ];

                    return (
                        <div className="mb-8 bg-orange-50 rounded-3xl p-6 border border-orange-200 shadow-sm">
                            <h3 className="text-xl font-bold text-orange-900 mb-2 flex items-center gap-2">
                                <FlameIcon className="w-6 h-6 text-orange-600" />
                                Calentamiento Pre-Entrenamiento
                            </h3>
                            <p className="text-orange-800 text-sm mb-6 font-medium">
                                Fórmula de entrada: Cardio suave + Estabilidad de Core + Activación Específica.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {warmupExercises.map((exercise, index) => {
                                    const isCompleted = userProgress[exercise.id]?.completed || false;

                                    return (
                                        <div
                                            key={exercise.id}
                                            className={`bg-white rounded-2xl shadow-sm border transition-all duration-300 overflow-hidden flex flex-col ${isCompleted ? 'border-emerald-400 ring-1 ring-emerald-400/50 shadow-emerald-100' : 'border-slate-200'
                                                }`}
                                        >
                                            <div className="p-5 flex-1 flex flex-col">
                                                <div className="mb-4">
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold shrink-0">
                                                            {index + 1}
                                                        </div>
                                                        <h4 className={`text-lg font-bold leading-tight ${isCompleted ? 'text-emerald-900' : 'text-slate-900'}`}>
                                                            {exercise.name}
                                                        </h4>
                                                    </div>

                                                    <div className="flex flex-wrap gap-2 mb-3">
                                                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-sm font-semibold bg-orange-50 text-orange-700">
                                                            ⏱️ {exercise.time}
                                                        </span>
                                                    </div>

                                                    <ul className="list-disc list-inside text-sm text-slate-700 space-y-1 mb-4 ml-2">
                                                        {exercise.items.map((item, i) => <li key={i}>{item}</li>)}
                                                    </ul>

                                                    <div className="text-sm text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4 mt-auto">
                                                        <p><strong>Objetivo:</strong> {exercise.objective}</p>
                                                    </div>
                                                </div>

                                                <div className="mt-auto pt-4 border-t border-slate-100 flex justify-end">
                                                    <button
                                                        onClick={() => toggleComplete(exercise.id)}
                                                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all shadow-sm ${isCompleted
                                                            ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                                                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                                                            }`}
                                                    >
                                                        {isCompleted ? (
                                                            <><CheckCircleIcon className="w-5 h-5" /> Completado</>
                                                        ) : (
                                                            <><CircleIcon className="w-5 h-5" /> Marcar listo</>
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })()}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {strengthExercises.map((exercise, index) => {
                        const isCompleted = userProgress[exercise.id]?.completed || false;
                        const currentWeight = userProgress[exercise.id]?.weight || '';
                        const bgColorClass = bgColors[index % bgColors.length];

                        return (
                            <div
                                key={exercise.id}
                                className={`bg-white rounded-3xl shadow-sm border transition-all duration-300 overflow-hidden flex flex-col ${isCompleted ? 'border-indigo-400 ring-1 ring-indigo-400/50 shadow-indigo-100' : 'border-slate-200'
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
                                            className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-sm ${isCompleted
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

                {cooldownExercises.length > 0 && (
                    <div className="mt-12 mb-8 bg-blue-50 rounded-3xl p-6 border border-blue-200 shadow-sm">
                        <h3 className="text-xl font-bold text-blue-900 mb-2 flex items-center gap-2">
                            <span className="text-2xl">🧘‍♀️</span> Vuelta a la Calma
                        </h3>
                        <p className="text-blue-800 text-sm mb-6 font-medium">
                            Relajación y recuperación. Se mide en tiempo o respiraciones.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {cooldownExercises.map((exercise, index) => {
                                const isCompleted = userProgress[exercise.id]?.completed || false;

                                return (
                                    <div
                                        key={exercise.id}
                                        className={`bg-white rounded-2xl shadow-sm border transition-all duration-300 overflow-hidden flex flex-col ${isCompleted ? 'border-emerald-400 ring-1 ring-emerald-400/50 shadow-emerald-100' : 'border-slate-200'
                                            }`}
                                    >
                                        <div className="p-5 flex-1 flex flex-col">
                                            <div className="mb-4">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold shrink-0">
                                                        {index + 1}
                                                    </div>
                                                    <h4 className={`text-lg font-bold leading-tight ${isCompleted ? 'text-emerald-900' : 'text-slate-900'}`}>
                                                        {exercise.name}
                                                    </h4>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-sm font-semibold bg-blue-50 text-blue-700">
                                                        ⏱️ {exercise.time}
                                                    </span>
                                                </div>

                                                <div className="text-sm text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4">
                                                    <p><strong>Objetivo:</strong> {exercise.notes.replace('Objetivo: ', '')}</p>
                                                </div>
                                            </div>

                                            <div className="mt-auto pt-4 border-t border-slate-100 flex justify-end">
                                                <button
                                                    onClick={() => toggleComplete(exercise.id)}
                                                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all shadow-sm ${isCompleted
                                                        ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                                                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                                                        }`}
                                                >
                                                    {isCompleted ? (
                                                        <><CheckCircleIcon className="w-5 h-5" /> Completado</>
                                                    ) : (
                                                        <><CircleIcon className="w-5 h-5" /> Marcar listo</>
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
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
