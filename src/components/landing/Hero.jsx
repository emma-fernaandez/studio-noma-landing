import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section aria-label="Introduzione Studio NOMA" className="h-[82svh] md:h-screen flex flex-col justify-between relative px-6 md:px-12 pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden bg-[#100E0E]">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0 opacity-30 mix-blend-screen pointer-events-none">
        <iframe
          src='https://my.spline.design/wavesanimation-be40o0F1JYDMtxMJW3gVOuxp/'
          width='100%'
          height='100%'
          title="Animazione 3D decorativa di sfondo"
          aria-hidden="true"
          className="w-full h-full border-0"
          style={{ border: 0, pointerEvents: 'none' }}
        />
      </div>

      {/* Título - Parte superior derecha */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2">
        <div></div>
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#FFFBFB] leading-[0.9] text-[3rem] md:text-6xl lg:text-[5.5rem]"
        >
          DOVE LE
          <br />
          IDEE PRENDONO
          <br />
          <span className="text-[#FFE77A]">FORMA</span>
        </motion.h1>
      </div>

      {/* Parte inferior: Subtítulo izquierda, Enlaces derecha */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2">
        {/* Subtítulo - Abajo izquierda */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#FFFBFB] max-w-md font-semibold text-sm sm:text-base md:text-xl"
          style={{ lineHeight: '1.75rem' }}
        >
          Trasformiamo idee in esperienze digitali uniche. Niente template. Niente generico. Solo codice che rappresenta la tua identità.
        </motion.p>

        {/* Enlaces - Abajo derecha */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-end mt-6 md:mt-0"
        >
          <a
            href="#lavori"
            className="group inline-flex items-center gap-2 text-[#FFFBFB] text-sm font-semibold transition-all duration-300 hover:gap-3"
          >
            <span aria-hidden="true">I Nostri Progetti ↘</span>
            <span className="sr-only">Vai ai nostri progetti in evidenza</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}