import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacto" className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#682DD6]/10 via-[#FFE77A]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-[7rem] xl:text-[9rem] text-[#FFFBFB] leading-[0.85] mb-16">
            TRABAJA
            <br />
            <span className="text-[#FFE77A]">
              CON NOSOTROS
            </span>
          </h2>

          <p className="text-[#FFFBFB]/60 text-sm max-w-xl mx-auto mb-12 leading-relaxed">
            ¿TIENES UN PROYECTO EN MENTE? HABLEMOS. 
            SIN COMPROMISO, SIN TECNICISMOS. SOLO RESULTADOS.
          </p>

          <div className="flex flex-col items-center gap-6">
            <a
              href="mailto:hola@studionoma.com"
              className="group inline-flex items-center gap-4 px-12 py-6 bg-[#FFE77A] text-[#1E1D1D] hover:bg-[#FFFBFB] transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">
                HOLA@STUDIONOMA.COM
              </span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            
            <div className="flex items-center gap-2 text-[#FFFBFB]/30 text-xs uppercase tracking-wider font-number">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FFE77A]" />
              RESPUESTA EN 24H
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-20 h-px bg-[#FFFBFB]/10"
        />
      </div>
    </section>
  );
}