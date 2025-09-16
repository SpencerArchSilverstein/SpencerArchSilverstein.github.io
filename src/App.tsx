import { LettersOfRecommendation } from "./LettersOfRecommendation";
import { Resume } from "./Resume";
import ProjectsOrRelevantExperience from "./Projects";
import React, { useEffect } from "react";
import "./App.css";

import DownloadButton from "./DownloadButton";

import Intro from "./Intro";

function App() {
  // const [glitchBool, setGlitchBool] = useState(false);

  //About Me
  //Resume (Work Experience, Project Experience)
  //Technical Skills
  //Contact Me

  return (
    <div
      style={{
        background: "#202020",
        color: "#CCCCCC",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Intro />
      <ProjectsOrRelevantExperience projOrRelevExp={"Project"} />
      <hr style={{ marginTop: 30, marginLeft: "5%", marginRight: "5%" }} />
      <ProjectsOrRelevantExperience projOrRelevExp={"Relevant Experience"} />
      <hr style={{ marginTop: 30, marginLeft: "5%", marginRight: "5%" }} />
      <Resume />
      <LettersOfRecommendation />
    </div>
  );
}

export default App;
