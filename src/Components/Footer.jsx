import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome, faEnvelope, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';
import '../App.css'; // Adjust the path if needed

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Stay connected with us on social media:</span>
        </div>

        {/* Right */}
        <div>
          <a href="#" className="btn text-white btn-floating m-1" style={{ backgroundColor: '#3b5998' }} role="button">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="btn text-white btn-floating m-1" style={{ backgroundColor: '#55acee' }} role="button">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="btn text-white btn-floating m-1" style={{ backgroundColor: '#dd4b39' }} role="button">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="#" className="btn text-white btn-floating m-1" style={{ backgroundColor: '#ac2bac' }} role="button">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="btn text-white btn-floating m-1" style={{ backgroundColor: '#0082ca' }} role="button">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" className="btn text-white btn-floating m-1" style={{ backgroundColor: '#333333' }} role="button">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </section>
      {/* Section: Social media */}

      {/* Section: Links */}
      <section>
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
            {/* Media Player Info */}
            <Col md={3} lg={4} xl={3} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <FontAwesomeIcon icon={faHome} className="me-3" /> Media Player App
              </h6>
              <p>
                Enjoy seamless music, videos, and podcasts on the go. Our app lets you play, organize, and discover media with ease.
              </p>
            </Col>

            {/* Features Links */}
            <Col md={2} lg={2} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Features</h6>
              <p><a href="#!" className="text-reset">Music Streaming</a></p>
              <p><a href="#!" className="text-reset">Video Playback</a></p>
              <p><a href="#!" className="text-reset">Podcast Support</a></p>
              <p><a href="#!" className="text-reset">Offline Mode</a></p>
            </Col>

            {/* Quick Links */}
            <Col md={3} lg={2} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
              <p><a href="#!" className="text-reset">About Us</a></p>
              <p><a href="#!" className="text-reset">Help & Support</a></p>
              <p><a href="#!" className="text-reset">Terms of Service</a></p>
              <p><a href="#!" className="text-reset">Privacy Policy</a></p>
            </Col>

            {/* Contact Information */}
            <Col md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><FontAwesomeIcon icon={faHome} className="me-3" /> 123 Music Street, New York, NY</p>
              <p><FontAwesomeIcon icon={faEnvelope} className="me-3" /> support@mediaplayer.com</p>
              <p><FontAwesomeIcon icon={faPhone} className="me-3" /> +1 800 123 4567</p>
              <p><FontAwesomeIcon icon={faPrint} className="me-3" /> +1 800 765 4321</p>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section: Links */}

      {/* Copyright - Updated with bg-black and mt-4 */}
      <div className="text-center p-4 bg-black text-white mt-3">
        © 2024 Media Player. All rights reserved.
      </div>
      {/* Copyright */}

      {/* Section Below Footer with Black Background */}

      <div className="bg-black text-white p-2 " style={{ border: '1px solid #fff', borderRadius: '4px' }}>
        <Container className="text-center">
          <p>Thank you for visiting our Media Player website. Enjoy your media experience!</p>
        </Container>
      </div>
      {/* Thank you section with border */}
    </footer>
  );
}

export default Footer;
