import { useState } from 'react';
import laterraza from '../../assets/mokups/laterraza.jpg';
import dance from '../../assets/mokups/dance.jpg';
import HLC from '../../assets/mokups/HLC.jpg';
import bdp from '../../assets/mokups/bdp.jpg';
import faberlab from '../../assets/mokups/faberlab.jpg';
import beanywood from '../../assets/mokups/beanywood.jpg';
import sugarpapi from '../../assets/mokups/sugarpapi.jpg';

export default function FeaturedWorks() {
  const [isHovered, setIsHovered] = useState(false);

  const baseProjects = [
    {
      name: 'LA TERRAZA',
      tags: ['WEBFLOW', 'GSAP', 'PORTFOLIO'],
      image: laterraza,
    },
    {
      name: 'DANCE',
      tags: ['WEBFLOW', 'GSAP', 'CREATIVE'],
      image: dance,
    },
    {
      name: 'HLC',
      tags: ['WEBFLOW', 'GSAP', 'CORPORATE'],
      image: HLC,
    },
    {
      name: 'BDP',
      tags: ['WEBFLOW', 'GSAP', 'PORTFOLIO'],
      image: bdp,
    },
    {
      name: 'FABERLAB',
      tags: ['WEBFLOW', 'GSAP', 'TECH'],
      image: faberlab,
    },
    {
      name: 'BEANYWOOD',
      tags: ['WEBFLOW', 'GSAP', 'E-COMMERCE'],
      image: beanywood,
    },
    {
      name: 'SUGARPAPI',
      tags: ['WEBFLOW', 'GSAP', 'CREATIVE'],
      image: sugarpapi,
    },
  ];

  // Triple projects for seamless loop
  const projects = [...baseProjects, ...baseProjects, ...baseProjects];

  return (
    <section className="py-32 px-12 relative scroll-mt-20 bg-[#100E0E]">
      {/* Header */}
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-6xl md:text-7xl text-[#FFFBFB]">
          FEATURED WORKS
        </h2>
        <a
          href="#contacto"
          className="text-[#FFFBFB] text-sm font-semibold transition-opacity duration-300 hover:opacity-60 flex items-center gap-2"
        >
          WORK WITH ME ↘
        </a>
      </div>

      {/* Projects Row */}
      <div className="relative overflow-hidden">
        <div
          className="flex gap-8 md:gap-12 animate-scroll-projects"
          style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {projects.map((project, index) => (
            <div key={`${project.name}-${index}`} className="flex-shrink-0" style={{ width: '450px' }}>
              {/* Project Image */}
              <div className="w-full rounded-sm mb-6 overflow-hidden" style={{ aspectRatio: '1/1' }}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Project Name */}
              <h3 className="text-[#FFFBFB] text-2xl mb-4 font-bold">
                {project.name}
              </h3>

              {/* Tags */}
              <div className="flex gap-3 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 border border-[#FFFBFB] rounded-full text-[#FFFBFB] text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
