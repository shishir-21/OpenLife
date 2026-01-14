const DailySummaryCard = () => {
  return (
    <div className="hover-grid group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200/40 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)]">
      
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300 mb-1">
            Daily Summary
          </p>
          <h2 className="text-xl font-bold text-white">
            Today&apos;s Progress
          </h2>
        </div>

        <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        
        <div className="hover-grid rounded-xl border border-white/5 bg-white/5 p-4 backdrop-blur transition-all duration-300 hover:bg-white/10">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
              Time Tracked
            </p>
          </div>
          <p className="text-3xl font-bold text-white">5h 30m</p>
          <p className="text-xs text-slate-500 mt-1">Total focus time</p>
        </div>

        <div className="hover-grid rounded-xl border border-white/5 bg-white/5 p-4 backdrop-blur transition-all duration-300 hover:bg-white/10">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
              Completed
            </p>
          </div>
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-bold text-white">8</p>
            <p className="text-lg text-slate-400">/ 12</p>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Steady daily progress
          </p>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
            Daily Progress
          </p>
          <p className="text-xs font-bold text-emerald-400">67%</p>
        </div>
        <div className="h-2 rounded-full bg-slate-700/50 overflow-hidden">
          <div className="h-full w-2/3 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
        </div>
      </div>

      {/* Reflection */}
      <div className="relative rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 backdrop-blur">
        <div className="absolute top-3 right-3 h-2 w-2 rounded-full bg-emerald-400 opacity-60" />
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-300 mb-2">
          Daily Reflection
        </p>
        <p className="text-sm leading-relaxed text-slate-200 pr-4">
          Great focus today! You completed most of your high-priority tasks and maintained good energy levels.
        </p>
      </div>

    </div>
  );
};

export default DailySummaryCard;
