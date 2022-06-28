import React from 'react'
import './Resume.css'
function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Resume</h2>
          <p>Here is a distinct overview of my education and also some of the competitions I took part in.</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Kabir Raj Singh</h4>
              <p><em>Innovative full stack web-developer with complete knowledge of current technologies.</em></p>
              <ul>
                <li>Hindustan Park, Asansol</li>
                <li>www.instagram.com/kabirr.exe</li>
                <li>kabirrajsingh10@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Engineering</h4>
              <h5>2020 -2024</h5>
              <p><em>Jadavpur University, Kolkata</em></p>
              <p>Stream- Computer Science and Engineering</p>
            </div>
            <div className="resume-item">
              <h4>Central Board Of Secondary Education</h4>
              <h5>2020</h5>
              <p><em>Burnpur Riverside School, Burnpur</em></p>
              <p>Higher Secondary Examination- 96.2%</p>
            </div>
            <div className="resume-item">
              <h4>Central Board Of Secondary Education</h4>
              <h5>2018</h5>
              <p><em>Burnpur Riverside School, Burnpur</em></p>
              <p>Secondary Examination- 91%</p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Freelance Web Developer</h4>
              <h5>2020 - Present</h5>
              <p><em>Kolkata </em></p>
              <ul>
                <li>Worked on various freelance projects and was able to deliver them in deadline-driven time.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Co-Founder at QuikShope and GiantsMeet</h4>
              <h5>2021-Present</h5>
              <p><em>Kolkata</em></p>
              <ul>
                <li>QuikShope.in is a startup which provides an application to quickly create a website of any ecommerce business within 5 minutes totally free. Check more on the Play Store App.</li>
                <li>Check giantsmeet at blog.giantsmeet.com .</li>
              </ul>
            </div>
            <h3 className="resume-title">Achievements</h3>
            <div className="resume-item">
              <h4>Aadhaar Hackathon</h4>
              <h5>2021</h5>
              <p><em>Organised by uidai.gov.in</em></p>
              <ul>
                <li>Ranked among the top 9 finalists in the UIDAI Aadhaar Hackathon in which over 800 teams took part. Developed a technology to modify Aadhaar data in a quick and secure way than existing ones.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Hack N Pitch</h4>
              <h5>2021</h5>
              <p><em>Jadavpur University Entrepreneurship Cell</em></p>
              <ul>
                <li>Stood first among 80 teams by developing a cryptocurrency infused transaction wallet system- KampusVire</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>IEEE DoubleSlash</h4>
              <h5>2021</h5>
              <p><em>IEEE Student Chapter JU</em></p>
              <ul>
                <li>Stood runners up among 60 teams by developing an interactive learning based game- QuikShope</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Resume