import { useEffect } from "react";
import AOS from "aos";

function Expertise() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out" });
  }, []);

  const services = [
    {
      icon: "bi bi-code-slash",
      title: "Web Development",
      description: "From concept to launch, I design and develop custom websites tailored to your needs.",
      delay: 100
    },
    {
      icon: "bi bi-paint-bucket",
      title: "Frontend Website Redesigns",
      description: "Breathe new life into your existing website with a modern, user-friendly redesign to boost your online presence.",
      delay: 100
    },
    {
      icon: "bi bi-controller",
      title: "Simple Web Apps & Games",
      description: "Create engaging, robust, interactive web games & applications for entertainment or marketing purposes.",
      delay: 200
    },
    {
      icon: "bi bi-images",
      title: "Showcase & Landing Pages",
      description: "Showcase your products, services, or art with conversion-driven landing pages to boost your marketing efforts.",
      delay: 200
    },
    {
      icon: "bi bi-person-lines-fill",
      title: "CRM Tools",
      description: "Streamline customer relationships with offline / online custom Customer Relationship Management solutions.",
      delay: 300
    },
    {
      icon: "bi bi-server",
      title: "Django & Flask Backend",
      description: "Leverage the power of Django / Flask to build robust, scalable backend solutions that drive business growth and innovation.",
      delay: 300
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40" id="services">
      <div className="container mx-auto max-w-7xl" data-aos="fade-up">
        {/* Section Header */}
        <header className="text-center mb-16">
          <div className="mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Expertise
            </h2>
            <div className="flex items-center justify-center gap-2">
              <span className="w-12 h-1 bg-orange-500 rounded-full"></span>
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
              <span className="w-12 h-1 bg-orange-500 rounded-full"></span>
            </div>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            As a versatile web developer, I offer a range of services to help individuals and businesses establish a strong online presence:
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group"
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <a href="/#apps" className="block h-full">
                <div className="bg-gray-950/95 rounded-lg p-8 h-full transition-all duration-300 border border-gray-900 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-2">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 rounded-lg group-hover:bg-orange-500 transition-all duration-300">
                      <i className={`${service.icon} text-3xl text-orange-500 group-hover:text-white transition-colors duration-300`}></i>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300">
                    {service.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="mt-6 flex items-center text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium mr-2">Learn more</span>
                    <i className="bi bi-arrow-right text-sm group-hover:translate-x-2 transition-transform duration-300"></i>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;