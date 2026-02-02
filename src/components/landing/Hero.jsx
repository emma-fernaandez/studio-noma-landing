import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 lg:px-24 py-20 overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0 opacity-30">
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 rounded-full bg-[#FFE77A]" />
            <span className="text-[#FFFBFB]/40 text-xs tracking-[0.3em] uppercase">
              STUDIO NOMA
            </span>
          </div>
        </motion.div>

        <div className="overflow-hidden mb-20">
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-[7rem] xl:text-[9rem] font-black text-[#FFFBFB] leading-[0.85] tracking-tighter uppercase"
          >
            DONDE LAS
            <br />
            IDEAS TOMAN
            <br />
            <span className="text-[#FFE77A]">FORMA</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-2 gap-12 max-w-5xl"
        >
          <div>
            <p className="text-[#FFFBFB]/60 text-sm leading-relaxed uppercase tracking-wide">
              TRANSFORMAMOS IDEAS EN EXPERIENCIAS DIGITALES ÚNICAS. SIN PLANTILLAS. SIN GENÉRICOS. SOLO CÓDIGO QUE REPRESENTA TU IDENTIDAD.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-10 py-5 bg-[#FFE77A] text-[#1E1D1D] font-black hover:bg-[#FFFBFB] transition-colors duration-300"
            >
              <span className="text-sm tracking-wider uppercase">INICIAR PROYECTO</span>
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center px-10 py-5 border-2 border-[#FFFBFB]/20 text-[#FFFBFB] font-black hover:border-[#FFE77A] hover:text-[#FFE77A] transition-all duration-300"
            >
              <span className="text-sm tracking-wider uppercase">VER SERVICIOS</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}