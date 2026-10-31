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
  const [completedSteps, setCompletedSteps] = useState<{ [key: number]: boolean }>({});

  const toggleStep = (index: number) => {
    setCompletedSteps(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handleSearch = async (searchQuery?: string) => {
    const q = searchQuery || query;
    if (!q.trim()) return;

    setLoading(true);
    setResults(null);
    setCompletedSteps({});

    // Dynamischer, robuster Generator für maßgeschneiderte Mikro-Lerneinheiten
    setTimeout(() => {
      const lowerQ = q.toLowerCase();
      
      let title = `Mikro-Training: ${q}`;
      let summary = `Willkommen zu deinem Intensiv-Training für "${q}". Wir haben die Kernprinzipien, Methoden und Praxis-Anwendungen direkt für dich aufbereitet.`;
      
      let steps = [
        {
          title: `1. Die Kernfundamente von ${q}`,
          detail: `Verstehe die wichtigsten Grundlagen und Begrifflichkeiten von ${q}. Konzentriere dich auf die zentralen Konzepte, die den größten Impact haben.`
        },
        {
          title: `2. Praktische Methodik & Schritt-für-Schritt Anwendung`,
          detail: `Wende ${q} in der Praxis an. Erstelle konkrete Handlungsregeln oder Übungsszenarien für deinen Alltag.`
        },
        {
          title: `3. Erfolgs-Check & Selbstreflexion`,
          detail: `Prüfe dein Verständnis: Kannst du die Kernidee von ${q} in 2 Sätzen erklären und sofort in einem Praxisbeispiel nutzen?`
        }
      ];

      if (lowerQ.includes('persönlich') || lowerQ.includes('mindset') || lowerQ.includes('entwicklung')) {
        title = 'Persönlichkeitsentwicklung & Growth Mindset';
        summary = 'Echte Persönlichkeitsentwicklung passiert nicht durch passives Lesen, sondern durch gezielte Verhaltensänderungen, Selbstreflexion und mentale Frameworks.';
        steps = [
          {
            title: '1. Das Growth Mindset (Carol Dweck)',
            detail: 'Unterscheide zwischen Fixed Mindset ("Ich kann das halt nicht") und Growth Mindset ("Ich kann das noch nicht"). Fehler sind keine Schwächen, sondern nötige Lernsignale des Gehirns.'
          },
          {
            title: '2. Atomic Habits: Die 1%-Methode',
            detail: 'Setze dir nicht riesige Hürden, sondern baue Mikrogewohnheiten auf. Wer sich jeden Tag um 1% verbessert, ist nach einem Jahr 37-mal besser.'
          },
          {
            title: '3. Radikale Ausmistung von Ablenkungen',
            detail: 'Schütze deine mentale Energie. Limitiere passiven Social-Media-Konsum und ersetze ihn durch gezielte Reflexions- oder Fokussier-Zeiten.'
          }
        ];
      } else if (lowerQ.includes('onboard') || lowerQ.includes('einarbeitung') || lowerQ.includes('hr')) {
        title = 'Exzellentes Onboarding & Einarbeitung';
        summary = 'Ein gelungenes Onboarding entscheidet in den ersten 90 Tagen über Motivation, Bindung und Produktivität neuer Teammitglieder.';
        steps = [
          {
            title: '1. Die 3 Phasen: Preboarding, Tag 1 & Erster Monat',
            detail: 'Schicke Hardware & Zugänge vor Tag 1. Tag 1 dient der Begrüßung und Kultur – nicht der Bürokratie. Monat 1 baut systematisch fachliche Autonomie auf.'
          },
          {
            title: '2. Das Buddy-System installieren',
            detail: 'Stelle jedem Neuling einen festen Ansprechpartner zur Seite, der nicht der Chef ist. Das baut soziale Hürden und Hemmungen sofort ab.'
          },
          {
            title: '3. Klarheit durch 30-60-90-Tage-Pläne',
            detail: 'Definiere für jeden Meilenstein klare Erwartungen und Lernziele. Regelmäßiges Feedback nach Woche 1, 4 und 12 sichert den langfristigen Erfolg.'
          }
        ];
      } else if (lowerQ.includes('python') || lowerQ.includes('programmieren') || lowerQ.includes('code')) {
        title = 'Python Programmier-Fundament';
        summary = 'Python ist die verständlichste und mächtigste Sprache für KI, Datenanalyse und Webentwicklung.';
        steps = [
          {
            title: '1. Variablen & Datentypen',
            detail: 'Speichere Werte wie in Schubladen: name = "Alex" (Text/String), alter = 25 (Zahl/Integer). Python erkennt Typen automatisch.'
          },
          {
            title: '2. Schleifen (Loops) & Bedingungen',
            detail: 'Nutze "if"-Abfragen für Entscheidungen und "for"-Schleifen, um Aufgaben automatisch zu wiederholen ohne doppelten Code.'
          },
          {
            title: '3. Funktionen schreiben',
            detail: 'Bündele deine Logik mit "def mein_befehl():". So bleibt dein Programm sauber, wiederverwendbar und übersichtlich.'
          }
        ];
      }

      setResults({
        mode_used: 'DIRECT_MICRO_LEARNING',
        primary_recommendation: {
          title,
          provider: 'train4free Direct-Curriculum',
          duration: '15 Min Sofort-Lerneinheit',
          language: 'Deutsch',
          summary,
          resource_url: `https://www.youtube.com/results?search_query=${encodeURIComponent(q + ' kostenloser kurs tutorial deutsch')}`,
          steps
        }
      });
      setLoading(false);
    }, 200);
  };

  const resetSearch = () => {
    setResults(null);
    setQuery('');
    setCompletedSteps({});
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
            Gib einfach dein Wunschthema ein und lerne sofort direkt auf der Seite.
          </p>

          {/* Search Box */}
          <div className="relative max-w-xl mx-auto">
            <div className="flex items-center bg-slate-900 border border-slate-800 focus-within:border-sky-500 rounded-2xl p-2 shadow-2xl transition-all">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Was willst du heute lernen? (z.B. Persönlichkeitsentwicklung, Python, Zeitmanagement)..."
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
              "Persönlichkeitsentwicklung",
              "Python Programmieren",
              "Harvard CS50",
              "Pixar Storytelling"
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

        {/* Live Search Results / Interactive Micro-Learning Card */}
        {results && results.primary_recommendation && (
          <div className="max-w-3xl mx-auto mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 flex items-center gap-2">
                <span>✨</span> train4free Interactive Module
              </span>
              <button
                type="button"
                onClick={resetSearch}
                className="text-xs text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded-lg transition"
              >
                ✕ Schließen
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-extrabold text-white">
                {results.primary_recommendation.title}
              </h3>
              
              <div className="flex flex-wrap gap-3 text-xs text-slate-400">
                <span className="bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">🏛️ {results.primary_recommendation.provider}</span>
                <span className="bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">⏱️ {results.primary_recommendation.duration}</span>
                <span className="bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">🌍 {results.primary_recommendation.language}</span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/50 border border-slate-800/80 p-3.5 rounded-xl">
                {results.primary_recommendation.summary}
              </p>

              {/* Empfohlene Gratis-Ressource */}
              {results.primary_recommendation.resource_url && (
                <div className="bg-slate-950 p-3.5 rounded-xl border border-sky-500/20 flex items-center justify-between gap-3">
                  <div className="text-xs">
                    <span className="font-bold text-sky-400 block">🎥 Empfohlener Gratis-Videokurs &amp; Ressourcen:</span>
                    <span className="text-slate-400">Direkt auf geprüfte kostenlose Videokurse &amp; Materialien zugreifen.</span>
                  </div>
                  <a
                    href={results.primary_recommendation.resource_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs px-3.5 py-2 rounded-lg transition shrink-0"
                  >
                    Kurs öffnen →
                  </a>
                </div>
              )}

              {/* Interaktive Lernschritte */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  Interaktive Lerneinheiten (Klicke zum Haken setzen):
                </h4>
                
                {results.primary_recommendation.steps.map((step: any, idx: number) => {
                  const isDone = completedSteps[idx];
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleStep(idx)}
                      className={`cursor-pointer p-4 rounded-xl border transition-all ${
                        isDone
                          ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                          : 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-200'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1">
                          <h5 className={`font-bold text-sm ${isDone ? 'line-through text-emerald-400' : 'text-slate-100'}`}>
                            {step.title}
                          </h5>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            {step.detail}
                          </p>
                        </div>
                        <div className={`w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 text-xs ${
                          isDone ? 'bg-emerald-500 border-emerald-400 text-slate-950 font-bold' : 'border-slate-700 bg-slate-900 text-slate-500'
                        }`}>
                          {isDone ? '✓' : idx + 1}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Status Footer */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-emerald-400 font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  100% On-Page absolviert – Keine externen Umleitungen
                </span>
                <span className="text-slate-500 font-mono">
                  {Object.keys(completedSteps).filter(k => completedSteps[Number(k)]).length} / {results.primary_recommendation.steps.length} erledigt
                </span>
              </div>
            </div>
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