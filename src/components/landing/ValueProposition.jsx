import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    number: "01",
    title: "COMENZAMOS CON DESCUBRIMIENTO PROFUNDO",
    description: "Nuestro equipo recopila información que se convierte en la base para un diseño significativo y relevante. Esta fase establece la dirección para una identidad fuerte y auténtica."
  },
  {
    number: "02",
    title: "DAMOS FORMA AL LENGUAJE VISUAL",
    description: "Nuestros diseñadores y directores de arte trabajan juntos para crear logos, elementos de marca y sistemas visuales. Desde tipografía hasta paletas de colores, cada elemento se construye para reflejar la personalidad de tu marca."
  },
  {
    number: "03",
    title: "DONDE EL MOVIMIENTO SE ENCUENTRA CON LA EXPRESIÓN",
    description: "Para hacer que tu marca cobre vida, los diseñadores de movimiento e ilustradores crean activos visuales que agregan profundidad y carácter. Las animaciones, íconos e ilustraciones se adaptan para apoyar la narrativa y el compromiso."
  },
  {
    number: "04",
    title: "ENTREGAMOS CON PRECISIÓN Y CUIDADO",
    description: "Los gestores de proyecto aseguran una colaboración fluida, ciclos de retroalimentación oportunos y comunicación clara. Recibirás pautas de marca completas y activos listos para usar para lanzar con confianza."
  }
];

export default function ValueProposition() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-8 md:px-16 relative">
      <div className="max-w-7xl mx-auto">
        {/* Título centrado */}
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-[#FFFBFB] leading-[1.1] text-center mb-20 max-w-5xl mx-auto"
          style={{ fontSize: '5.5rem' }}
        >
          DISEÑADORES APASIONADOS APORTAN IDEAS INNOVADORAS Y FRESCAS
        </motion.h2>

        {/* Grid 2x2 */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="space-y-4"
            >
              {/* Número y título */}
              <div className="flex items-start gap-4">
                <span className="text-[#FFFBFB]/40 text-sm font-number">
                  ({feature.number})
                </span>
                <h3 className="text-[#FFFBFB] text-base md:text-lg font-bold uppercase tracking-tight">
                  {feature.title}
                </h3>
              </div>

              {/* Descripción */}
              <p className="text-[#FFFBFB]/60 text-sm leading-relaxed pl-12 font-semibold">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}