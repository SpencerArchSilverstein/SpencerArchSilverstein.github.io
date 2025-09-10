import { useState, FC } from "react";
import { Button, Snackbar, Alert } from "@mui/material";

interface SocialLinksProps {
  linkedInImg: string;
  githubImg: string;
  mailImg: string;
}

const SocialLinks: FC<SocialLinksProps> = ({
  linkedInImg,
  githubImg,
  mailImg,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("archsilverstein@gmail.com");
    setCopied(true);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.5rem",
          alignItems: "center",
          marginTop: "-4rem",
        }}
      >
        <Button
          href="https://www.linkedin.com/in/spencer-silverstein/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedInImg} alt="LinkedIn" className="company-logos" />
        </Button>

        <Button
          href="https://github.com/SpencerArchSilverstein"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubImg} alt="GitHub" className="company-logos" />
        </Button>

        <Button onClick={handleCopyEmail}>
          <img
            src={mailImg}
            alt="Email"
            className="company-logos"
            style={{ width: 70, height: 70 }}
          />
        </Button>
      </div>

      <Snackbar
        open={copied}
        autoHideDuration={3000}
        onClose={() => setCopied(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity="success"
          onClose={() => setCopied(false)}
          sx={{ width: "100%" }}
        >
          Email copied to clipboard!
        </Alert>
      </Snackbar>
    </>
  );
};

export default SocialLinks;
