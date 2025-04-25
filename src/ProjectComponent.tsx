import { Launch } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { CSSProperties } from "react";
import githubImg from "./img/github.png";
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
      <style>
        {`
          @media (max-width: 1200px) {
            .responsiveText {
              font-size: 18px !important;
            }
            .responsiveTitle: {
              font-size: 36px !important;
            }
          }

          @media (max-width: 992px) {
            .responsiveText {
              font-size: 16px !important;
            }
            .responsiveTitle: {
              font-size: 36px !important;
            }
          }

          @media (max-width: 768px) {
            .responsiveText {
              font-size: 14px !important;
            }
            .responsiveTitle: {
              font-size: 36px !important;
            }
          }

          @media (max-width: 576px) {
            .responsiveText {
              font-size: 12px !important;
            }
            .responsiveTitle: {
              font-size: 36px !important;
            }
          }
        `}
      </style>
      <div style={outerStyle}>
        <div style={innerStyle}>
          <div style={projectTextStyle}>
            <div style={projectTextDescriptionStyle} className="responsiveText">
              <h1 className="responsiveTitles">
                {title} <i>{titleItalic}</i>
              </h1>
              <h3 style={{ marginTop: -5 }}>{workedOnRange}</h3>
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
          </div>
        </div>
        <div>
          {title === "GENERATIVE METHOD PROJECTS" ? (
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
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectComponent;

//   {
//     "title": "",
//     "titleItalic": "",
//     "detail": "",
//     "outlineColor": "",
//     "mainColor": "",
//     "launchURL": "",
//     "githubURL": "",
//     "languages": ""
//   }
