"use client";

import { useEffect, useState } from "react";

export type GpxStats = {
  distance_km: number;
  elevation_gain_m: number;
  elevation_loss_m: number;
  max_elevation_m: number;
  min_elevation_m: number;
};

function haversineKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function parseGpx(xml: string): GpxStats {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, "application/xml");
  const points = Array.from(doc.querySelectorAll("trkpt"));

  let distance_km = 0;
  let elevation_gain_m = 0;
  let elevation_loss_m = 0;
  let max_elevation_m = -Infinity;
  let min_elevation_m = Infinity;

  for (let i = 0; i < points.length; i++) {
    const lat = parseFloat(points[i].getAttribute("lat") ?? "0");
    const lon = parseFloat(points[i].getAttribute("lon") ?? "0");
    const ele = parseFloat(points[i].querySelector("ele")?.textContent ?? "0");

    if (ele > max_elevation_m) max_elevation_m = ele;
    if (ele < min_elevation_m) min_elevation_m = ele;

    if (i > 0) {
      const prevLat = parseFloat(points[i - 1].getAttribute("lat") ?? "0");
      const prevLon = parseFloat(points[i - 1].getAttribute("lon") ?? "0");
      const prevEle = parseFloat(
        points[i - 1].querySelector("ele")?.textContent ?? "0"
      );

      distance_km += haversineKm(prevLat, prevLon, lat, lon);

      const delta = ele - prevEle;
      if (delta > 0) elevation_gain_m += delta;
      else elevation_loss_m += Math.abs(delta);
    }
  }

  return {
    distance_km: Math.round(distance_km * 10) / 10,
    elevation_gain_m: Math.round(elevation_gain_m),
    elevation_loss_m: Math.round(elevation_loss_m),
    max_elevation_m: Math.round(max_elevation_m),
    min_elevation_m: Math.round(min_elevation_m),
  };
}

export function useGpxStats(gpxUrl: string | null) {
  const [stats, setStats] = useState<GpxStats | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!gpxUrl) return;
    setLoading(true);
    fetch(gpxUrl)
      .then((r) => r.text())
      .then((xml) => setStats(parseGpx(xml)))
      .catch(() => setStats(null))
      .finally(() => setLoading(false));
  }, [gpxUrl]);

  return { stats, loading };
}
