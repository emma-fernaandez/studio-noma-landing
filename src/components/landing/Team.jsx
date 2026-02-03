import { motion } from 'framer-motion';
import emmaPortrait from '../../assets/emma-portrait.png';
import nicolePortrait from '../../assets/nicole-portrait.png';
import chiaraPortrait from '../../assets/chiara-portrait.png';

export default function Team() {
  const team = [
    {
      name: 'EMMA',
      role: 'LEAD DEVELOPER',
      image: emmaPortrait,
    },
    {
      name: 'NICOLE',
      role: 'CREATIVE DIRECTOR',
      image: nicolePortrait,
    },
    {
      name: 'CHIARA',
      role: 'ACCOUNT MANAGER',
      image: chiaraPortrait,
    },
  ];

  return (
    <section id="equipo" className="py-32 px-8 md:px-16 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto">
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
              <div className="bg-[#FFFBFB] rounded-sm overflow-hidden transition-all duration-300">
                {/* Image Container with overlay */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '1/1.3' }}>
                  {/* White margin top */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-[#FFFBFB] z-10"></div>

                  {/* Image */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Info overlay - 1.5rem from bottom */}
                  <div className="absolute bottom-6 left-0 right-0 z-20 pointer-events-none">
                    <div className="w-full px-6 py-4 bg-[#FFFBFB] flex justify-between items-center">
                      <span className="text-[#100E0E] text-sm font-semibold">
                        {member.name}
                      </span>
                      <span className="text-[#100E0E] text-sm font-semibold">
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
