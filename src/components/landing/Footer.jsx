import { ArrowUpRight } from 'lucide-react';
import logoSecondarySvg from '../../assets/logo-secondary.svg';

export default function Footer() {
  const navLinks = [
    { name: 'ABOUT', href: '#valores' },
    { name: 'WORKS', href: '#proyectos' },
    { name: 'SERVICES', href: '#servicios' },
    { name: 'CONTACT', href: '#contacto' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#100E0E] text-[#FFFBFB] py-20 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="mb-16">
          <img
            src={logoSecondarySvg}
            alt="Studio Noma"
            className="h-12 md:h-16 w-auto"
          />
        </div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* Left: CTA */}
          <div>
            <p className="text-2xl md:text-3xl mb-8 leading-tight max-w-md font-semibold">
              LISTOS PARA TRANSFORMAR TU VISIÓN EN REALIDAD DIGITAL
            </p>
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#FFE77A] transition-all duration-300 hover:gap-3"
            >
              EXPLORAR PROYECTOS
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          {/* Right: Navigation links */}
          <div className="flex flex-col md:flex-row md:justify-end gap-8 md:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold transition-opacity duration-300 hover:opacity-60"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={scrollToTop}
              className="text-sm font-semibold transition-opacity duration-300 hover:opacity-60 text-left md:text-center"
            >
              BACK TO TOP ↑
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#FFFBFB]/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs">
          <span className="text-[#FFFBFB]/60">© 2026 STUDIO NOMA. ALL RIGHTS RESERVED.</span>
          <span className="text-[#FFFBFB]/60">POWERED BY CLAUDE & STUDIO NOMA</span>
        </div>
      </div>
    </footer>
  );
}
