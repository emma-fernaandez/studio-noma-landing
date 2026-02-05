import { useState } from 'react';
import { motion } from 'framer-motion';
import logoSvg from '../../assets/logo.svg';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Chi Siamo', href: '#valores' },
    { name: 'Lavori', href: '#proyectos' },
    { name: 'Servizi', href: '#servicios' },
    { name: 'Contatti', href: '#contacto' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#100E0E]"
    >
      <div className="px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img
              src={logoSvg}
              alt="Studio Noma"
              className="h-4 md:h-5 w-auto"
            />
          </a>

          {/* Hamburger - Mobile */}
          <button
            className="md:hidden text-[#FFFBFB] text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className="relative text-[#FFFBFB] text-sm font-semibold transition-opacity duration-300 hover:opacity-60"
              >
                {link.name}
                {activeLink === link.name && (
                  <motion.div
                    layoutId="activeLink"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-[#FFE77A]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => { setActiveLink(link.name); setMenuOpen(false); }}
                className="text-[#FFFBFB] text-sm font-semibold transition-opacity duration-300 hover:opacity-60"
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
