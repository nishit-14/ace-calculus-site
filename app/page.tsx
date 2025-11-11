"use client";
import { Toaster } from "sonner";

import { RegisterBar } from "@/components/register-bar";
import { MainHeroBox } from "@/components/main-hero-box";
import { VideoHighlightsSection } from "@/components/video-highlights-section";
import { AboutSection } from "@/components/about-section";
import { ClassesSection } from "@/components/classes-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CoolStuffSection } from "@/components/cool-stuff-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <RegisterBar />
      <MainHeroBox />
      <VideoHighlightsSection />
      <section id="about">
        <AboutSection />
      </section>
      <section id="classes">
        <ClassesSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="cool-stuff">
        <CoolStuffSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
      <Toaster richColors /> {/* <-- HERE */}
    </main>
  );
}
