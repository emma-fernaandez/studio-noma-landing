import React from 'react';

export default function Footer() {
  return (
    <footer className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-[#FFE77A]" />
              <span className="text-[#FFFBFB]  text-lg  uppercase">
                STUDIO NOMA
              </span>
            </div>
            <span className="text-[#FFFBFB]/40 text-xs uppercase tracking-wide">
              DISEÑO & DESARROLLO WEB
            </span>
          </div>

          <div className="flex items-center gap-8">
            <a 
              href="#servicios" 
              className="text-[#FFFBFB]/40 text-xs hover:text-[#FFE77A] transition-colors duration-300 uppercase tracking-wider "
            >
              SERVICIOS
            </a>
            <a 
              href="#contacto" 
              className="text-[#FFFBFB]/40 text-xs hover:text-[#FFE77A] transition-colors duration-300 uppercase tracking-wider "
            >
              CONTACTO
            </a>
          </div>
        </div>

        <div className="h-px bg-[#FFFBFB]/10 mb-8" />

        <div className="flex justify-between items-center">
          <span className="text-[#FFFBFB]/30 text-xs uppercase tracking-wider">
            © {new Date().getFullYear()} STUDIO NOMA
          </span>
          <span className="text-[#FFFBFB]/30 text-xs uppercase tracking-wider">
            MADE WITH CODE
          </span>
        </div>
      </div>
    </footer>
  );
}