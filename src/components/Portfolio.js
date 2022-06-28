import React from 'react'
import './Portfolio.css'
function Portfolio() {
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Direct Links are provided to Live Projects and project links are provided for the rest.</p>
        </div>

        {/* <div className="row">
          <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <ul id="portfolio-flters">
              <li dataFilter="*" className="filter-active">All</li>
              <li dataFilter=".filter-app">App</li>
              <li dataFilter=".filter-card">Card</li>
              <li dataFilter=".filter-web">Web</li>
            </ul>
          </div>
        </div> */}

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="./portfolio/brainaspire.png" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Brain Aspire</h4>
                <p>A full-stack application created for a coaching institute providing fee,attendance as well as class test facilities.</p>
                <div className="portfolio-links">
                  <a href="./portfolio/brainaspire.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                  <a href="https://brainaspire.in/" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details" target="_blank"><i className="bx bx-link" ></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="./portfolio/cryptoverse.png" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Crypto Verse</h4>
                <p>An application which provides realtime Crypto Coin data as well as latest news.</p>
                <div className="portfolio-links">
                  <a href="./portfolio/cryptoverse.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                  <a href="https://jazzy-platypus-3347d7.netlify.app/" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details" target="_blank"><i className="bx bx-link" ></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="./portfolio/dawatrestaurant.png" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Dawat Restaurant Theme</h4>
                <p>A React Based Frontend created for Integration into the QuikShope application.</p>
                <div className="portfolio-links">
                  <a href="https://courageous-hamster-38203d.netlify.app/" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                  <a href="https://jazzy-platypus-3347d7.netlify.app/" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details" target="_blank"><i className="bx bx-link" ></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="./portfolio/kampusvire.png" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>KampusVire</h4>
                <p>A transaction wallet based app created for any college campus integrated with Celo cryptocurrency.</p>
                <div className="portfolio-links">
                  <a href="./portfolio/kampusvire.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                  <a href="https://devfolio.co/projects/kampusvire-f9ab" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details" target="_blank"><i className="bx bx-link" ></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="./portfolio/intellup.png" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Intellup</h4>
                <p>An interactive live game educational platform.</p>
                <div className="portfolio-links">
                  <a href="./portfolio/intellup.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                  <a href="https://devfolio.co/projects/intellup-1d62" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details" target="_blank"><i className="bx bx-link" ></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="./portfolio/hotelridley.png" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Hotel Ridley International</h4>
                <p>An app for a hotel based in Digha supporting bookings and payments.</p>
                <div className="portfolio-links">
                  <a href="./portfolio/hotelridley.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                  <a href="https://www.hotelridley.in" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details" target="_blank"><i className="bx bx-link" ></i></a>
                </div>
              </div>
            </div>
          </div>
          

        </div>

      </div>
    </section>
  )
}

export default Portfolio