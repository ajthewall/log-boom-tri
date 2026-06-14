import { LEGS } from "@/lib/constants";
import LegHeader from "./ui/LegHeader";
import MapEmbed from "./ui/MapEmbed";

const leg = LEGS.bike;

export default function BikeLeg() {
  return (
    <section id="bike" className="bg-race-surface py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top accent bar */}
        <div className="h-1 w-16 bg-bike rounded-full mb-10" />

        <LegHeader
          number={leg.number}
          title={leg.title}
          subtitle={leg.subtitle}
          distance={leg.distance}
          color={leg.color}
        />

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Description */}
          <div>
            <p className="font-body text-race-light leading-relaxed mb-6">
              {leg.description}
            </p>
            <ul className="space-y-2">
              {leg.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-body text-race-muted">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-bike flex-shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          {/* Map */}
          <MapEmbed
            gpxFile={leg.gpxFile}
            title="Bike route — Lake Washington Loop"
            accentColor={leg.color}
            garminLink={leg.mapsLink}
          />
        </div>
      </div>
    </section>
  );
}
