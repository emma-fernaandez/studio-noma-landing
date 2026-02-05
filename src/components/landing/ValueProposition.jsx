import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    number: "01",
    title: "INIZIAMO CON UNA SCOPERTA PROFONDA",
    description: "Ogni progetto inizia con un dialogo reale. Capiamo chi sei, cosa fai e quali risultati vuoi ottenere prima di scrivere una sola riga di codice."
  },
  {
    number: "02",
    title: "DIAMO FORMA AL LINGUAGGIO VISIVO",
    description: "Non disegniamo per fare bella figura. Disegniamo per chiarire. Tutto ciò che vedi esiste per eliminare dubbi, facilitare decisioni e far sentire il visitatore nel posto giusto."
  },
  {
    number: "03",
    title: "DOVE IL MOVIMENTO INCONTRA L'ESPRESSIONE",
    description: "Crediamo che l'esperienza digitale debba sentirsi naturale, quasi invisibile, lasciando spazio a ciò che conta davvero. Ogni dettaglio comunica. Ogni movimento ha un senso."
  },
  {
    number: "04",
    title: "CONSEGNIAMO CON PRECISIONE E CURA",
    description: "Non corriamo: eliminiamo il superfluo. Il risultato è velocità naturale, qualità preservata e tempi che rispettano il tuo business."
  }
];

export default function ValueProposition() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="valori" aria-label="I nostri valori e il processo di design" className="py-16 md:py-32 px-6 md:px-12 relative scroll-mt-20">
      <div>
        {/* Título centrado */}
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-[#FFFBFB] leading-[1.1] text-center mb-12 md:mb-20 max-w-5xl mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-[5.5rem]"
        >
          NON È SOLO UN SITO WEB {' '}
          <span className="text-[#FF4937]">CREAMO UNA IDENTITÀ DIGITALE</span>
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