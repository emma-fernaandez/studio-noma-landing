import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FeaturedWorks() {
  const [isHovering, setIsHovering] = useState(false);

  const projects = [
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
    // Duplicate for seamless loop
    {
      name: 'SURROUND',
      tags: ['WEBFLOW', 'GSAP', 'PORTFOLIO'],
      color: '#682DD6',
    },
    {
      name: 'U SOCIAL',
      tags: ['WEBFLOW', 'GSAP', 'SAAS'],
      color: '#FFE77A',
    },
  ];

  return (
    <section className="py-32 px-12 relative scroll-mt-20 bg-[#100E0E]">
      {/* Header */}
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-6xl md:text-7xl text-[#FFFBFB]">
          FEATURED <span className="italic font-normal">WORKS</span>
        </h2>
        <a
          href="#contacto"
          className="text-[#FFFBFB] text-sm font-semibold transition-opacity duration-300 hover:opacity-60 flex items-center gap-2"
        >
          WORK WITH ME →
        </a>
      </div>

      {/* Projects Carousel */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <motion.div
          className="flex gap-8"
          animate={{
            x: isHovering ? '-50%' : '0%',
          }}
          transition={{
            duration: isHovering ? 20 : 0,
            ease: 'linear',
            repeat: isHovering ? Infinity : 0,
          }}
        >
          {projects.map((project, index) => (
            <div
              key={`${project.name}-${index}`}
              className="flex-shrink-0"
              style={{ width: '400px' }}
            >
              {/* Project Image Placeholder */}
              <div
                className="w-full rounded-sm mb-6 transition-transform duration-500 hover:scale-105"
                style={{
                  aspectRatio: '4/3',
                  backgroundColor: project.color,
                }}
              />

              {/* Project Name */}
              <h3 className="text-[#FFFBFB] text-2xl mb-4 font-bold">
                {project.name}
              </h3>

              {/* Tags */}
              <div className="flex gap-3">
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
        </motion.div>
      </div>
    </section>
  );
}
