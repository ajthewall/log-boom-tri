import { EVENT } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center bg-race-dark overflow-hidden">
      {/* Background gradient rings */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-swim/30 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl">
        {/* Eyebrow */}
        <span className="font-display font-bold text-xs uppercase tracking-[0.25em] text-race-muted border border-white/10 rounded-full px-4 py-1.5">
          June 21, 2026 &nbsp;·&nbsp; Log Boom Park, Kenmore WA
        </span>

        {/* Title */}
        <h1 className="font-display font-extrabold text-7xl sm:text-8xl md:text-9xl uppercase tracking-tight leading-none text-race-light">
          Log Boom
          <br />
          <span className="text-swim">Tri</span>
        </h1>

        {/* Tagline */}
        <p className="font-display font-bold text-xl sm:text-2xl uppercase tracking-[0.2em] text-race-muted">
          {EVENT.tagline}
        </p>

        {/* Leg distance pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <span className="bg-swim/10 text-swim border border-swim/30 rounded-full px-4 py-1.5 text-sm font-display font-bold uppercase tracking-wide">
            Swim 1.5 km
          </span>
          <span className="bg-bike/10 text-bike border border-bike/30 rounded-full px-4 py-1.5 text-sm font-display font-bold uppercase tracking-wide">
            Bike ~43 km
          </span>
          <span className="bg-run/10 text-run border border-run/30 rounded-full px-4 py-1.5 text-sm font-display font-bold uppercase tracking-wide">
            Run 10 km
          </span>
        </div>

        {/* CTA */}
        <a
          href="#schedule"
          className="mt-4 bg-run hover:bg-run-dark text-white font-display font-bold uppercase tracking-widest text-sm px-8 py-3 rounded-lg transition-colors"
        >
          See the Route
        </a>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-race-muted">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-race-muted/50" />
      </div>
    </section>
  );
}
