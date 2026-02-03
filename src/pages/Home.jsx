import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import ValueProposition from '@/components/landing/ValueProposition';
import FeaturedWorks from '@/components/landing/FeaturedWorks';
import Clients from '@/components/landing/Clients';
import Team from '@/components/landing/Team';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#100E0E]">
      <Navbar />
      <Hero />
      <ValueProposition />
      <FeaturedWorks />
      <Clients />
      <Team />
      <Footer />
    </div>
  );
}