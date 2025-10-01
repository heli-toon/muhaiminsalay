import { Link } from "react-router-dom";
export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40">
      <div className="container mx-auto">
        <div data-aos="fade-up">
          <header className="text-center mb-16">
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                About Me
              </h2>
              <div className="flex items-center justify-center gap-2">
                <span className="w-12 h-1 bg-orange-500 rounded-full"></span>
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                <span className="w-12 h-1 bg-orange-500 rounded-full"></span>
              </div>
            </div>
            {/* Intro Text */}
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-gray-400 mb-6 leading-relaxed">
                Hello, I&apos;m{" "}
                <span className="text-[#f97316] font-semibold">
                  Salay Abdul Muhaimin Kanton
                </span>
                , a passionate full-stack developer and desktop application
                creator with a strong foundation in both frontend and backend
                development. With 3 years of learning and building experience, I
                specialize in creating dynamic websites using{" "}
                <span className="text-white">React, React Native, HTML + CSS</span>{" "}
                and <span className="text-white">JavaScript</span> for the
                frontends, and <span className="text-white">Django, Flask</span>{" "}
                and <span className="text-white">Firebase</span> for backends.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                I also have a keen interest in exploring the world of Internet of
                Things (IoT) with{" "}
                <span className="text-white">Arduino</span> and{" "}
                <span className="text-white">Raspberry Pi</span>. Additionally, I
                develop desktop applications using{" "}
                <span className="text-white">Tkinter, Flet</span> (Python) and{" "}
                <span className="text-white">Electron</span> (JavaScript),
                bringing my ideas to life on the desktop.
              </p>
              <p className="text-gray-400 mb-10 leading-relaxed">
                I believe that determination, curiosity, and self-discipline are
                essential qualities for success in any field. I embody these
                values in my approach to web development and software creation,
                constantly seeking new challenges and opportunities to grow.
              </p>
            </div>
          </header>


          {/* Skills Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="bg-gray-950/95 border-gray-900 rounded-lg p-6 hover:border-orange-600 hover:bg-gray-900 border transition-colors duration-300">
              <h6 className="text-white font-bold mb-3">Proficient In</h6>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Python, Flask, Django & Tkinter</li>
                <li>React, HTML + CSS & JavaScript</li>
                <li>Bootstrap, Tailwind CSS</li>
              </ul>
            </div>

            <div className="bg-gray-950/95 border-gray-900 rounded-lg p-6 hover:border-orange-600 hover:bg-gray-900 border transition-colors duration-300">
              <h6 className="text-white font-bold mb-3">Familiar With</h6>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Expo, React Native</li>
                <li>Git, SQL</li>
                <li>Electron</li>
              </ul>
            </div>

            <div className="bg-gray-950/95 border-gray-900 rounded-lg p-6 hover:border-orange-600 hover:bg-gray-900 border transition-colors duration-300">
              <h6 className="text-white font-bold mb-3">Basic Knowledge Of</h6>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>PHP</li>
                <li>Bulma, Next.js, Prisma & MongoDB</li>
                <li>Arduino & Raspberry Pi</li>
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              to="/skills"
              className="inline-block border border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white px-6 py-2 rounded-lg transition-all duration-300"
            >
              See All Skills
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}