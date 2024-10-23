function Resume(){
  return (
    <>
       <section id="resume" className="resume">
        <div className="container">
          <div className="section-title">
            <h2>Resume</h2>
            <span className="line-bar">...</span>
          </div>
          <p>Highly creative and detail-oriented web developer. Proficient in a range of software solutions, with a passion of delivering innovative and effective solutions.</p>
          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>Salay Abdul Muhaimin Kanton</h4>
                <p><em>Innovative web developer with 3+ years of experience designing and developing user-centered websites from initial concept to final, polished deliverable websites.</em></p>
                <ul>
                  <li>Mamobi, Accra, Ghana</li>
                  <li><a href="tel:+233535760503">+233 53 576 0503</a></li>
                  <li><a href="mailto:abdulkanton2005@gmail.com" target="_blank" title="Email Me">abdulkanton2005@gmail.com</a></li>
                </ul>
              </div>
              <h3 className="resume-title">Education</h3>
              {/* <div className="resume-item">
                <h4>Bachelor's Degree Computer Science</h4>
                <h5>2025 - 2029</h5>
                <p><em>Ghana Communication Technology University</em></p>
                <p></p>
              </div> */}
              <div className="resume-item">
                <h4></h4>
                <h5>2021 - 2023</h5>
                <p><em>Labone Senior High School</em></p>
                <p>General Science with Elective ICT, Physics, Chemistry &amp; Elective Mathematics.</p>
              </div>
              <div className="resume-item">
                <h4>Certificates</h4>
                <h5>2021 - 2024</h5>
                <p><em>Certification Programs</em></p>
                <p>SoloLearn HTML, CSS, JavaScript & Python</p>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Frontend Web Developer</h4>
                <h5>2023 - Present</h5>
                <p><em>Verix Solutions Ltd. Accra</em></p>
                <ul>
                  <li>Conceptualize and design engaging websites.</li>
                  <li>Developed numerous web application programs.</li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Freelance Web Developer and Desktop App Developer</h4>
                <h5>2022 - Present</h5>
                <p><em>Self-employed, Mamobi, Accra</em></p>
                <ul>
                  <li>Managed various freelance projects for clients in diverse industries like the corporate institutions, retail services etc. Demonstrating adaptability and versatility in Website Development</li>
                  <li>Managed up to 5 projects at a given time while under pressure</li>
                  <li>Recommended and consulted with clients on the most appropriate websites and apps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Resume