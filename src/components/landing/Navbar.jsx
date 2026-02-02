import { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from '@/assets/logo.svg';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  const navLinks = [
    { name: 'ABOUT', href: '#valores' },
    { name: 'WORKS', href: '#proyectos' },
    { name: 'SERVICES', href: '#servicios' },
    { name: 'CONTACT', href: '#contacto' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#100E0E]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img
              src={Logo}
              alt="Studio Noma"
              className="h-5 md:h-6 w-auto"
            />
          </a>

          {/* Navigation Links */}
          <div className="flex items-center gap-8 md:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className="relative text-[#FFFBFB] text-xs md:text-sm tracking-wide transition-opacity duration-300 hover:opacity-60"
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
