import React from "react";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
function DownloadButton() {
  return (
    <Button
      href="./archsilverstein/src/SpencerArchSilversteinResume.pdf"
      download="SpencerArchSilverstein.pdf"
      startIcon={<DownloadIcon />}
    ></Button>
  );
}
export default DownloadButton;
