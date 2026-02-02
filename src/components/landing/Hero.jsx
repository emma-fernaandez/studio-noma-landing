import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 lg:px-24 pt-32 pb-20 overflow-hidden bg-[#100E0E]">
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

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Hero Title */}
        <div className="overflow-hidden mb-16">
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-[7rem] xl:text-[9rem] text-[#FFFBFB] leading-[0.85] mb-12"
          >
            DONDE LAS
            <br />
            IDEAS TOMAN
            <br />
            <span className="text-[#FFE77A]">FORMA</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[#FFFBFB]/60 text-base md:text-lg max-w-2xl leading-relaxed tracking-wide"
          >
            TRANSFORMAMOS IDEAS EN EXPERIENCIAS DIGITALES ÚNICAS. SIN PLANTILLAS. SIN GENÉRICOS. SOLO CÓDIGO QUE REPRESENTA TU IDENTIDAD.
          </motion.p>
        </div>

        {/* Simple Text Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-8 sm:gap-16"
        >
          <a
            href="#proyectos"
            className="group inline-flex items-center gap-2 text-[#FFFBFB] text-sm md:text-base tracking-wide transition-all duration-300 hover:gap-4"
          >
            NUESTROS PROYECTOS
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#servicios"
            className="group inline-flex items-center gap-2 text-[#FFFBFB] text-sm md:text-base tracking-wide transition-all duration-300 hover:gap-4"
          >
            EXPLORAR SERVICIOS
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}