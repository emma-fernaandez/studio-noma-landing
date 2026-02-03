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
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#FFFBFB] text-4xl md:text-5xl mb-16 text-center"
        >
          NUESTRO EQUIPO
        </motion.h2>

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
              <div className="bg-[#FFFBFB]/[0.05] rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#FFFBFB]/[0.08]">
                {/* Image */}
                <div className="aspect-square overflow-hidden bg-[#FFFBFB]/[0.03]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Info */}
                <div className="p-6 text-center">
                  <h3 className="text-[#FFFBFB] text-lg font-bold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#FFFBFB]/60 text-sm font-semibold">
                    {member.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
