import projectData from "./projectData.json";
import ProjectComponent from "./ProjectComponent";
type propp = {
  projOrRelevExp: string;
};
export default function ProjectsOrRelevantExperience({
  projOrRelevExp,
}: propp) {
  type TechKey =
    | "React"
    | "JavaScript"
    | "MaterialUI"
    | "Google Cloud"
    | "GitHub"
    | "AI APIs"
    | "Client-Based Project"
    | "AWS (S3/RDS/Lambda)"
    | "R/RStudio (ShinyGG)"
    | "YouTube API"
    | "TypeScript"
    | "GitHub Pages";

  return (
    <>
      <h1 className="project-title">
        {projOrRelevExp == "Project" ? "PROJECTS" : "RELEVANT EXPERIENCE"}
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          flex: "wrap",
          //   gap: 10,
        }}
      >
        {projectData.map((proj, index) => (
          <div key={index}>
            {proj.projectType == "Project" && projOrRelevExp == "Project" ? (
              <>
                <ProjectComponent
                  title={proj.title}
                  detail={proj.detail}
                  launchURL={proj.launchURL}
                  githubURL={proj.githubURL}
                  languages={proj.languages as TechKey[]}
                  workedOnRange={proj.workedOnRange}
                  projectType={proj.projectType}
                />
              </>
            ) : (
              proj.projectType == "Relevant Experience" &&
              projOrRelevExp == "Relevant Experience" && (
                <>
                  <ProjectComponent
                    location={proj.location}
                    title={proj.title}
                    detail={proj.detail}
                    workDetails={proj.workDetails}
                    workedOnRange={proj.workedOnRange}
                    projectType={proj.projectType}
                  />
                </>
              )
            )}
          </div>
        ))}
      </div>
    </>
  );
}
