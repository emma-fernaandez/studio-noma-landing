import logoPrincipal from '../../assets/logo-footer.png';

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
        <div className="mb-16 flex justify-center">
          <img
            src={logoPrincipal}
            alt="Studio Noma"
            className="w-auto"
            style={{ height: '12rem' }}
          />
        </div>

        {/* Bottom: Social links and copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-[#FFFBFB]/10 pt-8">
          {/* Social Links */}
          <div className="flex gap-8">
            <a
              href="https://x.com/studionoma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold transition-opacity duration-300 hover:opacity-60"
            >
              X
            </a>
            <a
              href="https://instagram.com/studionoma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold transition-opacity duration-300 hover:opacity-60"
            >
              INSTAGRAM
            </a>
            <a
              href="https://linkedin.com/company/studionoma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold transition-opacity duration-300 hover:opacity-60"
            >
              LINKEDIN
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-[#FFFBFB]/60">
            © 2026 STUDIO NOMA. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
