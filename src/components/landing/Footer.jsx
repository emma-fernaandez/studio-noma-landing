import logoPrincipal from '../../assets/logo.svg';

export default function Footer() {
  return (
    <footer className="bg-[#100E0E] text-[#FFFBFB] pt-12 md:pt-20 pb-8 px-6 md:px-12">
      <div className="flex flex-col">
        {/* Top: Contact CTA */}
        <div className="mb-8 md:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-[5.5rem] mb-6">
            CREIAMO QUALCOSA<br />DI STRAORDINARIO
          </h2>
          <a
            href="mailto:hello@studionoma.com"
            className="text-lg sm:text-xl md:text-2xl font-semibold transition-opacity duration-300 hover:opacity-60"
          >
            HELLO@STUDIONOMA.COM
          </a>
        </div>

        {/* Back to Top - mobile */}
        <div className="flex justify-end mb-6 md:hidden">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm font-semibold transition-opacity duration-300 hover:opacity-60"
          >
            TORNA SU ↗
          </button>
        </div>

        {/* Large Logo */}
        <div className="mb-6 md:mb-8 flex justify-center">
          <img
            src={logoPrincipal}
            alt="Studio Noma"
            className="w-full md:w-auto md:h-[20rem]"
          />
        </div>

        {/* Bottom: Copyright and back to top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
          <div className="text-sm text-[#FFFBFB]">
            © 2026 STUDIO NOMA
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hidden md:block text-sm font-semibold transition-opacity duration-300 hover:opacity-60"
          >
            TORNA SU ↗
          </button>
        </div>
      </div>
    </footer>
  );
}
