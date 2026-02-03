import badgeLoop from '../../assets/badge-loop.png';

export default function Clients() {
  // Triple the image for seamless infinite scroll
  const images = [1, 2, 3];

  return (
    <section className="py-20 relative overflow-hidden scroll-mt-20">
      <div className="relative">
        {/* Infinite scroll container */}
        <div className="flex animate-scroll">
          {images.map((_, index) => (
            <img
              key={index}
              src={badgeLoop}
              alt="Studio Noma Clients"
              className="h-[120px] w-auto flex-shrink-0"
              style={{ display: 'block' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
