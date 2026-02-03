import logoPrincipal from '../../assets/logo.svg';

export default function Footer() {
  return (
    <footer className="bg-[#100E0E] text-[#FFFBFB] py-20 px-12">
      <div className="flex flex-col">
        {/* Top: Contact CTA */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl mb-6">
            LET'S GET CREATIVE<br />IN YOUR SURROUNDINGS
          </h2>
          <a
            href="mailto:hello@studionoma.com"
            className="text-2xl font-semibold transition-opacity duration-300 hover:opacity-60"
          >
            HELLO@STUDIONOMA.COM
          </a>
        </div>

        {/* Middle: Large Logo */}
        <div className="mb-8 flex justify-center">
          <img
            src={logoPrincipal}
            alt="Studio Noma"
            className="w-auto"
            style={{ height: '20rem' }}
          />
        </div>

        {/* Bottom: Copyright and back to top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <div className="text-sm text-[#FFFBFB]">
            © 2026 STUDIO NOMA
          </div>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm font-semibold transition-opacity duration-300 hover:opacity-60"
          >
            BACK TO TOP ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
