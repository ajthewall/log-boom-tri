"use client";

import type { GpxStats } from "@/lib/useGpxStats";

type LegColor = "swim" | "bike" | "run";

const accentTextMap: Record<LegColor, string> = {
  swim: "text-swim",
  bike: "text-bike",
  run: "text-run",
};

const accentBorderMap: Record<LegColor, string> = {
  swim: "border-swim/20",
  bike: "border-bike/20",
  run: "border-run/20",
};

function StatCell({
  label,
  value,
  accentColor,
}: {
  label: string;
  value: string;
  accentColor: LegColor;
}) {
  return (
    <div
      className={`flex flex-col items-center gap-1 py-3 px-2 rounded-lg border bg-white/5 ${accentBorderMap[accentColor]}`}
    >
      <span
        className={`font-display font-bold text-xl leading-none ${accentTextMap[accentColor]}`}
      >
        {value}
      </span>
      <span className="font-display text-xs uppercase tracking-widest text-race-muted">
        {label}
      </span>
    </div>
  );
}

export default function ElevationStats({
  stats,
  loading,
  accentColor,
}: {
  stats: GpxStats | null;
  loading: boolean;
  accentColor: LegColor;
}) {
  if (loading) {
    return (
      <div className="grid grid-cols-4 gap-2 mt-3 animate-pulse">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-14 rounded-lg bg-white/5" />
        ))}
      </div>
    );
  }

  if (!stats) return null;

  return (
    <div className="grid grid-cols-4 gap-2 mt-3">
      <StatCell
        label="Distance"
        value={`${stats.distance_km} km`}
        accentColor={accentColor}
      />
      <StatCell
        label="Elev Gain"
        value={`+${stats.elevation_gain_m} m`}
        accentColor={accentColor}
      />
      <StatCell
        label="Elev Loss"
        value={`−${stats.elevation_loss_m} m`}
        accentColor={accentColor}
      />
      <StatCell
        label="Max Elev"
        value={`${stats.max_elevation_m} m`}
        accentColor={accentColor}
      />
    </div>
  );
}
