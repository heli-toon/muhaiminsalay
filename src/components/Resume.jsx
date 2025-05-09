function Resume(){
  return (
    <>
       <section id="resume" className="resume">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Resumé</h2>
            <span className="line-bar">...</span>
          </div>
          <p>Highly creative and detail-oriented web developer. Proficient in a range of software solutions, with a passion of delivering innovative and effective solutions.</p>
          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0" data-aos="fade-up" data-aos-delay="100">
                <h4>Salay Abdul Muhaimin Kanton</h4>
                <p><em>Innovative web developer with 3+ years of experience designing and developing user-centered websites from initial concept to final, polished deliverable websites.</em></p>
                <ul>
                  <li>Mamobi, Accra, Ghana</li>
                  <li><a href="tel:+233535760503">+233 53 576 0503</a></li>
                  <li><a href="mailto:abdulkanton2005@gmail.com" target="_blank" title="Email Me" rel="noreferrer">abdulkanton2005@gmail.com</a></li>
                </ul>
              </div>
              <h3 className="resume-title">Education</h3>
              {/* <div className="resume-item" data-aos="fade-up" data-aos-delay="100">
                <h4>Bachelor's Degree Computer Science</h4>
                <h5>2028 - 2025</h5>
                <p><em>Ghana Communication Technology University</em></p>
                <p></p>
              </div> */}
              <div className="resume-item" data-aos="fade-up" data-aos-delay="100">
                <h4>Diploma in Computer Science</h4>
                <h5>2025 - 2027</h5>
                <p><em>Ghana Communication Technology University</em></p>
                <p>Specialized program focusing on programming concepts, software development methodologies & computing fundamentals. Curriculum includes data structures, algorithms, database management, web applications & software engineering principles.</p>
              </div>
              <div className="resume-item" data-aos="fade-up" data-aos-delay="100">
                <h4>Certificates</h4>
                <h5>2021 - 2024</h5>
                <p><em>Certification Programs</em></p>
                <p>SoloLearn: HTML, CSS, JavaScript & Python</p>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item" data-aos="fade-up" data-aos-delay="100">
                <h4>Remote Fullstack Web &amp; Mobile Intern</h4>
                <h5>2024 - Present</h5>
                <p><em>Hexohub STEM Center, Spintex, Accra</em></p>
                <ul>
                  <li>Developed multiple web & mobile apps using Django, React & React Native (Expo)</li>
                  <li>Built robust backend APIs with Django REST Framework, implementing secure authentication</li>
                  <li>Designed responsive interfaces with React, focusing on intuitive experiences & modern design principles</li>
                  <li>Developed cross-platform mobile solutions with React Native on iOS & Android</li>
                </ul>
              </div>
              <div className="resume-item" data-aos="fade-up" data-aos-delay="100">
                <h4>Frontend Web Developer</h4>
                <h5>2023 - Present</h5>
                <p><em>Verix Solutions Ltd. Accra</em></p>
                <ul>
                  <li>Conceptualize and design engaging websites.</li>
                  <li>Developed a few web application programs.</li>
                </ul>
              </div>
              <div className="resume-item" data-aos="fade-up" data-aos-delay="100">
                <h4>Freelance Web &amp; Desktop App Developer</h4>
                <h5>2022 - 2024</h5>
                <p><em>Self-employed, Accra</em></p>
                <ul>
                  <li>Managed various freelance projects for clients in diverse industries like the corporate institutions, retail services, personal brands etc. Demonstrating adaptability and versatility in Website Development.</li>
                  <li>Managed up to 4 projects at a given time while under pressure</li>
                  <li>Recommended and consulted with clients on the most appropriate websites and apps</li>
                </ul>
              </div>
            </div>
              <div className="mt-4 d-flex align-items-center justify-content-center">
                <a href="https://muhaiminsalayk.netlify.app/Abdul_Muhaimin_Salay_Kanton_Resume.pdf" target="_blank" rel="noreferrer" download title="Abdul Muhaimin Salay Kanton Resume" className="btn btned"> <i className="bi bi-file-earmark-arrow-down" /> Download My Resumé</a>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Resume