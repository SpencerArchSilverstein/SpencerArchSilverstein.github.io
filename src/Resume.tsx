import React from "react";
import DownloadButton from "./DownloadButton";
export function Resume({}) {
  return (
    <div className="resume">
      <h1 className="resume-text-cont">
        RESUME <DownloadButton />
      </h1>
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
  );
}
