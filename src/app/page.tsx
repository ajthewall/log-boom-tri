import StickyNav from "@/components/StickyNav";
import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import SwimLeg from "@/components/SwimLeg";
import BikeLeg from "@/components/BikeLeg";
import RunLeg from "@/components/RunLeg";
import Finish from "@/components/Finish";

export default function Home() {
  return (
    <>
      <StickyNav />
      <main className="pt-12">
        <Hero />
        <Schedule />
        <SwimLeg />
        <BikeLeg />
        <RunLeg />
        <Finish />
      </main>
    </>
  );
}
