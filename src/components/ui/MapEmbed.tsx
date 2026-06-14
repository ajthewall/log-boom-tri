type LegColor = "swim" | "bike" | "run";

const borderColorMap: Record<LegColor, string> = {
  swim: "border-swim",
  bike: "border-bike",
  run: "border-run",
};

export default function MapEmbed({
  src,
  title,
  accentColor,
  fallbackHref,
}: {
  src: string;
  title: string;
  accentColor: LegColor;
  fallbackHref: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className={`relative w-full rounded-xl overflow-hidden border-2 shadow-lg ${borderColorMap[accentColor]}`}
      >
        <iframe
          src={src}
          title={title}
          className="w-full h-64 md:h-80"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <a
        href={fallbackHref}
        target="_blank"
        rel="noopener noreferrer"
        className="text-race-muted hover:text-race-light text-xs font-body text-right transition-colors"
      >
        Open in Google Maps →
      </a>
    </div>
  );
}
