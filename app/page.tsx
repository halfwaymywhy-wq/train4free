export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center p-6 text-center">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center font-black text-2xl text-white shadow-lg shadow-sky-500/20 mb-4">
        t4f
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight mb-2">
        train<span className="text-sky-400">4free</span>
      </h1>
      <p className="text-slate-400 text-lg max-w-md mb-6">
        Deine tägliche Dosis Weltklasse-Wissen. 100% Kostenlos. 0% Paywalls.
      </p>
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-sm text-slate-300 max-w-sm">
        🚀 <strong>Deployment erfolgreich!</strong> Die Live-Suche & KI-Engine werden jetzt verknüpft.
      </div>
    </main>
  );
}