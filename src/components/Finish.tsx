export default function Finish() {
  return (
    <section id="finish" className="bg-race-surface py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Divider */}
        <div className="flex items-center gap-4 mb-12 justify-center">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
          <div className="flex gap-2">
            <span className="w-2 h-2 rounded-full bg-swim" />
            <span className="w-2 h-2 rounded-full bg-bike" />
            <span className="w-2 h-2 rounded-full bg-run" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
        </div>

        <h2 className="font-display font-extrabold text-6xl md:text-7xl uppercase tracking-tight text-race-light mb-4">
          Finish Line
        </h2>

        <p className="font-display font-bold text-xl uppercase tracking-widest text-race-muted mb-8">
          Picnic & Celebration at Log Boom Park
        </p>

        <p className="font-body text-race-light leading-relaxed mb-10 text-lg">
          You swam it. You rode it. You ran it. Now the most important part:{" "}
          <span className="text-run font-body font-medium">AJ's smash burgers, n/a drinks (not sure if we mentioned it, but we're not drinking), and well-earned rest</span>{" "}
          on the grass at Log Boom Park. Bring a blanket and your appetite.
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-race-dark rounded-xl p-5 border border-white/5">
            <div className="font-display font-extrabold text-3xl text-swim mb-1">1.5</div>
            <div className="font-display text-xs uppercase tracking-widest text-race-muted">km swim</div>
          </div>
          <div className="bg-race-dark rounded-xl p-5 border border-white/5">
            <div className="font-display font-extrabold text-3xl text-bike mb-1">~43</div>
            <div className="font-display text-xs uppercase tracking-widest text-race-muted">km bike</div>
          </div>
          <div className="bg-race-dark rounded-xl p-5 border border-white/5">
            <div className="font-display font-extrabold text-3xl text-run mb-1">10</div>
            <div className="font-display text-xs uppercase tracking-widest text-race-muted">km run</div>
          </div>
        </div>

        {/* Date callout */}
        <div className="inline-flex flex-col items-center gap-1 border border-white/10 rounded-2xl px-8 py-5">
          <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-race-muted">Race Day</span>
          <span className="font-display font-extrabold text-2xl uppercase tracking-tight text-race-light">
            Sunday, June 21
          </span>
          <span className="font-body text-sm text-race-muted">Log Boom Park · Kenmore, WA</span>
        </div>
      </div>
    </section>
  );
}
