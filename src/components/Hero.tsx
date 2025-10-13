export default function Hero() {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <section id="hero" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Text */}
          <div className="lg:col-span-7 order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-gray-900/40 px-3 py-1 mb-4">
              <span className="h-2 w-2 rounded-full bg-[#f6700d]" />
              <span className="text-xs font-semibold text-[#f6700d] tracking-wide">
                Full-stack Developer
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Salay Abdul Muhaimin Kanton
            </h1>

            <p className="mt-4 text-gray-300 leading-7 max-w-2xl">
              I build reliable, performant web apps and APIs with attention to UX and detail.
              Clean architecture, great DX, and maintainable code—shipped with care.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="/#apps"
                className="inline-flex items-center justify-center gap-2 bg-[#f6700d] hover:bg-orange-600 text-black font-semibold rounded-md px-5 py-2.5 transition-colors"
              >
                Explore My Work
                <i className="bi bi-chevron-right text-base" />
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#f6700d] text-white hover:text-[#f6700d] rounded-md px-5 py-2.5 transition-colors"
              >
                Contact Me
                <i className="bi bi-send text-base" />
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.github.com/heli-toon"
                target="_blank"
                rel="noreferrer noopener"
                className="text-gray-300 hover:text-[#f6700d] transition-colors"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <i className="bi bi-github text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhaimin-salay-a653b6299/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-gray-300 hover:text-[#f6700d] transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <i className="bi bi-linkedin text-2xl" />
              </a>
              <a
                href="mailto:abdulkanton2005@gmail.com"
                className="text-gray-300 hover:text-[#f6700d] transition-colors"
                aria-label="Email"
                title="Email"
              >
                <i className="bi bi-envelope text-2xl" />
              </a>
              <a
                href="https://wa.me/233535760503/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-gray-300 hover:text-[#f6700d] transition-colors"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <i className="bi bi-whatsapp text-2xl" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div
            className="lg:col-span-5 order-2"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="mx-auto w-full max-w-[360px] sm:max-w-[420px] md:max-w-[460px] rounded-xl border border-white/10 bg-gray-800/40">
              <div className="aspect-square w-full rounded-lg bg-black/40 flex items-center justify-center">
                <img
                  src={"/menobackground.png"}
                  alt="Portrait"
                  className="w-full h-full object-contain select-none"
                  draggable="false"
                  onContextMenu={handleContextMenu}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
