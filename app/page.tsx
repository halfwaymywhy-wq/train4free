'use client';

import React, { useState } from 'react';

export default function Home() {
const [query, setQuery] = useState('');
const [loading, setLoading] = useState(false);
const [results, setResults] = useState(null);

const handleSearch = async (searchQuery?: string) => {
const q = searchQuery || query;
if (!q) return;

setLoading(true);
setResults(null);

try {
  const response = await fetch('/api/search', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: q }),
  });
  const data = await response.json();
  if (data.success) {
    setResults(data.data);
  }
} catch (err) {
  console.error(err);
} finally {
  setLoading(false);
}


};

return (

{/* Header */}


<div className="flex items-center space-x-3 cursor-pointer" onClick={() => { setResults(null); setQuery(''); }}>

t4f


train4free
100% Free & No Paywalls



      <div className="flex items-center space-x-3 text-sm">
        <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700/60 text-xs font-medium text-slate-300">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
          <span>Powered by <strong class="text-white font-semibold">Gemini AI</strong></span>
        </div>
      </div>
    </div>
  </header>

  {/* Main Content */}
  <main className="flex-grow max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">
    {/* Hero & Search Section */}
    <div className="text-center max-w-3xl mx-auto my-6 sm:my-10 space-y-6">
      <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-1.5 text-xs text-slate-300">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>Lese ich heute ein Buch oder mache ich lieber ein Training?</span>
      </div>
      
      <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
        Kostenloses Wissen.<br/>
        <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">In Minuten konsumiert. 0% Paywalls.</span>
      </h1>
      
      <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
        Die KI durchsucht weltweit das Netz nach handverlesenen Top-Trainings oder baut dir auf Knopfdruck dein persönliches Mikro-Curriculum.
      </p>

      {/* Search Box */}
      <div className="relative max-w-xl mx-auto">
        <div className="flex items-center bg-slate-900 border border-slate-800 focus-within:border-sky-500 rounded-2xl p-2 shadow-2xl transition-all">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Was willst du heute lernen? (z.B. Storytelling, Python Basis, Scrum)..."
            className="w-full bg-transparent px-4 py-2 text-sm text-slate-100 focus:outline-none placeholder-slate-500"
          />
          <button
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
          "Elite Bucket-List: Harvard & MIT",
          "Python in 30 Min",
          "Pixar Storytelling",
          "Scrum Master Quick-Check"
        ].map((tag) => (
          <button
            key={tag}
            onClick={() => { setQuery(tag); handleSearch(tag); }}
            className="text-xs bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 rounded-full px-3 py-1.5 transition"
          >
            ⚡ {tag}
          </button>
        ))}
      </div>
    </div>

    {/* Results Area */}
    {results && (
      <div className="max-w-3xl mx-auto mt-10 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
            {results.mode_used === 'LIVE_SEARCH' ? '🌐 Live-Fundstück' : '🧠 KI-On-Demand Curriculum'}
          </span>
          <span className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2 py-0.5 font-medium">
            100% Kostenlos
          </span>
        </div>

        {results.primary_recommendation && (
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white">{results.primary_recommendation.title}</h3>
            <div className="flex flex-wrap gap-4 text-xs text-slate-400">
              <span>🏛️ {results.primary_recommendation.provider}</span>
              <span>⏱️ {results.primary_recommendation.duration}</span>
              <span>🌍 {results.primary_recommendation.language}</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {results.primary_recommendation.why_it_fits}
            </p>
            {results.primary_recommendation.url && (
              <a
                href={results.primary_recommendation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs px-4 py-2 rounded-lg transition"
              >
                Jetzt kostenlos starten →
              </a>
            )}
          </div>
        )}
      </div>
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