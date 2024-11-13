import React from "react";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import pdfFile from "./ArchSilversteinResume.pdf";

function DownloadButton() {
  return (
    <Button
      href={pdfFile}
      download="ArchSilversteinResume.pdf"
      startIcon={<DownloadIcon />}
      style={{ width: 20, height: 50 }}
    ></Button>
  );
}
export default DownloadButton;
