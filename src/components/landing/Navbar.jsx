import { useState } from 'react';
import { motion } from 'framer-motion';
import logoSvg from '../../assets/logo.svg';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('');

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
      <div className="px-12">
        <div className="grid grid-cols-2 items-center h-20">
          {/* Logo - Left side (smaller) */}
          <a href="#" className="flex-shrink-0">
            <img
              src={logoSvg}
              alt="Studio Noma"
              className="h-5 w-auto"
            />
          </a>

          {/* Navigation Links - Right side with even spacing */}
          <div className="flex items-center justify-between">
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
      </div>
    </motion.nav>
  );
}
