import React from "react";
import "../styles/comments.css";

export function Comments() {
  const [notes, setNotes] = React.useState(
    `${localStorage.getItem("hebrewUserName")} - `
  );
  const [isCopying, setIsCopying] = React.useState(false);
  const handleCopy = () => {
    setIsCopying(true);
    navigator.clipboard
      .writeText(notes)
      .then(() => {
        setTimeout(() => {
          setIsCopying(false);
        }, 1000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
        setIsCopying(false);
      });
  };

  const handleClear = () => {
    const userName = localStorage.getItem("hebrewUserName");
    setNotes(`${userName} - `);
  };

  return (
    <div className="section comments-container" style={{ marginLeft: "0px" }}>
      <label className="comments-label">Feedback</label>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="comments-textarea"
        rows={6}
        dir="rtl"
      />
      <div className="comments-controls">
        <button onClick={handleCopy} className="copy-button">
          {isCopying ? "Copied!" : "Copy Feedback"}
        </button>
        <button onClick={handleClear} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
}
