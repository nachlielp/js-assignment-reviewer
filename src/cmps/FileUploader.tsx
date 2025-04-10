import { ChangeEvent } from "react";
import "./../App.css";
interface FileUploaderProps {
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function FileUploader({ onFileChange }: FileUploaderProps) {
  return (
    <div className="section">
      <h2 style={{ marginBottom: "1rem", marginTop: "0" }}>
        Upload Student Submissions
      </h2>
      <div
        className="upload-container"
        style={{
          padding: "2rem",
          border: "2px dashed #ccc",
          borderRadius: "8px",
          textAlign: "center",
          backgroundColor: "#f9fafb",
          position: "relative",
          //   cursor: "pointer",
        }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="#6B7280"
            style={{ margin: "auto" }}
          >
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" />
          </svg>
        </div>
        <div>
          <p style={{ color: "#374151", marginBottom: "0.5rem" }}>
            Drop folder here or click to upload
          </p>
          <p style={{ color: "#6B7280", fontSize: "0.875rem" }}>
            Upload class root submission folder, for example:
            <br />
            <code>CaEveFeb25-ExerciseSubmissions</code>
          </p>
        </div>
        <input
          type="file"
          webkitdirectory="true"
          onChange={onFileChange}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            opacity: 0,
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
}
