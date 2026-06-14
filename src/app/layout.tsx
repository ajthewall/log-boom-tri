import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Log Boom Tri — June 21, 2026",
  description:
    "A mini triathlon at Log Boom Park, Kenmore WA. Swim 1.5km, bike ~43km on the Lake Washington Loop, run 10km on the Burke-Gilman Trail. Finish with a picnic.",
  openGraph: {
    title: "Log Boom Tri",
    description: "Swim. Bike. Run. Picnic. June 21, 2026 — Log Boom Park, Kenmore WA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlowCondensed.variable} ${inter.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
