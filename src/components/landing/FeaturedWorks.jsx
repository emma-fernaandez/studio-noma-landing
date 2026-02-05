import { useState, useEffect } from 'react';
import laterraza from '../../assets/mokups/laterraza.jpg';
import dance from '../../assets/mokups/dance.jpg';
import HLC from '../../assets/mokups/HLC.jpg';
import bdp from '../../assets/mokups/bdp.jpg';
import faberlab from '../../assets/mokups/faberlab.jpg';
import beanywood from '../../assets/mokups/beanywood.jpg';
import sugarpapi from '../../assets/mokups/sugarpapi.jpg';

export default function FeaturedWorks() {
  const [isHovered, setIsHovered] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const baseProjects = [
    {
      name: 'LATERRAZA',
      tags: ['CODE', 'RISTORANTI', 'MENU'],
      image: laterraza,
      url: 'https://la-terraza.netlify.app/',
    },
    {
      name: 'DANCE',
      tags: ['WEBFLOW', 'CREATIVE', 'MOVILITY'],
      image: dance,
      url: 'https://danceco-portfolio.webflow.io/',
    },
    {
      name: 'HANNIBAL LAGUNA COLLECTION',
      tags: ['SHOPIFY', 'ECOMMERCE', 'MODA'],
      image: HLC,
      url: 'https://hanniballagunacollection.es/',
    },
    {
      name: 'BDP BURGER',
      tags: ['WEBFLOW', 'RISTORANTI', 'MENU'],
      image: bdp,
      url: 'https://www.bdp-burger.com/',
    },
    {
      name: 'FABERLAB',
      tags: ['CODE', 'CORPORATE', 'LAB'],
      image: faberlab,
      url: 'https://faberlabstudio.com/',
    },
    {
      name: 'BEANYWOOD CAFE',
      tags: ['SHOPIFY', 'ECOMMERCE', 'CAFE'],
      image: beanywood,
      url: 'https://beanywoodcafe.com/',
    },
    {
      name: 'SUGARPAPI',
      tags: ['SHOPIFY', 'ECOMMERCE', 'CREATIVE'],
      image: sugarpapi,
      url: 'https://sugarpapi.es/',
    },
  ];

  // Duplicate projects for seamless loop
  const projects = [...baseProjects, ...baseProjects];

  return (
    <section id="lavori" className="py-16 md:py-32 px-6 md:px-12 relative scroll-mt-20 bg-[#100E0E]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 md:mb-16">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] text-[#FFFBFB]">
          LAVORI IN EVIDENZA
        </h2>
        <a
          href="#contacto"
          className="text-[#FFFBFB] text-sm font-semibold transition-opacity duration-300 hover:opacity-60 flex items-center gap-2 flex-shrink-0"
        >
          LAVORA CON NOI ↘
        </a>
      </div>

      {/* Projects Row */}
      <div className="relative overflow-hidden">
        <div
          className="flex gap-8 md:gap-12 animate-scroll-projects"
          style={{
            animationPlayState: (isHovered || !isTabVisible) ? 'paused' : 'running',
            willChange: 'transform'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {projects.map((project, index) => (
            <div key={`${project.name}-${index}`} className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[450px]">
              {/* Project Image */}
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <div className="w-full mb-6 overflow-hidden" style={{ aspectRatio: '4.1/3.9', borderRadius: '5px' }}>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </a>

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
