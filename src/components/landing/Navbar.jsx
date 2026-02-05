import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoSvg from '../../assets/logo.svg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Valori', href: '#valori' },
    { name: 'Progetti', href: '#progetti' },
    { name: 'Chi Siamo', href: '#equipo' },
    { name: 'Contatti', href: 'mailto:hello@nomastudiodesign.com' },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-[60] bg-[#100E0E]"
      >
        <div className="px-6 md:px-12">
          <div className="flex md:grid md:grid-cols-2 items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="/" aria-label="Studio NOMA - Home" className="flex-shrink-0 relative z-[60]" style={{ lineHeight: '1.1rem' }}>
              <img
                src={logoSvg}
                alt="Studio NOMA"
                className="h-4 md:h-5 w-auto"
              />
            </a>

            {/* Hamburger - Mobile */}
            <button
              className="md:hidden text-[#FFFBFB] relative z-[60] p-0 m-0 leading-none"
              style={{ fontSize: '2rem' }}
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
        </div>
      </motion.nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] bg-[#100E0E] md:hidden flex flex-col justify-end px-6 pb-16"
            role="navigation"
            aria-label="Menu mobile"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  className="text-[#FFFBFB] text-4xl font-bold uppercase tracking-tight transition-opacity duration-300 hover:opacity-60"
                  style={{ textDecoration: 'none' }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
