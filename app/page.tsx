import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="camps">
        <Camp />
      </section>
      <section id="guide">
        <Guide />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="download">
        <GetApp />
      </section>
    </>
  );
}
