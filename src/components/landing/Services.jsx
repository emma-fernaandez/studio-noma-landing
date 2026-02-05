import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    level: "LIVELLO 1",
    title: "LANDING / ONE-PAGE",
    description: "SITI A PAGINA SINGOLA OTTIMIZZATI. VELOCI, EFFICACI, PROFESSIONALI. IDEALE PER LANCI, PRODOTTI SPECIFICI O PRESENZA INIZIALE.",
    price: "800€ - 2.500€",
    time: "1-2 SETTIMANE",
    features: ["DESIGN RESPONSIVE", "SEO BASE", "OTTIMIZZAZIONE VELOCITÀ", "MODULO DI CONTATTO"]
  },
  {
    level: "LIVELLO 2",
    title: "SITO COMPLETO",
    description: "SITI MULTI-PAGINA CON ARCHITETTURA COMPLETA E FUNZIONALITÀ AVANZATE. PER AZIENDE CHE NECESSITANO UNA PRESENZA DIGITALE SOLIDA.",
    price: "3.000€ - 10.000€+",
    time: "3-8 SETTIMANE",
    features: ["PAGINE MULTIPLE", "CMS INTEGRATO", "ANIMAZIONI PERSONALIZZATE", "INTEGRAZIONI AVANZATE"],
    featured: true
  },
  {
    level: "LIVELLO 3",
    title: "MANUTENZIONE",
    description: "SUPPORTO CONTINUO, AGGIORNAMENTI E OTTIMIZZAZIONI. IL TUO SITO SEMPRE AGGIORNATO, SICURO E IN EVOLUZIONE.",
    price: "50€ - 500€/MESE",
    time: "CONTINUO",
    features: ["AGGIORNAMENTI DI SICUREZZA", "BACKUP REGOLARI", "SUPPORTO PRIORITARIO", "MIGLIORAMENTI INCREMENTALI"]
  }
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-32 px-12 relative bg-[#FFFBFB]/[0.02] scroll-mt-20">
      <div>
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
              SERVIZI
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl text-[#FFFBFB] leading-[0.9]">
            I NOSTRI
            <br />
            <span className="text-[#682DD6]/60">SERVIZI</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-[#FFFBFB]/10">
          {services.map((service, index) => (
            <motion.div
              key={service.level}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`relative p-10 transition-all duration-500 group bg-[#100E0E] hover:bg-[#FFFBFB]/[0.02] ${
                service.featured ? 'bg-[#FFE77A]/[0.03]' : ''
              }`}
            >
              {service.featured && (
                <div className="absolute top-6 right-6">
                  <div className="w-3 h-3 rounded-full bg-[#FFE77A]" />
                </div>
              )}

              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#FFE77A] text-sm ">
                  {service.level.split(' ')[1]}
                </span>
                <div className="h-px flex-1 bg-[#FFFBFB]/10" />
              </div>
              
              <h3 className="text-xl text-[#FFFBFB]  mb-4 tracking-tight uppercase">
                {service.title}
              </h3>
              
              <p className="text-[#FFFBFB]/50 text-xs leading-relaxed mb-8 uppercase tracking-wide">
                {service.description}
              </p>

              <div className="mb-8 pb-8 border-b border-[#FFFBFB]/10">
                <div className="text-3xl text-[#FFE77A] mb-2 font-number">
                  {service.price}
                </div>
                <div className="text-[#682DD6]/60 text-xs uppercase tracking-wider font-number">
                  {service.time}
                </div>
              </div>

              <ul className="space-y-3 mb-10">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#FFFBFB] text-xs uppercase tracking-wide">
                    <span className="text-[#FFE77A] mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-xs  transition-all duration-300 group-hover:gap-4 text-[#FFE77A] tracking-wider uppercase"
              >
                RICHIEDI INFO ↘
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}