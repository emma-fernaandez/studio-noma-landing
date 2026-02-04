import { useState } from 'react';

export default function FeaturedWorks() {
  const [isHovered, setIsHovered] = useState(false);

  const baseProjects = [
    {
      name: 'SURROUND',
      tags: ['WEBFLOW', 'GSAP', 'PORTFOLIO'],
      color: '#682DD6', // Purple from palette
    },
    {
      name: 'U SOCIAL',
      tags: ['WEBFLOW', 'GSAP', 'SAAS'],
      color: '#FFE77A', // Yellow from palette
    },
    {
      name: 'INFLUINT',
      tags: ['WEBFLOW', 'GSAP', 'SPLINE'],
      color: '#682DD6', // Purple from palette
    },
    {
      name: 'PILLAR: OMS',
      tags: ['WEBFLOW', 'GSAP', 'SAAS'],
      color: '#FFE77A', // Yellow from palette
    },
  ];

  // Triple projects for seamless loop
  const projects = [...baseProjects, ...baseProjects, ...baseProjects];

  return (
    <section className="py-48 px-12 relative scroll-mt-20 bg-[#D9D9D9]">
      {/* Header */}
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-6xl md:text-7xl text-[#100E0E]">
          FEATURED WORKS
        </h2>
        <a
          href="#contacto"
          className="text-[#100E0E] text-sm font-semibold transition-opacity duration-300 hover:opacity-60 flex items-center gap-2"
        >
          WORK WITH ME ↗
        </a>
      </div>

      {/* Projects Row */}
      <div className="relative overflow-hidden">
        <div
          className={`flex gap-8 md:gap-12 ${!isHovered ? 'animate-scroll-projects' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {projects.map((project, index) => (
            <div key={`${project.name}-${index}`} className="flex-shrink-0" style={{ width: '450px' }}>
              {/* Project Image Placeholder */}
              <div
                className="w-full rounded-sm mb-6 transition-transform duration-500 hover:scale-105"
                style={{
                  aspectRatio: '1/1',
                  backgroundColor: project.color,
                }}
              />

              {/* Project Name */}
              <h3 className="text-[#100E0E] text-2xl mb-4 font-bold">
                {project.name}
              </h3>

              {/* Tags */}
              <div className="flex gap-3 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 border border-[#100E0E] rounded-full text-[#100E0E] text-xs font-semibold"
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
