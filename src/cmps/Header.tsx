import { STUDENT_DATA_KEY } from "../services/utils";

export function Header({ isFilesUploaded }: { isFilesUploaded: boolean }) {
  const handleClearStorage = () => {
    localStorage.removeItem(STUDENT_DATA_KEY);
    window.location.reload();
  };

  return (
    <section
      style={{
        textAlign: "left",
        borderBottom: "1px solid #E5E7EB",
        paddingLeft: "32px",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 32px",
      }}
    >
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          margin: "0",
          padding: "10px",
        }}
      >
        ExRunner Code Review
      </h1>

      {isFilesUploaded && (
        <button
          onClick={handleClearStorage}
          style={{
            padding: "8px 16px",
            backgroundColor: "#EF4444",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          Clear Assignments
        </button>
      )}
    </section>
  );
}
