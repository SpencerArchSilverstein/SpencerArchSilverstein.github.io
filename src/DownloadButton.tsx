import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

export default function DownloadButton() {
  return (
    <Button
      href="https://docs.google.com/document/d/1TZ94vJ86ezDk802_8kvySViTC5WGqL4WUzpNV3gkeP4/export?format=pdf"
      download="ArchSilversteinResume.pdf"
      startIcon={<DownloadIcon sx={{ fontSize: 60, color: "#CCCCCC" }} />}
      style={{ width: "100%", height: 100 }}
      id="download-resume"
    ></Button>
  );
}
