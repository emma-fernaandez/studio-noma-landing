import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    number: "01",
    title: "IDENTIDAD PROPIA",
    description: "CADA PROYECTO REFLEJA LA ESENCIA ÚNICA DE TU MARCA. NADA DE PLANTILLAS GENÉRICAS."
  },
  {
    number: "02",
    title: "PERFORMANCE REAL",
    description: "SITIOS RÁPIDOS QUE NO SACRIFICAN ESTÉTICA. CÓDIGO LIMPIO, RESULTADOS MEDIBLES."
  },
  {
    number: "03",
    title: "CONVERSIÓN",
    description: "DISEÑAMOS PARA QUE TUS VISITANTES SE CONVIERTAN EN CLIENTES. CADA PIXEL TIENE PROPÓSITO."
  },
  {
    number: "04",
    title: "EVOLUCIÓN",
    description: "EXPERIENCIAS WEB QUE PERDURAN Y CRECEN CONTIGO. PENSAMOS A LARGO PLAZO."
  }
];

export default function ValueProposition() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#FFE77A]" />
            <span className="text-[#FFE77A]/70 text-xs tracking-[0.3em] uppercase">
              POR QUÉ NOSOTROS
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl  text-[#FFFBFB] leading-[0.9]  max-w-4xl uppercase">
            NO HACEMOS SITIOS WEB.
            <br />
            <span className="text-[#682DD6]/60">TRANSFORMAMOS PRESENCIAS DIGITALES.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-[#FFFBFB]/10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-[#100E0E] p-10 hover:bg-[#FFFBFB]/[0.02] transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#FFE77A] text-lg ">
                  {feature.number}
                </span>
                <div className="h-px flex-1 bg-[#FFFBFB]/10" />
              </div>
              <h3 className="text-xl md:text-2xl text-[#FFFBFB]  mb-4 ">
                {feature.title}
              </h3>
              <p className="text-[#FFFBFB]/50 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}