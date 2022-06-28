import React from 'react'
import './Home.css'
import Typed from 'typed.js';
function Home() {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);
    // Create reference to store the Typed instance itself
    const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: [
                "'m a <strong>Web3</strong>  <i>newbie</i>",
                "'m a crypto and NFT trader.",
                "'m a <strong>Full Stack</strong> Web Developer"
            ],
            typeSpeed: 50,
            backSpeed: 50,
        };

        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        }
    }, [])
    return (
        <section id="hero" className="d-flex flex-column justify-content-center">
            <div className="container" data-aos="zoom-in" data-aos-delay="100">
                <h1>Kabir Raj Singh</h1>
                <p>I<span style={{ whiteSpace: 'pre' }} ref={el} /></p>
                <div className="social-links">
                    <a target="_blank" href="https://github.com/kabirrajsingh" className="github"><i className="bx bxl-github"></i></a>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100010025792227" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a target="_blank" href="https://www.youtube.com/channel/UColoduSdEhRZNqaKTWYqRvw" className="instagram"><i className="bx bxl-youtube"></i></a>
                    <a target="_blank" href="https://leetcode.com/kabirrajsingh10/" className="google-plus"><i className="bx bx-code-curly"></i></a>
                    <a target="_blank" href="https://www.linkedin.com/in/kabir-raj-singh-602286149/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
            </div>
        </section>
    )
}

export default Home;