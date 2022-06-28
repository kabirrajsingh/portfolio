import React from 'react'
import './About.css'
function About() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About</h2>
          <p>I'm a third year student at Jadavpur University currently pursuing Bachelor of Engineering in Computer Science and Engineering. I love to explore stuff and build things in my free time. I also freelance as a web developer sometimes. I'm also an Arduino enthusiast and have been involved in it since a long time now.</p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img src="./portfolio/self.jpeg" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Full Stack Web Developer.</h3>
            <p className="fst-italic">
              I have been making websites since 2020 and have been in web developement even before that. Check out my projects for more info.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>24 October 2001</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.kabirrajsingh.com</span></li>
                  {/* <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li> */}
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Kolkata, West Bengal</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>20</span></li>
                  {/* <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li> */}
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>kabirrajsingh10@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p>
            I am trading in cryptocurrency and NFTS for over 2 years now and have also taught trading strategies to many. I also provide other services such as app development or mass-email service. Just send in a contact request and we shall discuss further. Other than my professional works, I like to play the guitar, play competitive games or just sleep.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About