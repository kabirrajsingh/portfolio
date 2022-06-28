import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer id="footer">
    <div className="container">
      <h3>Kabir Raj Singh</h3>
      <p>Exploring the ways of life.</p>
      <div className="social-links">
        <a target="_blank" href="https://github.com/kabirrajsingh" className="github"><i className="bx bxl-github"></i></a>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100010025792227" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a target="_blank" href="https://www.youtube.com/channel/UColoduSdEhRZNqaKTWYqRvw" className="instagram"><i className="bx bxl-youtube"></i></a>
                    <a target="_blank" href="https://leetcode.com/kabirrajsingh10/" className="google-plus"><i className="bx bx-code-curly"></i></a>
                    <a target="_blank" href="https://www.linkedin.com/in/kabir-raj-singh-602286149/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </footer>
  )
}

export default Footer