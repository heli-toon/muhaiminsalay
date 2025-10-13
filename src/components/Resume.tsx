function Resume() {
  return (
    <section id="resume" className="py-16 bg-black/40 text-gray-100">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <header className="text-center mb-16">
          <div className="mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Resumé
            </h2>
            <div className="flex items-center justify-center gap-2">
              <span className="w-12 h-1 bg-orange-500 rounded-full"></span>
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
              <span className="w-12 h-1 bg-orange-500 rounded-full"></span>
            </div>
          </div>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
            Highly creative and detail-oriented web developer. Proficient in a range of
            software solutions, with a passion for delivering innovative and effective solutions.
          </p>
        </header>


        <div className="grid md:grid-cols-2 gap-8">
          {/* Left column */}
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Summary</h3>
            <div className="border-l-2 border-orange-500 pl-5 mb-6 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-500 border-2 border-orange-600 rounded-full"></div>
              <h4 className="text-lg font-semibold text-orange-500">Salay Abdul Muhaimin Kanton</h4>
              <p className="italic text-gray-400">
                Innovative web developer with 3+ years of experience designing and developing
                user-centered websites from initial concept to polished deliverables.
              </p>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Mamobi, Accra, Ghana</li>
                <li>
                  <a href="tel:+233535760503" className="text-orange-500 hover:text-orange-600">
                    +233 53 576 0503
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:abdulkanton2005@gmail.com"
                    className="text-orange-500 hover:text-orange-600"
                    target="_blank"
                    rel="noreferrer"
                  >
                    abdulkanton2005@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-200 mb-4">Education</h3>
            <div className="border-l-2 border-orange-500 pl-5 mb-6 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-500 border-2 border-orange-600 rounded-full"></div>
              <h4 className="text-orange-500 font-semibold">Diploma in Computer Science</h4>
              <h5 className="bg-gray-950/95 border border-gray-900 inline-block px-3 py-1 text-sm font-semibold text-white rounded mb-2">
                2025 - 2027
              </h5>
              <p className="text-gray-300">
                Ghana Communication Technology University. Focus on programming, software
                methodologies, and computing fundamentals.
              </p>
            </div>

            <div className="border-l-2 border-orange-500 pl-5 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-500 border-2 border-orange-600 rounded-full"></div>
              <h4 className="text-orange-500 font-semibold">Certificates</h4>
              <h5 className="bg-gray-950/95 border border-gray-900 inline-block px-3 py-1 text-sm font-semibold text-white rounded mb-2">
                2021 - 2024
              </h5>
              <p className="text-gray-300">SoloLearn: HTML, CSS, JavaScript & Python</p>
            </div>
          </div>

          {/* Right column */}
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Professional Experience</h3>

            <div className="border-l-2 border-orange-500 pl-5 mb-6 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-500 border-2 border-orange-600 rounded-full"></div>
              <h4 className="text-orange-500 font-semibold">Remote Fullstack Web & Mobile Intern</h4>
              <h5 className="bg-gray-950/95 border border-gray-900 inline-block px-3 py-1 text-sm font-semibold text-white rounded mb-2">
                2024 - Present
              </h5>
              <p className="italic text-gray-400">ReGen Studios, Spintex, Accra</p>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Developed multiple web & mobile apps using Django, React & React Native</li>
                <li>Built backend APIs with Django REST Framework</li>
                <li>Designed responsive interfaces with React</li>
                <li>Created cross-platform apps with React Native</li>
              </ul>
            </div>

            <div className="border-l-2 border-orange-500 pl-5 mb-6 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-500 border-2 border-orange-600 rounded-full"></div>
              <h4 className="text-orange-500 font-semibold">Frontend Web Developer</h4>
              <h5 className="bg-gray-950/95 border border-gray-900 inline-block px-3 py-1 text-sm font-semibold text-white rounded mb-2">
                2023 - Present
              </h5>
              <p className="italic text-gray-400">Verix Solutions Ltd, Accra</p>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Designed and built engaging websites</li>
                <li>Developed several web applications</li>
              </ul>
            </div>

            <div className="border-l-2 border-orange-500 pl-5 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-500 border-2 border-orange-600 rounded-full"></div>
              <h4 className="text-orange-500 font-semibold">Freelance Web & Desktop App Developer</h4>
              <h5 className="bg-gray-950/95 border border-gray-900 inline-block px-3 py-1 text-sm font-semibold text-white rounded mb-2">
                2022 - 2024
              </h5>
              <p className="italic text-gray-400">Self-employed, Accra</p>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Managed diverse freelance projects in multiple industries</li>
                <li>Handled up to 4 projects at once under pressure</li>
                <li>Consulted with clients on appropriate tech solutions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://muhaiminsalayk.netlify.app/Abdul_Muhaimin_Salay_Kanton_Resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            download
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md transition"
          >
            <i className="bi bi-file-earmark-arrow-down"></i>
            Download My Resumé
          </a>
        </div>
      </div>
    </section>
  );
}
export default Resume;
