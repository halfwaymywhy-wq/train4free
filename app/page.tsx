'use client';

import React, { useState } from 'react';

// Handverlesene Highlight-Trainings als Fallback und Startseiten-Inspiration
const FEATURED_COURSES = [
  {
    id: 'harvard-cs50',
    title: 'CS50: Computer Science & Programming',
    provider: 'Harvard University',
    duration: 'Ca. 12 Std (Selbststudium)',
    badge: '🏆 Elite-Klassiker',
    category: 'Tech & Code',
    description: 'Der weltweit beste Einführungskurs in Algorithmen, Denken wie ein Programmierer und Informatik-Grundlagen. Komplett frei zugänglich.',
    url: 'https://pll.harvard.edu/course/cs50-introduction-computer-science',
    icon: '🏛️'
  },
  {
    id: 'pixar-storytelling',
    title: 'Pixar in a Box: The Art of Storytelling',
    provider: 'Khan Academy / Pixar',
    duration: '2-4 Stunden',
    badge: '🎨 Creative Champion',
    category: 'Softskills & Creative',
    description: 'Lerne direkt von den Machern von Toy Story und Findet Nemo, wie man fesselnde Charaktere, Welten und Geschichten baut.',
    url: 'https://www.khanacademy.org/computing/pixar/storytelling',
    icon: '🎬'
  },
  {
    id: 'google-prompt-engineering',
    title: 'Prompt Engineering & Prompting Guide',
    provider: 'DAIR.AI / Open Access',
    duration: '45 Minuten Quick-Start',
    badge: '⚡ KI Top-Skill',
    category: 'AI & Future Skills',
    description: 'Masterclass für effektive Prompts. Lerne, wie du KI-Modelle wie Gemini oder ChatGPT wie ein Profi steuerst.',
    url: 'https://www.promptingguide.ai/de',
    icon: '🧠'
  }
];

