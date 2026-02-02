import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    number: "01",
    title: "WEB3 LANDING PAGE",
    description: "PLATAFORMA DE LANZAMIENTO PARA PROYECTO BLOCKCHAIN CON ANIMACIONES 3D Y CONEXIÓN A WALLET.",
    tags: ["REACT", "THREE.JS", "WEB3"],
    color: "#FFE77A",
    stats: [
      { label: "TIEMPO", value: "2 SEMANAS" },
      { label: "PÁGINAS", value: "1" },
      { label: "PERFORMANCE", value: "98/100" }
    ]
  },
  {
    number: "02",
    title: "CONSULTING APP",
    description: "DASHBOARD COMPLETO PARA GESTIÓN DE CLIENTES Y PROYECTOS CON MÉTRICAS EN TIEMPO REAL.",
    tags: ["NEXT.JS", "DASHBOARD", "API"],
    color: "#682DD6",
    stats: [
      { label: "TIEMPO", value: "6 SEMANAS" },
      { label: "PÁGINAS", value: "12" },
      { label: "USUARIOS", value: "500+" }
    ]
  },
  {
    number: "03",
    title: "FURNITURE E-COMMERCE",
    description: "TIENDA ONLINE MINIMALISTA CON VISTA 3D DE PRODUCTOS Y CHECKOUT OPTIMIZADO.",
    tags: ["SHOPIFY", "3D", "E-COMMERCE"],
    color: "#FF4937",
    stats: [
      { label: "TIEMPO", value: "4 SEMANAS" },
      { label: "PRODUCTOS", value: "200+" },
      { label: "CONVERSIÓN", value: "+35%" }
    ]
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-7xl mx-auto">
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
              PROYECTOS DESTACADOS
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl  text-[#FFFBFB] leading-[0.9]  uppercase">
            CASOS DE
            <br />
            <span className="text-[#682DD6]/60">ÉXITO</span>
          </h2>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="relative group"
            >
              {/* Project number */}
              <div className="absolute -left-4 md:-left-12 top-0 text-8xl md:text-9xl text-[#FFFBFB]/5 leading-none font-number">
                {project.number}
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Project info */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[#FFE77A] text-sm font-number">
                      {project.number}
                    </span>
                    <div className="h-px w-12 bg-[#FFE77A]" />
                  </div>
                  
                  <h3 className="text-2xl md:text-4xl  text-[#FFFBFB] mb-6  leading-tight uppercase">
                    {project.title}
                  </h3>
                  
                  <p className="text-[#FFFBFB] text-sm leading-relaxed mb-8 uppercase tracking-wide">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-[#FFFBFB]/5 text-[#FFFBFB] text-xs  tracking-wider uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 mb-8 pb-8 border-b border-[#FFFBFB]/10">
                    {project.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-xs text-[#FFE77A]/70 mb-2 uppercase tracking-wider">
                          {stat.label}
                        </div>
                        <div className="text-xl text-[#FFFBFB] font-number">
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="inline-flex items-center gap-3 text-[#FFE77A] text-sm  hover:gap-5 transition-all duration-300 uppercase tracking-wider">
                    VER PROYECTO
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>

                {/* Project visual */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div 
                    className="aspect-[4/3] border-2 border-[#FFFBFB]/10 relative overflow-hidden hover:border-[#FFE77A]/30 transition-all duration-500"
                    style={{
                      background: '#100E0E',
                    }}
                  >
                    {/* Mockup placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center p-12">
                      <div 
                        className="w-full h-full border border-[#FFFBFB]/20"
                        style={{
                          background: `linear-gradient(180deg, ${project.color}10, transparent)`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}