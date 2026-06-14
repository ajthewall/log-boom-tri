"use client";

import dynamic from "next/dynamic";
import { useGpxStats } from "@/lib/useGpxStats";
import ElevationStats from "./ElevationStats";

const GpxMap = dynamic(() => import("./GpxMap"), { ssr: false });

type LegColor = "swim" | "bike" | "run";

const borderColorMap: Record<LegColor, string> = {
  swim: "border-swim",
  bike: "border-bike",
  run: "border-run",
};

const bgColorMap: Record<LegColor, string> = {
  swim: "bg-swim/5 text-swim",
  bike: "bg-bike/5 text-bike",
  run: "bg-run/5 text-run",
};

export default function MapEmbed({
  gpxFile,
  title,
  accentColor,
  garminLink,
}: {
  gpxFile?: string | null;
  title: string;
  accentColor: LegColor;
  garminLink: string;
}) {
  const { stats, loading } = useGpxStats(gpxFile ?? null);

  return (
    <div className="flex flex-col gap-2">
      <div
        className={`relative w-full rounded-xl overflow-hidden border-2 shadow-lg ${borderColorMap[accentColor]}`}
      >
        {gpxFile ? (
          <GpxMap gpxUrl={gpxFile} accentColor={accentColor} />
        ) : (
          <div
            className={`w-full h-64 md:h-80 flex flex-col items-center justify-center gap-3 ${bgColorMap[accentColor]}`}
          >
            <span className="text-3xl opacity-40">📍</span>
            <p className="text-sm font-display font-bold uppercase tracking-wider opacity-60">
              Course map coming soon
            </p>
          </div>
        )}
      </div>

      {(stats || loading) && (
        <ElevationStats stats={stats} loading={loading} accentColor={accentColor} />
      )}

      {garminLink && (
        <a
          href={garminLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-race-muted hover:text-race-light text-xs font-body text-right transition-colors"
          aria-label={title}
        >
          View on Garmin Connect →
        </a>
      )}
    </div>
  );
}
