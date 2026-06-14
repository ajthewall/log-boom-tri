"use client";

import { useGpxStats } from "@/lib/useGpxStats";
import ElevationStats from "./ElevationStats";

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

const isPending = (courseId: string) => courseId.endsWith("_COURSE_ID");

export default function MapEmbed({
  garminCourseId,
  gpxFile,
  title,
  accentColor,
  fallbackHref,
}: {
  garminCourseId: string;
  gpxFile?: string | null;
  title: string;
  accentColor: LegColor;
  fallbackHref: string;
}) {
  const { stats, loading } = useGpxStats(gpxFile ?? null);
  const src = `https://connect.garmin.com/modern/course/${garminCourseId}/embed`;

  return (
    <div className="flex flex-col gap-2">
      <div
        className={`relative w-full rounded-xl overflow-hidden border-2 shadow-lg ${borderColorMap[accentColor]}`}
      >
        {isPending(garminCourseId) ? (
          <div
            className={`w-full h-64 md:h-80 flex flex-col items-center justify-center gap-3 ${bgColorMap[accentColor]}`}
          >
            <span className="text-3xl opacity-40">📍</span>
            <p className="text-sm font-display font-bold uppercase tracking-wider opacity-60">
              Course map coming soon
            </p>
            <p className="text-xs opacity-40 font-body">
              Garmin course not yet linked
            </p>
          </div>
        ) : (
          <iframe
            src={src}
            title={title}
            className="w-full h-64 md:h-80"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        )}
      </div>

      {(stats || loading) && (
        <ElevationStats stats={stats} loading={loading} accentColor={accentColor} />
      )}

      <a
        href={fallbackHref}
        target="_blank"
        rel="noopener noreferrer"
        className="text-race-muted hover:text-race-light text-xs font-body text-right transition-colors"
      >
        View on Garmin Connect →
      </a>
    </div>
  );
}
