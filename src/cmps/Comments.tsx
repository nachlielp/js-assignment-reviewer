import React from "react";

export function Comments() {
  // Initialize state with the default value
  const [notes, setNotes] = React.useState("נחליאל - ");

  const handleCopy = () => {
    navigator.clipboard
      .writeText(notes)
      .then(() => {
        alert("Note copied!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="notes-container">
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="notes-textarea"
        rows={10}
        dir="rtl"
      />
      <button onClick={handleCopy} className="copy-button">
        Copy Text
      </button>
    </div>
  );
}
