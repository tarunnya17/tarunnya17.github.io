import Hero from "@/components/Hero";
import { hero } from "@/resources/content";
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-sans">
      <div className="max-w-[700px] mx-auto py-[100px]">
          <section>
            <Hero />
          </section>
      </div>
    </main>
  );
}
