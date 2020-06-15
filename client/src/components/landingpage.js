import React, {Component} from 'react';
import {Container, Col} from 'react-bootstrap';
import PulseText from 'react-pulse-text';
import '../App.css';

class Landing extends Component {
  render() {
    const renderText = (currentText, nextLetter, currentRawText) => (
      nextLetter 
      ? currentRawText + nextLetter + (currentText.length % 2 === 0 ? '_' : '')
      : ''
  );

    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Container className="landing-grid">
          <Col md={12}>
            <img
              src="../images/avatar.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
      <PulseText text="Austine Gomez"  duration={5000}iterationCount={1} renderText={renderText}>
              <h1>Austine Gomez</h1>
      </PulseText>
              <h3 className="title">Full Stack Web Developer</h3>
              <p>HTML/CSS | Javascript | NodeJS</p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/austine-gomez/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                <a
                  href="https://github.com/agomez99"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                <a
                  href="https://www.freecodecamp.org/agomez99"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>
                <a
                  href="https://twitter.com/austine_gomez"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>

              </div>
            </div>
          </Col>
        </Container>
      </div>
    );
  }
}

export default Landing;