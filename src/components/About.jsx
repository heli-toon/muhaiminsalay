export default function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <div className="section-title">
              <h2>About Me</h2>
              <span className="line-bar">...</span>
            </div>
            <p>
              Hello, I&apos;m Salay Abdul Muhaimin Kanton, a passionate full-stack 
              developer and desktop application creator with a strong foundation 
              in both frontend and backend development. With 3 years of learning 
              and building experience, I specialize in creating dynamic websites
              using React, HTML, CSS and Javascript for the frontend, and Django
              and Flask for the backend. I also have a keen interest in
              exploring the world of Internet of Things (IoT) with Arduino and
              Raspberry Pi. Additionally, I develop desktop applications using
              Tkinter (Python) and Electron (JavaScript), bringing my ideas to
              life on the desktop. I believe that determination, curiosity, and
              self-discipline are essential qualities for success in any field.
              I embody these values in my approach to web development and
              software creation, constantly seeking new challenges and
              opportunities to grow.
            </p>
          </header>
          <div className="row">
            <div className="skills" data-aos="fade-up" data-aos-delay="100">
              <div className="skills-grid bg-dg bg-dg-card">
                <div className="grid-cell">
                  <h6>Proficient In</h6>
                </div>
                <div className="grid-cell">
                  <h6>Familiar With</h6>
                </div>
                <div className="grid-cell">
                  <h6>Basic knowledge of</h6>
                </div>
                <div className="grid-cell">
                  <p>Python</p>
                </div>
                <div className="grid-cell">
                  <p>Flask, Django, Tkinter</p>
                </div>
                <div className="grid-cell">
                  <p>PHP</p>
                </div>
                <div className="grid-cell">
                  <p>HTML, CSS & JavaScript</p>
                </div>
                <div className="grid-cell">
                  <p>Git, SQL</p>
                </div>
                <div className="grid-cell">
                  <p>Tailwindcss, Bulma</p>
                </div>
                <div className="grid-cell">
                  <p>Bootstrap</p>
                </div>
                <div className="grid-cell">
                  <p>React, Electron</p>
                </div>
                <div className="grid-cell">
                  <p>Arduino & Rasperry Pi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
