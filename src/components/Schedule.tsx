import { SCHEDULE } from "@/lib/constants";

export default function Schedule() {
  return (
    <section id="schedule" className="bg-race-surface py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display font-bold text-4xl uppercase tracking-tight text-race-light mb-3">
          Schedule
        </h2>
        <p className="text-race-muted font-body text-sm mb-8">
          Sunday, June 21, 2026 &nbsp;·&nbsp; Log Boom Park, Kenmore WA
        </p>

        {/* TBD banner */}
        <div className="flex items-start gap-3 bg-run/10 border border-run/30 rounded-lg px-4 py-3 mb-8">
          <span className="text-run mt-0.5">⚠</span>
          <p className="text-run text-sm font-body">
            <strong className="font-display font-bold uppercase tracking-wide">Times TBD</strong>
            {" "}— exact start times will be confirmed closer to race day.
          </p>
        </div>

        {/* Schedule rows */}
        <div className="divide-y divide-white/5">
          {SCHEDULE.map((row, i) => (
            <div key={i} className="flex items-center gap-6 py-4">
              <span className="w-16 font-display font-bold text-sm text-race-muted uppercase tracking-wider flex-shrink-0">
                {row.time}
              </span>
              <span className="font-body text-race-light">{row.event}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
