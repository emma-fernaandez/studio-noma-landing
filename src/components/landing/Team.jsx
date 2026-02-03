import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import emmaPortrait from '../../assets/emma-portrait.png';
import nicolePortrait from '../../assets/nicole-portrait.png';
import chiaraPortrait from '../../assets/chiara-portrait.png';
import nicoleAnimation from '../../assets/nicole-animation.mp4';
import chiaraAnimation from '../../assets/chiara-animation.mp4';

export default function Team() {
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef({});

  const team = [
    {
      name: 'EMMA',
      role: 'LEAD DEVELOPER',
      image: emmaPortrait,
      video: null,
    },
    {
      name: 'NICOLE',
      role: 'CREATIVE DIRECTOR',
      image: nicolePortrait,
      video: nicoleAnimation,
    },
    {
      name: 'CHIARA',
      role: 'ACCOUNT MANAGER',
      image: chiaraPortrait,
      video: chiaraAnimation,
    },
  ];

  const handleMouseEnter = (memberName) => {
    const member = team.find(m => m.name === memberName);
    if (member.video && videoRefs.current[memberName]) {
      setPlayingVideo(memberName);
      videoRefs.current[memberName].currentTime = 0;
      videoRefs.current[memberName].play();
    }
  };

  const handleVideoEnd = (memberName) => {
    setPlayingVideo(null);
  };

  return (
    <section id="equipo" className="py-32 px-12 relative scroll-mt-20">
      <div>
        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              {/* Card */}
              <div
                className="bg-[#FFFBFB] rounded-sm overflow-hidden transition-all duration-300"
                onMouseEnter={() => handleMouseEnter(member.name)}
              >
                {/* Image Container with overlay */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '1/1.3' }}>
                  {/* White margin top */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-[#FFFBFB] z-10"></div>

                  {/* Static Image */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover object-top transition-opacity duration-300 ${
                      playingVideo === member.name ? 'opacity-0' : 'opacity-100'
                    }`}
                  />

                  {/* Video - shown on hover if available */}
                  {member.video && (
                    <video
                      ref={(el) => (videoRefs.current[member.name] = el)}
                      className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 ${
                        playingVideo === member.name ? 'opacity-100' : 'opacity-0'
                      }`}
                      onEnded={() => handleVideoEnd(member.name)}
                      muted
                      playsInline
                    >
                      <source src={member.video} type="video/mp4" />
                    </video>
                  )}

                  {/* Info overlay - 1.5rem from bottom */}
                  <div className="absolute bottom-6 left-0 right-0 z-20 pointer-events-none">
                    <div className="w-full px-6 py-4 bg-[#FFFBFB] flex justify-between items-center">
                      <span className="text-[#100E0E] text-sm font-bold">
                        {member.name}
                      </span>
                      <span className="text-[#100E0E] text-sm font-bold">
                        {member.role}
                      </span>
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
