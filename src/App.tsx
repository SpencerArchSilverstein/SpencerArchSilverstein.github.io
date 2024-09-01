import React, { useEffect } from "react";
import "./App.css";
import profilePic from "./img/profilepic.png";
import linkedInImg from "./img/linkedin_img.png";
import githubImg from "./img/github.png";
import mailImg from "./img/mailImg.png";
import { Button, Grid, Alert, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Launch } from "@mui/icons-material";
import ProjectComponent from "./ProjectComponent";
import projectData from "./projectData.json";
import MyGif from "./Glitch";
import { useState } from "react";
import Resume from "./Resume.png";
import DownloadIcon from "@mui/icons-material/Download";

function App() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [glitchBool, setGlitchBool] = useState(false);
  //About Me
  //Resume (Work Experience, Project Experience)
  //Technical Skills
  //Contact Me

  useEffect(() => {});

  return (
    <>
      <div className="intro-cont">
        <div>
          <img src={profilePic} alt="ProfilePic" className="intro-img" />
        </div>
        <div className="into-text">
          <h1 className="hi-im-arch">Hi, I'm Arch.</h1>
          <h2>Software Engineer | Full Stack Developer | Game Developer</h2>
          <Grid
            container
            spacing={10}
            justifyContent="left"
            alignItems="center"
          >
            <Grid item xs={1} md={0}>
              <Button
                style={{ height: 60, width: 10 }}
                href="https://www.linkedin.com/in/spencer-silverstein/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedInImg}
                  alt="LinkedIn"
                  className="company-logos"
                />
              </Button>
            </Grid>
            <Grid item xs={1} md={0}>
              <Button
                style={{ height: 60, width: 10 }}
                href="https://github.com/SpencerArchSilverstein"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubImg} alt="LinkedIn" className="company-logos" />
              </Button>
            </Grid>
            <Grid item xs={1} md={0}>
              <Button
                style={{ height: 60, width: 15 }}
                onClick={() =>
                  navigator.clipboard.writeText("archsilverstein@gmail.com")
                }
              >
                <img src={mailImg} alt="LinkedIn" className="company-logos" />
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
      <h1 className="project-title">PROJECTS</h1>
      <>
        {projectData.map((proj, index) => (
          <>
            {proj.projectType === "Gen" ? (
              <ProjectComponent
                title={proj.title}
                titleItalic={proj.titleItalic}
                detail={proj.detail}
                outlineColor={proj.outlineColor}
                mainColor={proj.mainColor}
                launchURL={proj.launchURL}
                githubURL={proj.githubURL}
                languages={proj.languages}
              />
            ) : (
              <></>
            )}
          </>
        ))}
      </>
      <h1 className="project-title">DESIGN PORTFOLIO</h1>
      <>
        {projectData.map((proj, index) => (
          <>
            {proj.projectType === "Game" ? (
              <ProjectComponent
                title={proj.title}
                titleItalic={proj.titleItalic}
                detail={proj.detail}
                outlineColor={proj.outlineColor}
                mainColor={proj.mainColor}
                launchURL={proj.launchURL}
                githubURL={proj.githubURL}
                languages={proj.languages}
              />
            ) : (
              <></>
            )}
          </>
        ))}
      </>

      <div className="resume">
        <h1>RESUME</h1>
        <Button>
          <DownloadIcon fontSize={"large"}></DownloadIcon>
        </Button>
        <img src={Resume} alt="Resume"></img>
      </div>
    </>
  );
}

export default App;
