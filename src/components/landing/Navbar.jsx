import { useState } from 'react';
import { motion } from 'framer-motion';
import logoSvg from '../../assets/logo.svg';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  const navLinks = [
    { name: 'About', href: '#valores' },
    { name: 'Works', href: '#proyectos' },
    { name: 'Services', href: '#servicios' },
    { name: 'Contact', href: '#contacto' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#100E0E]"
    >
      <div className="px-8 md:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img
              src={logoSvg}
              alt="Studio Noma"
              className="h-5 w-auto"
            />
          </a>

          {/* Navigation Links */}
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(link.name);
                  const element = document.querySelector(link.href);
                  if (element) {
                    const navbarHeight = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
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
