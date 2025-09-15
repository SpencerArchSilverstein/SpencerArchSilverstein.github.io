import profilePic from "./img/profilepic3.png";
import linkedInImg from "./img/graylinkedin.png";
import githubImg from "./img/graygithub.png";
import mailImg from "./img/graymail.png";
import ContactMe from "./ContactMe";
export default function Intro() {
  return (
    <>
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
            <h2 style={{ textAlign: "center" }}>
              SWE | Full Stack Developer | Northwestern '25
            </h2>
            <h3 style={{ marginTop: -5, textAlign: "center" }}>
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
      <hr style={{ marginTop: 10, marginLeft: "5%", marginRight: "5%" }} />
    </>
  );
}
