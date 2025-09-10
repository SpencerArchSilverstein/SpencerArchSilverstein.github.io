import React, { useEffect } from "react";
import "./App.css";
import profilePic from "./img/profilepic3.png";
import linkedInImg from "./img/graylinkedin.png";
import githubImg from "./img/graygithub.png";
import mailImg from "./img/graymail.png";
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
import ContactMe from "./ContactMe";
import { relative } from "path";

function App() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  // const [glitchBool, setGlitchBool] = useState(false);

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
            <div
              style={{
                width: 200,
                height: 200,
                overflow: "hidden",
                borderRadius: 50,
                marginTop: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={profilePic}
                alt="ProfilePic"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>

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
        </div>
      </div>
      <ContactMe
        linkedInImg={linkedInImg}
        githubImg={githubImg}
        mailImg={mailImg}
      />
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
      {/* <h1 className="project-title">DESIGN PORTFOLIO</h1>
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
      </> */}

      <div className="resume">
        <div className="resume-text-cont">
          <h1>
            RESUME <DownloadButton />
          </h1>
        </div>
        <div className="flex justify-center items-center h-screen">
          <iframe
            src="https://docs.google.com/document/d/1TZ94vJ86ezDk802_8kvySViTC5WGqL4WUzpNV3gkeP4/edit?usp=sharing"
            style={{
              width: "90vh",
              height: "80vh",
              border: "none",
            }}
            title="Google Doc"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
