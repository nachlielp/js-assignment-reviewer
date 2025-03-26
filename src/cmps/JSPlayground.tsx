import React, { useState, ChangeEvent, useEffect } from "react";

interface JSPlaygroundProps {
  initialCode: string;
  filename: string;
}

const JSPlayground: React.FC<JSPlaygroundProps> = ({
  initialCode,
  filename,
}) => {
  const [code, setCode] = useState<string>(initialCode);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  const handleCodeChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const textarea = e.currentTarget;
    const { selectionStart, selectionEnd } = textarea;
    const currentCode = textarea.value;

    // Command/Ctrl + / to comment/uncomment
    if ((e.metaKey || e.ctrlKey) && e.key === "/") {
      e.preventDefault();

      // Get the lines and current line number
      const lines = currentCode.split("\n");
      const currentLineIndex =
        currentCode.substring(0, selectionStart).split("\n").length - 1;

      // Toggle comment on the current line
      if (lines[currentLineIndex].trimStart().startsWith("//")) {
        // Remove comment
        lines[currentLineIndex] = lines[currentLineIndex].replace(
          /^\s*\/\/\s?/,
          ""
        );
      } else {
        // Add comment
        lines[currentLineIndex] =
          lines[currentLineIndex].trimStart().length > 0
            ? "// " + lines[currentLineIndex]
            : lines[currentLineIndex];
      }

      const newCode = lines.join("\n");
      setCode(newCode);

      // Restore cursor position
      setTimeout(() => {
        textarea.focus();
        const newPosition =
          newCode.split("\n").slice(0, currentLineIndex).join("\n").length +
          (currentLineIndex > 0 ? 1 : 0) +
          lines[currentLineIndex].length;
        textarea.setSelectionRange(newPosition, newPosition);
      }, 0);
    }

    // Alt + Arrow Up/Down to move lines
    if (e.altKey && (e.key === "ArrowUp" || e.key === "ArrowDown")) {
      e.preventDefault();

      // Get lines and current line index
      const lines = currentCode.split("\n");
      const currentLineIndex =
        currentCode.substring(0, selectionStart).split("\n").length - 1;

      if (e.key === "ArrowUp" && currentLineIndex > 0) {
        // Move line up
        [lines[currentLineIndex - 1], lines[currentLineIndex]] = [
          lines[currentLineIndex],
          lines[currentLineIndex - 1],
        ];

        const newCode = lines.join("\n");
        setCode(newCode);

        // Adjust cursor position to follow the line
        setTimeout(() => {
          textarea.focus();
          const newPosition =
            newCode
              .split("\n")
              .slice(0, currentLineIndex - 1)
              .join("\n").length +
            (currentLineIndex > 1 ? 1 : 0) +
            lines[currentLineIndex - 1].length;
          textarea.setSelectionRange(newPosition, newPosition);
        }, 0);
      } else if (e.key === "ArrowDown" && currentLineIndex < lines.length - 1) {
        // Move line down
        [lines[currentLineIndex], lines[currentLineIndex + 1]] = [
          lines[currentLineIndex + 1],
          lines[currentLineIndex],
        ];

        const newCode = lines.join("\n");
        setCode(newCode);

        // Adjust cursor position to follow the line
        setTimeout(() => {
          textarea.focus();
          const newPosition =
            newCode
              .split("\n")
              .slice(0, currentLineIndex + 1)
              .join("\n").length +
            (currentLineIndex > 0 ? 1 : 0) +
            lines[currentLineIndex + 1].length;
          textarea.setSelectionRange(newPosition, newPosition);
        }, 0);
      }
    }
  };

  const runCode = () => {
    setIsRunning(true);
    setConsoleOutput([]);

    // Create a new function to capture console.log outputs
    const logs: string[] = [];
    const originalConsoleLog = console.log;
    console.log = (...args) => {
      logs.push(
        args
          .map((arg) =>
            typeof arg === "object" ? JSON.stringify(arg) : String(arg)
          )
          .join(" ")
      );
      originalConsoleLog(...args);
    };

    try {
      // Add a timeout to prevent infinite loops
      const MAX_EXECUTION_TIME = 3000; // 5 seconds timeout

      // Create a wrapper that will execute with a timeout
      const executeWithTimeout = () => {
        return new Promise((resolve, reject) => {
          // Set timeout to cancel execution if it takes too long
          const timeoutId = setTimeout(() => {
            reject(
              new Error(
                "Execution timed out after 5 seconds. Your code might contain an infinite loop."
              )
            );
          }, MAX_EXECUTION_TIME);

          try {
            // eslint-disable-next-line no-new-func
            const executableCode = new Function(code);
            const result = executableCode();
            clearTimeout(timeoutId);
            resolve(result);
          } catch (error) {
            clearTimeout(timeoutId);
            reject(error);
          }
        });
      };

      // Execute the code with timeout protection
      executeWithTimeout()
        .then(() => {
          // If execution succeeded, show the logs
          setConsoleOutput(logs);
          setIsRunning(false);
        })
        .catch((error) => {
          // If there was an error, show it in the console output
          setConsoleOutput([
            ...logs,
            `Error: ${error instanceof Error ? error.message : String(error)}`,
          ]);
          setIsRunning(false);
        });
    } catch (error) {
      // Handle any synchronous errors from the setup process
      setConsoleOutput([
        ...logs,
        `Error: ${error instanceof Error ? error.message : String(error)}`,
      ]);

      // Restore the original console.log
      console.log = originalConsoleLog;
      setIsRunning(false);
    }
  };

  return (
    <div className="js-playground">
      <div
        className="js-playground-header"
        style={{
          marginBottom: "10px",
        }}
      >
        <div className="js-playground-controls" style={{ marginTop: "10px" }}>
          <button
            onClick={runCode}
            disabled={isRunning}
            style={{
              padding: "8px 16px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: isRunning ? "not-allowed" : "pointer",
              opacity: isRunning ? 0.7 : 1,
            }}
          >
            {isRunning ? "Running..." : "Run Code"}
          </button>
        </div>
      </div>

      <div
        className="js-playground-header"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "start",
          width: "100%",
        }}
      >
        <textarea
          className="js-playground-editor"
          value={code}
          onChange={handleCodeChange}
          onKeyDown={handleKeyDown}
          style={{
            backgroundColor: "#2d2d2d",
            color: "#e0e0e0",
            padding: "10px",
            border: "1px solid #444",
            width: "100%",
            minHeight: "300px",
            height: "auto",
            fontFamily: "monospace",
            fontSize: "14px",
            lineHeight: "1.5",
            whiteSpace: "nowrap",
            overflowY: "auto",
            resize: "vertical",
          }}
        />

        <div className="js-playground-console">
          {/* <h3>Console Output:</h3> */}
          <pre
            style={{
              backgroundColor: "#222",
              color: "#f8f8f8",
              padding: "10px",
              border: "1px solid #444",
              whiteSpace: "pre-wrap",
              overflowX: "auto",
              width: "100%",
              minHeight: "100px",
              maxHeight: "300px",
              overflowY: "auto",
              marginTop: "0px",
            }}
          >
            {consoleOutput.length === 0 ? (
              <div style={{ color: "#888", fontStyle: "italic" }}>
                No output yet. Run the code to see results.
              </div>
            ) : (
              consoleOutput.map((log, index) => <div key={index}>{log}</div>)
            )}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default JSPlayground;
