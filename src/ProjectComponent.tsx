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

  const getCardStyle = (): CSSProperties => {
    const baseStyle: CSSProperties = {
      background: "#404040",
      color: "#CCCCCC",
      padding: 20,
      display: "flex",
      flexDirection: "column",
    };

    if (projectType === "Relevant Experience") {
      return {
        ...baseStyle,
        width: "100%",
        margin: "10px 0 10px 0",
        // minHeight: "300px",
        maxWidth: "none",
      };
    }

    return {
      ...baseStyle,
      margin: 10,
      width: 325,
    };
  };

  const containerStyle: CSSProperties =
    projectType === "Relevant Experience"
      ? {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }
      : {};

  const contentContainerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  return (
    <div style={containerStyle}>
      <Card style={getCardStyle()}>
        <div style={contentContainerStyle}>
          <div>
            {projectType === "Project" && <h1>{title}</h1>}
            {projectType === "Relevant Experience" && (
              <h2 style={{ marginTop: -5 }}>
                {title} @ {location}
              </h2>
            )}

            <h4
              style={{
                marginTop: projectType === "Relevant Experience" ? -15 : -10,
              }}
            >
              {workedOnRange}
            </h4>

            <ul style={{ flexGrow: 1 }}>
              {workDetails &&
                workDetails.map((bulletPoint: string, index: number) => {
                  return (
                    <li
                      key={index}
                      dangerouslySetInnerHTML={{ __html: bulletPoint }}
                    ></li>
                  );
                })}
            </ul>
          </div>

          <div style={{ marginTop: 10 }}>
            {projectType === "Project" && (
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
              <div
                style={{
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Button sx={{ backgroundColor: "" }}>
                  <Launch
                    sx={{ fontSize: 50, cursor: "pointer", color: "#CCCCCC" }}
                    onClick={() => openLink(launchURL)}
                  />
                </Button>
                <h5 style={{ marginTop: 0 }}>Website</h5>
              </div>
            )}
            {title === "ASK AN AI" && (
              <div
                style={{
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  marginRight: -15,
                  marginLeft: -15,
                }}
              >
                <Button disabled sx={{ opacity: 0.5, cursor: "not-allowed" }}>
                  <Launch
                    sx={{ fontSize: 50, cursor: "pointer", color: "#cccccc" }}
                  />
                </Button>
                <h5
                  style={{
                    marginTop: 0,
                    color: "#b3b3b3",
                    width: 100,
                    textAlign: "center",
                  }}
                >
                  No Site
                </h5>
              </div>
            )}
            {githubURL && (
              <div
                style={{
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
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
                <h5 style={{ marginTop: 0 }}>Code</h5>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectComponent;
