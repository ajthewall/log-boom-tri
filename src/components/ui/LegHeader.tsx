import DistanceBadge from "./DistanceBadge";

type LegColor = "swim" | "bike" | "run";

const ringColorMap: Record<LegColor, string> = {
  swim: "border-swim text-swim",
  bike: "border-bike text-bike",
  run: "border-run text-run",
};

export default function LegHeader({
  number,
  title,
  subtitle,
  distance,
  color,
}: {
  number: string;
  title: string;
  subtitle: string;
  distance: string;
  color: LegColor;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
      <div
        className={`flex-shrink-0 w-16 h-16 rounded-full border-2 flex items-center justify-center font-display font-bold text-xl ${ringColorMap[color]}`}
      >
        {number}
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-3 mb-1">
          <h2 className="font-display font-bold text-5xl uppercase tracking-tight text-race-light leading-none">
            {title}
          </h2>
          <DistanceBadge distance={distance} color={color} />
        </div>
        <p className="text-race-muted font-body text-sm uppercase tracking-widest">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
