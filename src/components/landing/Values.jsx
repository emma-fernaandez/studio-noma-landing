import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const values = [
  {
    italian: "ESSENZIALITÀ",
    spanish: "ESENCIALIDAD",
    description: "ELIMINAMOS LO SUPERFLUO PARA ENFOCARNOS EN LO QUE REALMENTE IMPORTA. CADA ELEMENTO TIENE UN PROPÓSITO."
  },
  {
    italian: "TEMPO",
    spanish: "TIEMPO",
    description: "RAPIDEZ SIN SACRIFICAR CALIDAD. PRECISIÓN APLICADA AL PROCESO. TU PROYECTO, CUANDO LO NECESITAS."
  },
  {
    italian: "AUTENTICITÀ",
    spanish: "AUTENTICIDAD",
    description: "CADA SITIO REFLEJA LA VERDADERA IDENTIDAD DEL CLIENTE. NADA DE MÁSCARAS NI FACHADAS GENÉRICAS."
  },
  {
    italian: "RISONANZA",
    spanish: "RESONANCIA",
    description: "PROYECTOS QUE NACEN DEL DIÁLOGO REAL, NO DE BRIEFINGS TÉCNICOS. ESCUCHAMOS ANTES DE CREAR."
  }
];

export default function Values() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="valores" className="py-32 px-12 bg-[#FFFBFB]/[0.02] scroll-mt-20">
      <div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#FFE77A]" />
            <span className="text-[#FFE77A]/70 text-xs tracking-[0.3em] uppercase">
              FILOSOFÍA
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl  text-[#FFFBFB] leading-[0.9]  uppercase">
            VALORES QUE GUÍAN
            <br />
            <span className="text-[#682DD6]/60">CADA DECISIÓN.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#FFFBFB]/10">
          {values.map((value, index) => (
            <motion.div
              key={value.italian}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-[#100E0E] p-10 group hover:bg-[#FFFBFB]/[0.02] transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#FFE77A] text-sm ">
                  0{index + 1}
                </span>
                <div className="h-px flex-1 bg-[#FFFBFB]/10" />
              </div>
              <h3 className="text-xl md:text-2xl text-[#FFFBFB]  mb-2  uppercase">
                {value.spanish}
              </h3>
              <span className="text-[#682DD6]/60 text-xs mb-4 block italic">
                {value.italian}
              </span>
              <p className="text-[#FFFBFB]/50 text-xs leading-relaxed uppercase tracking-wide">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}