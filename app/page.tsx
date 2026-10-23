import { Hero } from "@/components/sections/hero";
import { Values } from "@/components/sections/values";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Values />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}
