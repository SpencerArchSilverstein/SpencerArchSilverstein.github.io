import { Launch } from "@mui/icons-material";
import { Button, Card } from "@mui/material";
import React, { CSSProperties } from "react";
import githubImg from "./img/graygithub.png";
import MyGif from "./Glitch";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface ProjectComponentProps {
  title: string;
  titleItalic?: string;
  detail: string;
  outlineColor: string;
  mainColor: string;
  launchURL?: string;
  githubURL?: string;
  languages?: string;
  projectType?: string;
  workedOnRange?: string;
}

const ProjectComponent: React.FC<ProjectComponentProps> = ({
  title,
  titleItalic,
  detail,
  outlineColor,
  mainColor,
  launchURL,
  githubURL,
  languages,
  projectType,
  workedOnRange,
}: ProjectComponentProps) => {
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  const commonContainerStyle: CSSProperties = {
    margin: "10px auto",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const outerStyle: CSSProperties = {
    ...commonContainerStyle,
    border: `1px solid #${outlineColor}`,
    backgroundColor: `#${outlineColor}`,
    maxWidth: "90%",
  };

  const innerStyle: CSSProperties = {
    ...commonContainerStyle,
    border: `1px solid #${mainColor}`,
    backgroundColor: `#${mainColor}`,
    maxWidth: "100%",
    maxHeight: "100%",
  };

  const projectTextStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const projectTextDescriptionStyle: CSSProperties = {
    width: "60%",
    textAlign: "left",
    paddingLeft: "40px",
    fontSize: "20px",
    paddingTop: "10px",
    paddingBottom: "10px",
  };

  const projectTextTitleContStyle: CSSProperties = {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  };

  const responsiveStyle: CSSProperties = {
    fontSize: "20px",
  };

  return (
    <>
      <Card style={{ maxWidth: 300, background: "#404040", color: "#CCCCCC" }}>
        <div>
          <h1 style={{ textAlign: "center" }}>
            {title} <i>{titleItalic}</i>
          </h1>
          {workedOnRange}
          <div style={projectTextTitleContStyle}>
            {launchURL && (
              <Launch
                sx={{ fontSize: 50, cursor: "pointer", marginRight: 2 }}
                onClick={() => openLink(launchURL)}
              />
            )}
            {githubURL && (
              <Button
                sx={{ height: 60, width: 60, ml: 0 }}
                href={githubURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={githubImg}
                  alt="GitHub"
                  style={{ width: "100%", height: "auto" }}
                />
              </Button>
            )}
          </div>
        </div>
        <div style={{ alignItems: "column", width: "40%" }}>
          <h2 style={responsiveStyle} className="responsiveText">
            {detail}
          </h2>
          {languages && (
            <h2 style={responsiveStyle} className="responsiveText">
              Made in {languages}
            </h2>
          )}
        </div>
      </Card>
      {/*  For now, commenting this out...
      <div>
        {title === "GENERATIVE METHOD PROJECTS" && (
          <Accordion
            sx={{
              backgroundColor: `#${mainColor}`,
              "& .MuiAccordionSummary-root": {
                color: "#FFFFFF",
              },
              "& .MuiAccordionSummary-expandIconWrapper": {
                color: "#FFFFFF",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>PREVIEW OF GENERATIVE METHOD PROJECTS!</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <MyGif />
            </AccordionDetails>
          </Accordion>
        )}
      </div>
       // {
  //   "title": "DUNGEON CRAWLER VIDEOGAME",
  //   "titleItalic": "AphroDIEtie: Fight For Love",
  //   "detail": "Play an exciting top-down dungeon crawler, where you fight different Greek gods and solve challenging puzzels in pursuit of saving your one true love.",
  //   "outlineColor": "c122c9",
  //   "mainColor": "f427ff",
  //   "launchURL": "",
  //   "githubURL": "https://github.com/zoryah-gray/377_Aphrodite_Fight_For_Love",
  //   "languages": "C#, Unity, Aseprite",
  //   "projectType": "Game",
  //   "workedOnRange": ""
  // },
  // {
  //   "title": "GENERATIVE METHOD PROJECTS",
  //   "titleItalic": "",
  //   "detail": "Witness a series of Generative Method Projects utilizing particle effects, face/hand-tracking, ",
  //   "outlineColor": "c122c9",
  //   "mainColor": "f427ff",
  //   "launchURL": "",
  //   "githubURL": "https://github.com/zoryah-gray/377_Aphrodite_Fight_For_Love",
  //   "languages": "JavaScript, Vue, Tracery",
  //   "projectType": "Game",
  //   "workedOnRange": ""
  // }
      
      
      
      */}
    </>
  );
};

export default ProjectComponent;
