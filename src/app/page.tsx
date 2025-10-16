'use client'

import { useEffect, useState, useRef } from "react";
import Hero from "@/components/Hero";
import { SlideTabs } from "@/components/ui/slide-tabs";
import { sections } from "@/resources/sections";
import { Section } from "@/types/sections.types";
import Image from "next/image";
import WorkSection from "@/components/Work";
import EducationSection from "@/components/Education";

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>(sections.home);
  
  useEffect(() => {
    // Create an observer instance
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 1, // 60% of the section needs to be visible
    };
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          // Find the section object that corresponds to this ID
          const section = Object.values(sections).find(s => s.id === sectionId);
          if (section) {
            setActiveSection(section);
          }
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all section elements
    Object.values(sections).forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });
    
    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  const navBarRef = useRef<HTMLDivElement | null>(null);

  // Function to handle manual section changes from the tabs
  const handleSectionChange = (sectionId: string) => {
    const section = Object.values(sections).find(s => s.id === sectionId);
    if (section) {
      // Scroll to the section
      const element = document.getElementById(section.id);
      element?.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
    }
  };

  return (
    <main className="font-sans">
      <div className="max-w-[700px] mx-auto py-[100px] flex flex-col gap-6">
        <section id={sections.intro.id} className="scroll-mt-20 mb-14">
          <Hero />
        </section>

        <div ref={navBarRef} className="sticky -translate-2 top-4 z-10 w-full bg-background p-2 rounded-full">
          <SlideTabs
            sections={Object.values(sections)}
            activeSection={activeSection}
            onSectionChange={handleSectionChange}
          />
        </div>

        <section id={sections.work.id} className="scroll-mt-20">
          <WorkSection />
        </section>
        <section id={sections.education.id} className="h-[50vh] scroll-mt-20 mb-14">
          <EducationSection />
        </section>
      </div>
    </main>
  );
}
