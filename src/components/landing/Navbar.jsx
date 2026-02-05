import { useState } from 'react';
import { motion } from 'framer-motion';
import logoSvg from '../../assets/logo.svg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Chi Siamo', href: '#equipo' },
    { name: 'Progetti', href: '#progetti' },
    { name: 'Valori', href: '#valori' },
    { name: 'Contatti', href: 'mailto:hello@nomastudiodesign.com' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#100E0E]"
    >
      <div className="px-6 md:px-12">
        <div className="flex md:grid md:grid-cols-2 items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" aria-label="Studio NOMA - Home" className="flex-shrink-0">
            <img
              src={logoSvg}
              alt="Studio NOMA"
              className="h-4 md:h-5 w-auto"
            />
          </a>

          {/* Hamburger - Mobile */}
          <button
            className="md:hidden text-[#FFFBFB] text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center justify-between">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {}}
                className="relative text-[#FFFBFB] text-sm font-semibold transition-opacity duration-300 hover:opacity-60 no-underline"
                style={{ textDecoration: 'none' }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-6 flex flex-col gap-4"
            role="navigation"
            aria-label="Menu mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#FFFBFB] text-sm font-semibold transition-opacity duration-300 hover:opacity-60 no-underline"
                style={{ textDecoration: 'none' }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
