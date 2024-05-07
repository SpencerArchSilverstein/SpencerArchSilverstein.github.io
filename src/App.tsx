import React from 'react';
import './App.css';
import MyGif from './gif.tsx';


function App() {
  return (
    <div>
        <nav className="navbar">
          <ul>
            <li><a href="https://www.linkedin.com/in/spencer-silverstein" 
          target="_blank" 
          rel="noopener noreferrer">Home</a></li>
          <li><a href="https://www.linkedin.com/in/spencer-silverstein" 
          target="_blank" 
          rel="noopener noreferrer">Bio</a></li>
          
          <li><a href="https://www.linkedin.com/in/spencer-silverstein" 
          target="_blank" 
          rel="noopener noreferrer">Projects</a></li>
          <li><a href="https://www.linkedin.com/in/spencer-silverstein" 
          target="_blank" 
          rel="noopener noreferrer">Contact</a></li>
          </ul>
        </nav>
        <div id="main" style={{marginTop:"0px"}}>
          <div id="pic">
          <img className="pic"
            src={"/imgs/SpencerArchSilversteinPhoto3.png"}
            alt="Profile"
            ></img>
            <div id="social-container">
          <a href="https://www.linkedin.com/in/spencer-silverstein" 
          target="_blank" 
          rel="noopener noreferrer">
          <img
            className="icon"
            src={"/imgs/linkedin_img.png"}
            alt="My LinkedIn Profile"
          />
          </a>

          <a href="https://github.com/SpencerArchSilverstein" 
          target="_blank" 
          rel="noopener noreferrer">
           <img
            className="icon"
            src={"/imgs/github.png"}
            alt="My GitHub Profile"
          />
          </a>

          <a href="https://www.google.com/search?q=google&oq=google++&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhBMgYIAhBFGDwyBggDEEUYPDIGCAQQRRg8MgYIBRBFGEEyBggGEEUYQTIGCAcQRRg80gEIMTg1NWowajeoAgiwAgE&sourceid=chrome&ie=UTF-8" 
          id="copyEmailLink"><img
            className="icon"
            src={"/imgs/mail.png"}
            alt="Copy Email Button"
          />
        </a>
        </div>

          </div>
            
            
         
          <div className="welcome-text">
            <b>Hello! My name is</b> 
            <br></br>
            <br></br>
            <b className="name-text">Arch Silverstein</b>
            <br></br>
            <br></br>
            
            <b>Northwestern University '25</b>
          </div>

        </div>
        <div className="main2">
        </div>
        <div className="bio">
            <h1>ABOUT ME</h1>

            <p>Hello! My name is Spencer Arch Silverstein, but I go by Arch. I am a current Junior 
              at Northwestern University majoring a Bachelor of Science Computer Science 
              and a Minor in Data Science</p>
        </div>

          <MyGif></MyGif>
        
        



    </div>
    
  );
}

export default App;
