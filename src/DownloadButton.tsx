import React from "react";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import pdfFile from "./ArchSilversteinResume.pdf";

function DownloadButton() {
  return (
    <Button
      href="https://docs.google.com/document/d/1TZ94vJ86ezDk802_8kvySViTC5WGqL4WUzpNV3gkeP4/export?format=pdf"
      download="ArchSilversteinResume.pdf"
      startIcon={<DownloadIcon />}
      style={{ width: 20, height: 50 }}
    ></Button>
  );
}
export default DownloadButton;
