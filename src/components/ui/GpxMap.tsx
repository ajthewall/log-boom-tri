"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import type { Map as LeafletMap } from "leaflet";

type LegColor = "swim" | "bike" | "run";

const lineColorMap: Record<LegColor, string> = {
  swim: "#2196F3",
  bike: "#4CAF50",
  run: "#FF6D00",
};

function parseTrackPoints(xml: string): [number, number][] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, "application/xml");
  return Array.from(doc.querySelectorAll("trkpt")).map((pt) => [
    parseFloat(pt.getAttribute("lat") ?? "0"),
    parseFloat(pt.getAttribute("lon") ?? "0"),
  ]);
}

export default function GpxMap({
  gpxUrl,
  accentColor,
}: {
  gpxUrl: string;
  accentColor: LegColor;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const color = lineColorMap[accentColor];
    let map: LeafletMap;

    const init = async () => {
      const L = (await import("leaflet")).default;

      map = L.map(containerRef.current!, { scrollWheelZoom: false });
      mapRef.current = map;

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 19,
        }
      ).addTo(map);

      const res = await fetch(gpxUrl);
      const xml = await res.text();
      const points = parseTrackPoints(xml);
      if (points.length === 0) return;

      const polyline = L.polyline(points, {
        color,
        weight: 4,
        opacity: 0.9,
      }).addTo(map);

      const dot = (fill: string, stroke: string) =>
        L.divIcon({
          className: "",
          html: `<div style="width:10px;height:10px;border-radius:50%;background:${fill};border:2px solid ${stroke};box-shadow:0 0 6px rgba(0,0,0,0.6)"></div>`,
          iconSize: [10, 10],
          iconAnchor: [5, 5],
        });

      L.marker(points[0], { icon: dot(color, "#fff") }).addTo(map);
      L.marker(points[points.length - 1], { icon: dot("#fff", color) }).addTo(map);

      map.fitBounds(polyline.getBounds(), { padding: [24, 24] });
    };

    init().catch(console.error);

    return () => {
      map?.remove();
      mapRef.current = null;
    };
  }, [gpxUrl, accentColor]);

  return <div ref={containerRef} className="w-full h-64 md:h-80" />;
}
