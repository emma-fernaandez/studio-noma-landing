import logoPrincipal from '../../assets/logo.svg';

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
    <footer className="bg-[#100E0E] text-[#FFFBFB] py-20 px-12">
      <div>
        {/* Logo Principal */}
        <div className="mb-16">
          <img
            src={logoPrincipal}
            alt="Studio Noma"
            className="w-auto"
            style={{ height: '10rem' }}
          />
        </div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* Left: CTA */}
          <div>
            <p className="max-w-md font-semibold" style={{ fontSize: '1.25rem', lineHeight: '1.75rem' }}>
              LISTOS PARA TRANSFORMAR TU VISIÓN EN REALIDAD DIGITAL
            </p>
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
