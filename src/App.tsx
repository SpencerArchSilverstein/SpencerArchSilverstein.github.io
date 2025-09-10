import React, { useEffect } from "react";
import "./App.css";
import profilePic from "./img/profilepic2.jpg";
import linkedInImg from "./img/linkedin2.png";
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
    <div style={{ background: "#202020", color: "#CCCCCC" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ margin: 40 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={profilePic}
              alt="ProfilePic"
              style={{
                width: 300,
                borderRadius: 50,
                marginTop: 40,
                alignItems: "center",
              }}
            />
            <h1
              className="typewriter"
              style={{ fontSize: 50, textAlign: "center", marginTop: 10 }}
            >
              Hi, I'm Arch
            </h1>
            <h2>SWE | Full Stack Developer | Northwestern '25</h2>
            <h3 style={{ marginTop: -5 }}>
              Specialties: React, Svelte 5, Go, Typescript, Firebase/Firestore
            </h3>
          </div>

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flex: "wrap",
          gap: 10,
        }}
      >
        {projectData.map((proj, index) => (
          <div key={index}>
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
          </div>
        ))}
      </div>
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
    </div>
  );
}

export default App;
