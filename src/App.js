import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import { FiPhoneCall } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import './fonts/GreatVibes-Regular.ttf';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Tony Padilla</h1>
          <nav>
            <ul>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <section id="experience">
            <h2>Experience</h2>
            <ul>
              <li>Insurance Agent - Farmers Insurance (Nov 2021 - Current)</li>
              <li>Lead Supervisor - UPS (Oct 2018 - Aug 2020)</li>
              <li>Technology Designer I - AlfaTech (Feb 2017 - Jun 2017)</li>
            </ul>
          </section>
          <section id="skills">
            <h2>Skills</h2>
            <ul>
              <li>Javascript</li>
              <li>React</li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>Node.js</li>
              <li>Redux</li>
              <li>jQuery</li>
              <li>Git</li>
              <li>Python</li>
              <li>C</li>
            </ul>
          </section>
          <section id="projects">
            <h2>Projects</h2>
            <ul>
              <li><a href="https://www.theconnect5.com">Connect 5</a> - Local two-player game based on the Japanese board game Gomoku. (Javascript, React, HTML5, Node.js)</li>
              <li><a href="https://github.com/VaineHertz/Wireframe-Renderer">Wireframe Renderer</a> - Program that renders a map file as a wireframe. (C)</li>
              <li><a href="https://github.com/VaineHertz/fractals">Fractals Renderer</a> - Renders different fractal types and has options to zoom and continuously calculate the chosen fractal. (C)</li>
            </ul>
          </section>
          <section id="education">
            <h2>Education</h2>
            <ul>
              <li>42 University, Fremont, CA (2017)</li>
              <li>Modesto Junior College, Modesto, CA (Aug 2014 - Current)</li>
            </ul>
          </section>
        </main>
        <footer>
          <p>&copy; 2023 Tony Padilla</p>
          <nav>
            <ul>
              <li><a href="mailto:me@tonypadilla.us">Contact</a></li>
              <li><a href="https://www.linkedin.com/in/tony-padilla-1a6ba958/">LinkedIn</a></li>
              <li><a href="https://github.com/VaineHertz">GitHub</a></li>
            </ul>
          </nav>
        </footer>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
