import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import ValueProposition from '@/components/landing/ValueProposition';
import Projects from '@/components/landing/Projects';
import Services from '@/components/landing/Services';
import Values from '@/components/landing/Values';
import Team from '@/components/landing/Team';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#100E0E]">
      <Navbar />
      <Hero />
      <ValueProposition />
      <Projects />
      <Services />
      <Values />
      <Team />
      <Footer />
    </div>
  );
}