// ... existing code ...
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between font-sans selection:bg-sky-500 selection:text-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800/80 bg-slate-900/50 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => { setResults(null); setQuery(''); }}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center font-black text-xl text-white shadow-lg shadow-sky-500/20">
              t4f
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight">train<span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">4free</span></span>
              <span className="hidden sm:inline-block text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full px-2 py-0.5 ml-2 font-medium">100% Free & No Paywalls</span>
            </div>
          </div>
// ... existing code ...