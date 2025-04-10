import {
  STUDENT_DATA_KEY,
  FEEDBACK_STORAGE_KEY,
} from "../services/utilService";
import { Settings } from "./Settings";

export function Header({ isFilesUploaded }: { isFilesUploaded: boolean }) {
  const handleClearStorage = () => {
    localStorage.removeItem(STUDENT_DATA_KEY);
    localStorage.removeItem(FEEDBACK_STORAGE_KEY);
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
        <div style={{ display: "flex", gap: "10px" }}>
          <Settings />
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
        </div>
      )}
    </section>
  );
}
