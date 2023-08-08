import React from 'react';
import './App.css';
import image1 from '../src/images/7uzk74.gif';
import image2 from '../src/images/7uzk9k.gif';
import image3 from '../src/images/7uzknz.gif';
import image4 from '../src/images/7uzjbk (1).gif';
import image5 from '../src/images/7uzknz.gif';
import image6 from '../src/images/r7.jpg';
import image7 from '../src/images/r5.webp';
import image8 from '../src/images/r1.avif';
import image9 from '../src/images/oauai3.webp';
import image10 from '../src/images/brain.jpg';
import logo from '../src/images/logo.jpg'



function handleDownload() {
  var link = document.createElement("a");
  link.href = "./oauguide.pdf"; // Replace with the actual file path

  link.download = "oauguide.pdf";
  link.target = "_blank";

  link.click();
}   


const App = () => {
  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item"><a href="#whyus">Register Now</a></li>
            <li className="navbar-item"><a href="#description">Description</a></li>
            <li className="navbar-item"><a href="#highlights">Highlights</a></li>
            <li className="navbar-item"><a href="#eligibility">Eligibility</a></li>
            <li className="navbar-item"><a href="#guidelines">Guidelines</a></li>
          </ul>
        </nav>
      
        <div className="header-content">
          <h1>Ignite Innovation</h1>
          <h3>The Ultimate Student Design Competition</h3>
        </div>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </header>
      
      <a href="#description" class="cta-button">Learn More</a>
      <section>
        <div className="image-container">
          <img className="image" src={image1} alt="Image 1" />
        </div>
        <div className="image-container">
          <img className="image" src={image2} alt="Image 2" />
        </div>
        <div className="image-container">
          <img className="image" src={image3} alt="Image 3" />
        </div>
        <div className="image-container">
          <img className="image" src={image4} alt="Image 4" />
        </div>
        <div className="image-container">
          <img className="image" src={image5} alt="Image 5" />
        </div>
        {/* ... (other image containers) ... */}
      </section>
  
      <section className="section cream-bg">
        <div className="content">
          <div className="image-container" id="description">
            <img src={image7} alt="Description" />
          </div>
          <div className="text-container" id="move" >
            <h2><span>Description</span></h2>
                <h3><small><span>Announcing the EEE OAU Innovation Competition 2023, a platform for aspiring Electronic and Electrical Engineering innovators to showcase product concepts and physical prototypes.Student teams have the opportunity to compete for a share of the N1 million prize pool and present before industry leaders and esteemed professors.</span></small></h3>
                <a href="#highlights" class="cta-button">Read More</a>
          </div>
        </div>
      </section>

      <section className="section">
      <div className="content" id="highlights">
      <div className="text-container" id="move">
            <h2><span>Highlights</span></h2>
            <ul>
                    <li>
                        <p><b><span>Innovative Solutions:</span></b> <small><span>Participants will tackle real-world engineering   challenges, showcasing ingenious and industry-revolutionizing ideas.</span></small>
                    </p></li>
                    <li>
                       <p><b><span>Design and Prototyping:</span></b> <small><span>Creativity and engineering skills will be put to the test to develop cutting-edge product concepts and physical prototypes.</span></small></p> 
                    </li>
                    <li>
                       <p><b><span>Entrepreneurial Pitch:</span></b><small><span>Projects will be presented to industry experts and potential investors, with opportunities to turn ideas into reality.</span></small></p>  
                    </li>
                    <li>
                        <p><b><span>Vision Showcase:</span></b><small><span>Prototypes will be demonstrated to gain valuable feedback and recognition from industry leaders and professors.</span></small> </p>
                    </li>
                    <li>
                      <p><b><span>Interdisciplinary Collaboration:</span></b><small><span>Teams will be formed, led by EEE students, and supported by diverse expertise from various fields, fostering networking opportunities.</span></small> </p>  
                    </li>
                    <li>
                      <p><b><span>Prizes and Opportunities:</span> </b><small><span>Winners will receive cash prizes, internships, and other incentives to kick-start their engineering journey.</span></small></p>  
                    </li>
                </ul>
                <a href="#eligibility" class="cta-button">Read More</a>
          </div>
          <div className="image-container" id="description">
            <img src={image9} alt="Description" />
          </div>
          
        </div>
      </section>
      
      <section className="section cream-bg">
        <div className="content">
          <div className="image-container" id="eligibility">
            <img src={image8} alt="Eligibility" />
          </div>
          <div className="text-container" id="move">
            <h2><span>Eligibility</span></h2>
            <p><span>All teams musr have an EE student as the team leader.Supporting students can be from any discipline across the university (undergraduate to graduate studies).</span></p>
            <a href="#guidelines" class="cta-button">Read More</a>
          </div>
        </div>
      </section>
      
      <section className="section">
          <div className="content">
            <div className="text-container" id="move">
              <h2><span>Guidelines</span></h2>
              <p><span>Have questions? Contact us for more information.</span></p>
              <div id="go">
                <button id="download" onClick={handleDownload}>Download</button><br />
                <a href="#whyus" className="cta-button">Read More</a>
              </div>
            </div>
            <div className="image-container" id="guidelines">
              <img src={image10} alt="Guidelines" />
            </div>
          </div>
          
      </section>
      
      <section className="section" style={{ marginTop: '100px' }}>
        <div className="content">
          <div className="image-container" id="whyus">
            <img src={image6} alt="Register Now" />
          </div>
          <div className="text-container" id="move">
            <h2><span>Why Us</span></h2><br></br>
            <ul>
                <li><p><span>Unlock your potential involvement in product development and innovation.</span></p></li>
                <li><p><span>Collaborate with a diverse group of skilled peers to enhance your network.</span></p></li>
                <li><p><span>Benefit from the guidance of industry experts and esteemed professors.</span></p></li>

            </ul>
            
            <a href="#description" class="cta-button">Register Now!</a>
          </div>
        </div>
      </section>
      <section id="contact" class="section">
        <div class="section-content">
            <h2>Contact Us</h2>
            <p>If you have any questions, feel free to reach out...</p>
        </div>
      </section>
      <footer>
        
        <p>&copy; 2023 OAU Ignite Innovation</p>
    </footer>

    <script src="script.js"></script>
    </div>
  );
};

export default App;
