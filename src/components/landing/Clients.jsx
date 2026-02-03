import badgeLoop from '../../assets/badge-loop.png';

export default function Clients() {
  // Duplicate the image multiple times for seamless infinite scroll
  const images = [1, 2, 3, 4, 5, 6];

  return (
    <section className="py-20 relative overflow-hidden scroll-mt-20">
      <div className="relative">
        {/* Infinite scroll container */}
        <div className="flex animate-scroll-badges" style={{ height: '120px' }}>
          {images.map((_, index) => (
            <img
              key={index}
              src={badgeLoop}
              alt="Studio Noma Clients"
              className="h-full w-auto flex-shrink-0"
              style={{ display: 'block', objectFit: 'contain' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
