import faberlab from '../../assets/badges/faberlab.png';
import laterraza from '../../assets/badges/laterraza.png';
import bdpBurger from '../../assets/badges/bdp-burger.png';
import bdpSmash from '../../assets/badges/bdp-smash.png';
import beanywood from '../../assets/badges/beanywood.png';
import dance from '../../assets/badges/dance.png';
import hanniballaguna from '../../assets/badges/hanniballaguna.png';
import sixmorrigan from '../../assets/badges/sixmorrigan.png';

export default function Clients() {
  const clients = [
    { name: 'Faberlab', logo: faberlab },
    { name: 'La Terraza', logo: laterraza },
    { name: 'BDP Burger', logo: bdpBurger },
    { name: 'BDP Smash', logo: bdpSmash },
    { name: 'Beanywood', logo: beanywood },
    { name: 'Dance', logo: dance },
    { name: 'Hannibal Laguna', logo: hanniballaguna },
    { name: 'Six Morrigan', logo: sixmorrigan },
  ];

  // Duplicate array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-20 px-8 md:px-16 relative overflow-hidden scroll-mt-20">
      <div className="relative">
        {/* Infinite scroll container */}
        <div className="flex animate-scroll">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 mx-2 flex items-center justify-center"
              style={{ width: '200px', height: '200px' }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
