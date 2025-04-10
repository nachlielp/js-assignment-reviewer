import React, { useState, useEffect } from "react";
import "../styles/js-playground.css";
import { tasks } from "../tasks";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { utilService } from "../services/utilService";

interface JSPlaygroundProps {
  initialCode: string;
  filename: string;
  assignmentNumber: number;
  taskDescription?: string;
  exampleSolution?: string;
}

export default function JSPlayground({
  initialCode,
  assignmentNumber,
}: JSPlaygroundProps) {
  const [code, setCode] = useState<string>(initialCode);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isCopying, setIsCopying] = useState<boolean>(false);

  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  const runCode = () => {
    setIsRunning(true);
    setConsoleOutput([]);

    const logs: string[] = [];
    const originalConsoleLog = console.log;

    // Override console.log
    console.log = (...args) => {
      if (logs.length >= 1000) {
        throw new Error(
          "Too many console.log calls (limit: 1000). Execution stopped."
        );
      }
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
      const executeWithTimeout = () => {
        return new Promise((resolve, reject) => {
          const timeoutId = setTimeout(() => {
            reject(
              new Error(
                "Execution timed out after 3 seconds. Your code might contain an infinite loop."
              )
            );
          }, utilService.MAX_EXECUTION_TIME);

          try {
            // Wrap the code with our infinite loop detection
            const wrappedCode = utilService.wrapCodeForRunningLocally(code);
            // eslint-disable-next-line no-new-func
            const executableCode = new Function(wrappedCode);
            const result = executableCode();
            clearTimeout(timeoutId);
            resolve(result);
          } catch (error) {
            clearTimeout(timeoutId);
            reject(error);
          }
        });
      };

      executeWithTimeout()
        .then(() => {
          setConsoleOutput(logs);
          setIsRunning(false);
        })
        .catch((error) => {
          setConsoleOutput([
            ...logs,
            `Error: ${error instanceof Error ? error.message : String(error)}`,
          ]);
          setIsRunning(false);
        });
    } catch (error) {
      setConsoleOutput([
        ...logs,
        `Error: ${error instanceof Error ? error.message : String(error)}`,
      ]);
      setIsRunning(false);
    } finally {
      // Restore original functions
      console.log = originalConsoleLog;
    }
  };

  const handleCopy = () => {
    setIsCopying(true);
    navigator.clipboard.writeText(code).then(() => {
      setTimeout(() => {
        setIsCopying(false);
      }, 1000);
    });
  };

  const onChange = React.useCallback((value: string) => {
    setCode(value);
  }, []);

  return (
    <div className="section js-playground">
      <div className="js-playground-header">
        <div className="filename">
          Assignment {assignmentNumber}: {tasks[assignmentNumber].title}
        </div>
        <div className="js-playground-controls">
          <button
            onClick={runCode}
            disabled={isRunning}
            className="js-playground-run-btn"
          >
            {isRunning ? "Running..." : "Run"}
          </button>
          <button onClick={handleCopy} className="js-playground-copy-btn">
            {isCopying ? "Code Copied!" : "Copy Code"}
          </button>
        </div>
      </div>

      <div className="js-playground-content">
        <CodeMirror
          value={code}
          theme={oneDark}
          width="100%"
          style={{ width: "100%", borderRadius: "10px" }}
          extensions={[javascript({ jsx: true })]}
          onChange={onChange}
          basicSetup={{
            lineNumbers: true,
            highlightActiveLineGutter: true,
            highlightSpecialChars: true,
            foldGutter: true,
            drawSelection: true,
            dropCursor: true,
            allowMultipleSelections: true,
            indentOnInput: true,
            syntaxHighlighting: true,
            bracketMatching: true,
            closeBrackets: true,
            autocompletion: true,
            rectangularSelection: true,
            crosshairCursor: true,
            highlightActiveLine: true,
            highlightSelectionMatches: true,
            closeBracketsKeymap: true,
            defaultKeymap: true,
            searchKeymap: true,
            historyKeymap: true,
            foldKeymap: true,
            completionKeymap: true,
            lintKeymap: true,
          }}
        />

        <div className="js-playground-console">
          <label>Console Output:</label>
          <pre>
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
}
