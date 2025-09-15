import NYSCF_LOR from "./img/NYSCF_LOR.pdf";

export function LettersOfRecommendation() {
  const LOR = (lor: any) => {
    return (
      <iframe
        src={NYSCF_LOR}
        style={{
          flex: "1 1 45%",
          minWidth: "320px",
          // slightly smaller than typical mobile
          maxWidth: "600px",
          height: "50rem",
          border: "1px solid #ccc",
        }}
      />
    );
  };
  return (
    <>
      <hr style={{ marginTop: 30, marginLeft: "5%", marginRight: "5%" }} />
      <h1
        className="resume-text-cont"
        style={{
          marginTop: 40,
        }}
      >
        LETTERS OF RECOMMENDATION
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "20px",
          padding: 30,
        }}
      >
        <LOR lor={NYSCF_LOR} />
      </div>
    </>
  );
}
