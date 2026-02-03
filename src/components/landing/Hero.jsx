import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between relative px-12 pt-32 pb-16 overflow-hidden bg-[#100E0E]">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0 opacity-30 mix-blend-screen">
        <iframe
          src='https://my.spline.design/claritystream-gHPaerA2pIP5nZargemLMtPJ/'
          width='100%'
          height='100%'
          title="Spline 3D Background"
          className="w-full h-full border-0"
          style={{ border: 0 }}
        />
      </div>

      {/* Título - Parte superior derecha */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div></div>
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#FFFBFB] leading-[0.9]"
          style={{ fontSize: '5.5rem' }}
        >
          DONDE LAS
          <br />
          IDEAS TOMAN
          <br />
          <span className="text-[#FFE77A]">FORMA</span>
        </motion.h1>
      </div>

      {/* Parte inferior: Subtítulo izquierda, Enlaces derecha */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Subtítulo - Abajo izquierda */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#FFFBFB]/60 max-w-md font-semibold"
          style={{ fontSize: '1.25rem', lineHeight: '1.75rem' }}
        >
          Transformamos ideas en experiencias digitales únicas. Sin plantillas. Sin genéricos. Solo código que representa tu identidad.
        </motion.p>

        {/* Enlaces - Abajo derecha */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-between gap-6"
        >
          <a
            href="#proyectos"
            className="group inline-flex items-center gap-2 text-[#FFFBFB] text-sm font-semibold transition-all duration-300 hover:gap-3"
          >
            Nuestros Proyectos
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#servicios"
            className="group inline-flex items-center gap-2 text-[#FFFBFB] text-sm font-semibold transition-all duration-300 hover:gap-3"
          >
            Explorar Servicios
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}