type LegColor = "swim" | "bike" | "run";

const colorMap: Record<LegColor, string> = {
  swim: "bg-swim text-white",
  bike: "bg-bike text-white",
  run: "bg-run text-white",
};

export default function DistanceBadge({
  distance,
  color,
}: {
  distance: string;
  color: LegColor;
}) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-display font-bold tracking-wider uppercase ${colorMap[color]}`}
    >
      {distance}
    </span>
  );
}
