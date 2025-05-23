import React, { useEffect } from "react";
import "./App.css";
import profilePic from "./img/profilepic.png";
import linkedInImg from "./img/linkedin_img.png";
import githubImg from "./img/github.png";
import mailImg from "./img/mailImg.png";
import DownloadButton from "./DownloadButton";
import {
  Button,
  Grid,
  Alert,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
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
  // const [glitchBool, setGlitchBool] = useState(false);
  const [copied, setCopied] = useState(false);
  function copyEmail() {}
  function handleCopyEmailClosed() {
    setCopied(false);
  }
  //About Me
  //Resume (Work Experience, Project Experience)
  //Technical Skills
  //Contact Me

  // useEffect(() => {});

  return (
    <>
      <div className="intro-cont">
        <div className="into-text">
          <h1 className="hi-im-arch">
            <img src={profilePic} alt="ProfilePic" className="intro-img" />
            Hi, I'm Arch.
          </h1>
          <h2>Software Engineer | Full Stack Developer | Game Developer</h2>
          <h3>
            I specialize in the following languages/libraries: React,
            Typescript, Tailwind, CSS, Node.js, Google Cloud, AWS, SQL, GraphQL,
            HTML, JavaScript, Python, R, RStudio, C, C++, GitHub, C#, Unity,
            Docker, Numpy
          </h3>
          <h3>
            I have taken relevant coursework in the following topics: Full Stack
            Development, Machine/Deep Learning, Machine Perception of Audio, AI
            APIs, Generative Methods, Relational Databases, AGILE, Game Design
          </h3>
          <h3>
            Contact me below through the means below if you have any questions
            about my work!
          </h3>
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
                onClick={() => {
                  navigator.clipboard.writeText("archsilverstein@gmail.com");
                  setCopied(true);
                }}
              >
                <img src={mailImg} alt="LinkedIn " className="company-logos" />
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
      <Dialog
        open={copied}
        onClose={handleCopyEmailClosed}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            mx: 5,
            mt: 0,
            width: 400,
            backgroundColor: "rgba(255, 255, 255, 0.85)",
          },
        }}
      >
        <DialogTitle sx={{ textAlign: "center", fontSize: "2rem" }}>
          EMAIL COPIED TO CLIPBOARD
        </DialogTitle>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button
            onClick={handleCopyEmailClosed}
            variant="contained"
            sx={{ backgroundColor: "black", color: "white" }}
          >
            Return To Page
          </Button>
        </DialogActions>
      </Dialog>
      <h1 className="project-title">PROJECTS</h1>
      <>
        {projectData.map((proj, index) => (
          <>
            {proj.projectType === "Gen" && (
              <ProjectComponent
                title={proj.title}
                titleItalic={proj.titleItalic}
                detail={proj.detail}
                outlineColor={proj.outlineColor}
                mainColor={proj.mainColor}
                launchURL={proj.launchURL}
                githubURL={proj.githubURL}
                languages={proj.languages}
                workedOnRange={proj.workedOnRange}
              />
            )}
          </>
        ))}
      </>
      <h1 className="project-title">DESIGN PORTFOLIO</h1>
      <>
        {projectData.map((proj, index) => (
          <>
            {proj.projectType === "Game" && (
              <ProjectComponent
                title={proj.title}
                titleItalic={proj.titleItalic}
                detail={proj.detail}
                outlineColor={proj.outlineColor}
                mainColor={proj.mainColor}
                launchURL={proj.launchURL}
                githubURL={proj.githubURL}
                languages={proj.languages}
                workedOnRange={proj.workedOnRange}
              />
            )}
          </>
        ))}
      </>

      <div className="resume">
        <div className="resume-text-cont">
          <h1>
            RESUME <DownloadButton />
          </h1>
        </div>
        <img src={Resume} alt="Resume"></img>
      </div>
    </>
  );
}

export default App;