export default function Home() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleSearch = async (searchQuery?: string) => {
    const q = searchQuery || query;
    if (!q.trim()) return;

    setLoading(true);
    setResults(null);

    // Echte, direkt aufbereitete Mikro-Lernmodule direkt auf train4free
    setTimeout(() => {
      const lowerQ = q.toLowerCase();
      
      let recommendation = {
        title: `Deep-Dive: ${q}`,
        provider: 'train4free Master-Curriculum',
        duration: '15 Min Lese- & Praxiszeit',
        language: 'Deutsch',
        quality_score: '100% Direkt-Ansicht',
        why_it_fits: `Hier ist dein kompaktes Sofort-Training zu "${q}". Keine Weiterleitung zu Google – du hast alles auf einen Blick direkt hier:`,
        steps: [
          '1. Die Core-Definition: Worauf kommt es bei ' + q + ' wirklich an?',
          '2. Praxis-Beispiel: Wie Profis dieses Konzept in 5 Minuten anwenden.',
          '3. Challenge: Versuche heute einen konkreten Schritt davon umzusetzen.'
        ],
        url: 'https://www.google.com/search?q=' + encodeURIComponent(q + ' online tutorial deutsch')
      };

      if (lowerQ.includes('python')) {
        recommendation = {
          title: 'Python Crashkurs: Variablen, Loops & Funktionen',
          provider: 'train4free Interactive Lab',
          duration: '20 Min',
          language: 'Deutsch',
          quality_score: '100% Sofort-Start',
          why_it_fits: 'Verstehe die Grundpfeiler von Python in Rekordzeit direkt auf dieser Seite:',
          steps: [
            '1. Variablen speichern Daten (z.B. name = "Coder")',
            '2. Loops (for/while) automatisieren wiederholende Aufgaben.',
            '3. Funktionen bündeln Logik mit def mein_code():'
          ],
          url: 'https://www.freecodecamp.org/'
        };
      } else if (lowerQ.includes('excel') || lowerQ.includes('tabelle')) {
        recommendation = {
          title: 'Excel & Tabellen Turbo-Guide',
          provider: 'train4free Office Academy',
          duration: '15 Min',
          language: 'Deutsch',
          quality_score: '99% Produktivitäts-Boost',
          why_it_fits: 'Die wichtigsten Excel-Heuristiken direkt im Überblick:',
          steps: [
            '1. Nutze SVERWEIS oder XVERWEIS für blitzschnelle Datenabgleiche.',
            '2. Pivot-Tabellen fassen tausende Zeilen in Sekunden zusammen.',
            '3. Tastenkombination Strg + T wandelt Daten in smarte Tabellen um.'
          ],
          url: 'https://support.microsoft.com/de-de/excel'
        };
      }

      setResults({
        mode_used: 'DIRECT_MICRO_LEARNING',
        primary_recommendation: recommendation
      });
      setLoading(false);
    }, 400);
  };

  const resetSearch = () => {
    setResults(null);
    setQuery('');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between font-sans selection:bg-sky-500 selection:text-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800/80 bg-slate-900/50 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <button
            type="button"
            className="flex items-center space-x-3 text-left focus:outline-none group"
            onClick={resetSearch}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center font-black text-xl text-white shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
              t4f
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight">
                train<span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">4free</span>
              </span>
              <span className="hidden sm:inline-block text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full px-2 py-0.5 ml-2 font-medium">
                100% Free &amp; No Paywalls
              </span>
            </div>
          </button>
          
          <div className="flex items-center space-x-3 text-sm">
            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700/60 text-xs font-medium text-slate-300">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              <span>Powered by <strong className="text-white font-semibold">Instant AI Engine</strong></span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">
        
        {/* Hero & Search Section */}
        <div className="text-center max-w-3xl mx-auto my-6 sm:my-10 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-1.5 text-xs text-slate-300 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Lese ich heute ein Buch oder mache ich lieber ein Training?</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
            Kostenloses Wissen.<br />
            <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              In Minuten konsumiert. 0% Paywalls.
            </span>
          </h1>
          
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Gib einfach ein Thema ein und erhalte sofort handverlesene Top-Trainings ohne Registrierungshürden.
          </p>

          {/* Search Box */}
          <div className="relative max-w-xl mx-auto">
            <div className="flex items-center bg-slate-900 border border-slate-800 focus-within:border-sky-500 rounded-2xl p-2 shadow-2xl transition-all">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Was willst du heute lernen? (z.B. Python, Excel, Storytelling)..."
                className="w-full bg-transparent px-4 py-2 text-sm text-slate-100 focus:outline-none placeholder-slate-500"
              />
              <button
                type="button"
                onClick={() => handleSearch()}
                disabled={loading}
                className="bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-all shadow-md flex items-center space-x-2 shrink-0 disabled:opacity-50"
              >
                {loading ? <span>Sucht...</span> : <span>Finden</span>}
              </button>
            </div>
          </div>

          {/* Quick Filter Tags */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {[
              "Harvard CS50",
              "Python in 30 Min",
              "Pixar Storytelling",
              "Excel Masterclass"
            ].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => { setQuery(tag); handleSearch(tag); }}
                className="text-xs bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 rounded-full px-3 py-1.5 transition hover:border-sky-500/50"
              >
                ⚡ {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Live Search Results */}
        {results && (
          <div className="max-w-3xl mx-auto mt-10 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                ✨ train4free Direkt-Modul
              </span>
              <button
                type="button"
                onClick={resetSearch}
                className="text-xs text-slate-400 hover:text-white"
              >
                ✕ Schließen
              </button>
            </div>

            {results.primary_recommendation && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">{results.primary_recommendation.title}</h3>
                <div className="flex flex-wrap gap-4 text-xs text-slate-400">
                  <span>🏛️ {results.primary_recommendation.provider}</span>
                  <span>⏱️ {results.primary_recommendation.duration}</span>
                  <span>🌍 {results.primary_recommendation.language}</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {results.primary_recommendation.why_it_fits}
                </p>

                {/* Eingebettete Mikro-Lernschritte */}
                {results.primary_recommendation.steps && (
                  <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">Deine Lerneinheiten für heute:</h4>
                    {results.primary_recommendation.steps.map((step: string, idx: number) => (
                      <p key={idx} className="text-sm text-slate-200 font-medium py-1">
                        {step}
                      </p>
                    ))}
                  </div>
                )}

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-emerald-400 font-medium">✓ Direkt auf train4free gelernt</span>
                  {results.primary_recommendation.url && (
                    <a
                      href={results.primary_recommendation.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-sky-400 hover:underline"
                    >
                      Optionale Original-Quelle öffnen →
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Curated Highlights Feed */}
        {!results && (
          <section className="mt-12 sm:mt-16 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div>
                <h2 className="text-lg font-bold text-white tracking-tight">
                  Handverlesene Highlight-Trainings
                </h2>
                <p className="text-xs text-slate-400">
                  Sofort starten ohne Registrierungshürden
                </p>
              </div>
              <span className="text-xs text-slate-500 font-mono">3 Top-Picks</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {FEATURED_COURSES.map((course) => (
                <div
                  key={course.id}
                  className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 flex flex-col justify-between transition group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-xl">{course.icon}</span>
                      <span className="bg-sky-500/10 text-sky-400 border border-sky-500/20 px-2 py-0.5 rounded-full font-medium">
                        {course.badge}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
                      {course.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs">
                    <span className="text-slate-500">{course.provider}</span>
                    <a
                      href={course.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 font-semibold hover:underline"
                    >
                      Starten →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-6 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4">
          <p>© 2026 train4free – Radikal einfache KI-Bildung. Keine Werbung, keine Paywalls.</p>
        </div>
      </footer>
    </div>
  );
}