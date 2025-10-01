import ContactForm from './ContactForm';
import { useEffect } from 'react';
import AOS from 'aos';

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out" });
  }, []);

  const contactInfo = [
    {
      icon: "bi bi-geo-alt",
      title: "Address",
      content: "Accra, Ghana",
      delay: 200
    },
    {
      icon: "bi bi-telephone",
      title: "Call",
      content: "+233 53 576 0503",
      link: "tel:+233535760503",
      delay: 250
    },
    {
      icon: "bi bi-envelope",
      title: "Email",
      content: "abdulkanton2005@gmail.com",
      link: "mailto:abdulkanton2005@gmail.com",
      delay: 300
    },
    {
      icon: "bi bi-clock",
      title: "Freelance",
      content: "Unavailable",
      delay: 350
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto max-w-7xl" data-aos="fade-up">
        {/* Section Header */}
        <header className="text-center mb-16">
          <div className="mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <div className="flex items-center justify-center gap-2">
              <span className="w-12 h-1 bg-orange-500 rounded-full"></span>
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
              <span className="w-12 h-1 bg-orange-500 rounded-full"></span>
            </div>
          </div>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I have a proven track record of delivering high-quality results that always exceed expectations. 
            I'm always up for a new challenge. Have any questions or feedback? I'd love to hear from you! 
            Get in touch via email at{" "}
            <a href="mailto:abdulkanton2005@gmail.com" className="text-orange-500 hover:text-orange-600 transition-colors">
              abdulkanton2005@gmail.com
            </a>{" "}
            or call me at{" "}
            <a href="tel:+233535760503" className="text-orange-500 hover:text-orange-600 transition-colors">
              +233-53-576-0503
            </a>
            . Alternatively, you can fill out the contact form below.
          </p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-gray-950/95 rounded-lg p-6 border border-gray-900 hover:border-orange-500 transition-all duration-300 group"
                  data-aos="fade-up"
                  data-aos-delay={info.delay}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/10 rounded-lg group-hover:bg-orange-500 transition-all duration-300 mb-4">
                      <i className={`${info.icon} text-2xl text-orange-500 group-hover:text-white transition-colors duration-300`}></i>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-400 hover:text-orange-500 transition-colors text-sm break-all"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-400 text-sm">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div 
              className="bg-gray-950/95 rounded-lg p-6 border border-gray-800"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3 className="text-lg font-semibold text-white mb-4 text-center">
                Connect With Me
              </h3>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.github.com/heli-toon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-900 hover:bg-orange-500 text-gray-400 hover:text-white rounded-lg transition-all duration-300"
                >
                  <i className="bi bi-github text-xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/muhaimin-salay-a653b6299/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-900 hover:bg-orange-500 text-gray-400 hover:text-white rounded-lg transition-all duration-300"
                >
                  <i className="bi bi-linkedin text-xl"></i>
                </a>
                <a
                  href="https://x.com/SalayAbdul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-900 hover:bg-orange-500 text-gray-400 hover:text-white rounded-lg transition-all duration-300"
                >
                  <i className="bi bi-twitter-x text-xl"></i>
                </a>
                <a
                  href="https://www.instagram.com/muhaiminsalay/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-900 hover:bg-orange-500 text-gray-400 hover:text-white rounded-lg transition-all duration-300"
                >
                  <i className="bi bi-instagram text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}