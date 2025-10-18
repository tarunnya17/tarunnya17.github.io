"use client";

import { useEffect, useState, useRef } from "react";
import Hero from "@/components/Hero";
import { SlideTabs } from "@/components/ui/slide-tabs";
import { sections } from "@/resources/sections";
import { Section } from "@/types/sections.types";
import Image from "next/image";
import WorkSection from "@/components/Work";
import EducationSection from "@/components/Education";
import PublicationSection from "@/components/Publications";
import FeatureSection from "@/components/Features";
import ProjectsSection from "@/components/Projects";
import ShowcaseSection from "@/components/Showcase";
import ContactSection from "@/components/Contact";
import BlurEffect from "@/components/ui/glass-div";


export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>(sections.home);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: Array.from({ length: 11 }, (_, i) => i * 0.1), // [0, 0.1, ..., 1]
    };

    let visibleSections: { [id: string]: number } = {};

    const updateActiveSection = () => {
      // Manual check using getBoundingClientRect as fallback
      let maxVisible = 0;
      let currentSection: Section | null = null;
      Object.values(sections).forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const visible =
            Math.max(
              0,
              Math.min(rect.bottom, window.innerHeight) -
              Math.max(rect.top, 0)
            ) / rect.height;
          if (visible > maxVisible) {
            maxVisible = visible;
            currentSection = section;
          }
        }
      });
      if (currentSection) setActiveSection(currentSection);
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        visibleSections[entry.target.id] = entry.intersectionRatio;
      });
      const mostVisible = Object.entries(visibleSections)
        .sort((a, b) => b[1] - a[1])[0];
      if (mostVisible) {
        const section = Object.values(sections).find(
          (s) => s.id === mostVisible[0]
        );
        if (section) {
          setActiveSection(section);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all section elements
    Object.values(sections).forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Fallback: listen to scroll and update manually
    window.addEventListener("scroll", updateActiveSection, { passive: true });

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateActiveSection);
      visibleSections = {};
    };
  }, []);

  const navBarRef = useRef<HTMLDivElement | null>(null);

  // Function to handle manual section changes from the tabs
  const handleSectionChange = (sectionId: string) => {
    const section = Object.values(sections).find((s) => s.id === sectionId);
    if (section) {
      // Scroll to the section
      const element = document.getElementById(section.id);
      element?.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
    }
  };

  return (
    <main className="font-sans">
      <div className="mx-auto max-w-[1000px] pt-[125px] px-6 flex flex-col gap-6 justify-center">
        <section id={sections.intro.id} className=" scroll-mt-25 mb-16 ">
          <Hero />
        </section>

        <div
          ref={navBarRef}
          className="sticky -translate-x-3 top-4 z-10 w-full bg-background p-2 rounded-full"
        >
          <SlideTabs
            sections={Object.values(sections)}
            activeSection={activeSection}
            onSectionChange={handleSectionChange}
          />
        </div>

        <section className="scroll-mt-25 mb-16 ">
          <ShowcaseSection />
        </section>

        <section id={sections.work.id} className="scroll-mt-25 mb-16 ">
          <WorkSection />
        </section>
        <section id={sections.education.id} className="scroll-mt-25 mb-16 ">
          <EducationSection />
        </section>
        <section id={sections.publications.id} className="scroll-mt-25 mb-16 ">
          <PublicationSection />
        </section>
        <section id={sections.projects.id} className="scroll-mt-25 mb-16">
          <ProjectsSection />
        </section>
        <section id={sections.achievements.id} className="scroll-mt-25 mb-16 ">
          <FeatureSection />
        </section>
        <section id={sections.contact.id} className="scroll-mt-25 mb-16 ">
          <ContactSection />
        </section>

        <div
          className="fixed bottom-0 left-0 w-full h-32 pointer-events-none"
          
        >
          <BlurEffect />
        </div>

      </div>
    </main>
  );
}
