import { Launch } from "@mui/icons-material";
import { Button, Card, Chip } from "@mui/material";
import React, { CSSProperties } from "react";
import githubImg from "./img/graygithub.png";
import MyGif from "./Glitch";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

type TechKey =
  | "React"
  | "JavaScript"
  | "TypeScript"
  | "MaterialUI"
  | "Google Cloud"
  | "GitHub"
  | "GitHub Pages"
  | "AI APIs"
  | "Client-Based Project"
  | "AWS (S3/RDS/Lambda)"
  | "R/RStudio (ShinyGG)"
  | "YouTube API";

type TechColor = { label: string; color: string };

const techColors: Record<TechKey, TechColor> = {
  React: { label: "React", color: "#61DBFB" },
  JavaScript: { label: "JavaScript", color: "#F7DF1E" },
  TypeScript: { label: "TypeScript", color: "#3178C6" },
  MaterialUI: { label: "MaterialUI", color: "#007FFF" },
  "Google Cloud": { label: "Google Cloud", color: "#FBBC05" },
  GitHub: { label: "GitHub", color: "#333" },
  "GitHub Pages": { label: "GitHub Pages", color: "#181717" },
  "AI APIs": { label: "AI APIs", color: "#9C27B0" },
  "Client-Based Project": { label: "Client-Based Project", color: "#4CAF50" },
  "AWS (S3/RDS/Lambda)": { label: "AWS (S3/RDS/Lambda)", color: "#FF9900" },
  "R/RStudio (ShinyGG)": { label: "R/RStudio (Shiny GG)", color: "#6C757D" },
  "YouTube API": { label: "YouTube API", color: "#FF0000" },
};

interface ProjectComponentProps {
  title?: string;
  detail: string;
  launchURL?: string;
  githubURL?: string;
  languages?: TechKey[];
  workedOnRange?: string;
  projectType: string;
  location?: string;
  workDetails?: string[];
}

const ProjectComponent: React.FC<ProjectComponentProps> = ({
  title,
  detail,
  launchURL,
  githubURL,
  languages,
  workedOnRange,
  projectType,
  location,
  workDetails,
}) => {
  const openLink = (url: string) => window.open(url, "_blank");

  const projectTextTitleContStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  };

  const responsiveStyle: CSSProperties = { fontSize: 20 };

  return (
    <>
      <Card
        style={{
          background: "#404040",
          color: "#CCCCCC",
          margin: 10,
          padding: 20,
          width: projectType == "Relevant Experience" ? "50%" : 325,
        }}
      >
        <div>
          {projectType == "Project" && <h1>{title}</h1>}
          {projectType == "Relevant Experience" && (
            <h2 style={{ marginTop: -5 }}>
              {title} @ {location}
            </h2>
          )}
          {projectType == "Project" && (
            <h4 style={{ marginTop: -10 }}>{workedOnRange}</h4>
          )}

          <ul>
            {workDetails &&
              workDetails.map((bulletPoint: string) => {
                return <li>{bulletPoint}</li>;
              })}
          </ul>
        </div>

        <div style={{ marginTop: 10 }}>
          {projectType == "Project" && (
            <h2 style={responsiveStyle}>{detail}</h2>
          )}
          {languages && (
            <div
              style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
                marginTop: 25,
                marginBottom: 25,
              }}
            >
              {languages.map((item) => {
                const tech = techColors[item];
                if (!tech) return null;

                return (
                  <Chip
                    key={item}
                    label={tech.label}
                    style={{
                      backgroundColor: tech.color + "CC",
                      color: "#fff",
                      fontWeight: "bold",
                      cursor: "pointer",
                      transition: "transform 0.2s ease, filter 0.2s ease",
                    }}
                  />
                );
              })}
            </div>
          )}
        </div>

        <div style={projectTextTitleContStyle}>
          {launchURL && (
            <Launch
              sx={{ fontSize: 50, cursor: "pointer" }}
              onClick={() => openLink(launchURL)}
            />
          )}
          {githubURL && (
            <Button
              href={githubURL}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ height: 60, width: 60 }}
            >
              <img
                src={githubImg}
                alt="GitHub"
                style={{ width: "100%", height: "auto" }}
              />
            </Button>
          )}
        </div>
      </Card>
    </>
  );
};

export default ProjectComponent;
