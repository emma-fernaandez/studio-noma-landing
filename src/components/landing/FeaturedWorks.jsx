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
      name: 'LATERRAZA',
      tags: ['WEBFLOW', 'GSAP', 'PORTFOLIO'],
      image: laterraza,
    },
    {
      name: 'DANCE',
      tags: ['WEBFLOW', 'GSAP', 'CREATIVE'],
      image: dance,
    },
    {
      name: 'HANNIBAL LAGUNA COLLECTION',
      tags: ['WEBFLOW', 'GSAP', 'CORPORATE'],
      image: HLC,
    },
    {
      name: 'BDP BURGER',
      tags: ['WEBFLOW', 'GSAP', 'PORTFOLIO'],
      image: bdp,
    },
    {
      name: 'FABERLAB',
      tags: ['WEBFLOW', 'GSAP', 'TECH'],
      image: faberlab,
    },
    {
      name: 'BEANYWOOD CAFE',
      tags: ['WEBFLOW', 'GSAP', 'E-COMMERCE'],
      image: beanywood,
    },
    {
      name: 'SUGARPAPI',
      tags: ['WEBFLOW', 'GSAP', 'CREATIVE'],
      image: sugarpapi,
    },
  ];

  // Duplicate projects for seamless loop
  const projects = [...baseProjects, ...baseProjects];

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
              <div className="w-full mb-6 overflow-hidden" style={{ aspectRatio: '4.1/3.9', borderRadius: '5px' }}>
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
                    className="rounded-full text-[#FFFBFB] text-base font-semibold"
                    style={{
                      paddingLeft: '1.5rem',
                      paddingRight: '1.5rem',
                      paddingTop: '0.5rem',
                      paddingBottom: '0.5rem',
                      borderWidth: '0.5px',
                      borderColor: '#FFFBFB',
                      borderStyle: 'solid'
                    }}
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
