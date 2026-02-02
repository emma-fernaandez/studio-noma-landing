import React from 'react';
import Hero from '@/components/landing/Hero';
import ValueProposition from '@/components/landing/ValueProposition';
import Projects from '@/components/landing/Projects';
import Services from '@/components/landing/Services';
import Values from '@/components/landing/Values';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#100E0E]">
      <Hero />
      <ValueProposition />
      <Projects />
      <Services />
      <Values />
      <Contact />
      <Footer />
    </div>
  );
}