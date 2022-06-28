import React from 'react'
import './Skills.css'
function Skills() {
  return (
    <section id="skills" className="skills section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Skills</h2>
          <p>These are my proficiencies in the basic technologies.</p>
        </div>

        <div className="row skills-content">

          <div className="col-lg-6">

            <div className="progress">
              <span className="skill">HTML <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{'width':"80%"}}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">CSS <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{'width':"80%"}}> </div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">JavaScript <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{'width':"75%"}}></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">Java <i className="val">85%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{'width':"85%"}}></div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">

            <div className="progress">
              <span className="skill">React <i className="val">70%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{'width':"70%"}}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Django <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{'width':"80%"}}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">CPP <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={{'width':"75%"}}></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">Python <i className="val">65%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{'width':"65%"}}></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Skills