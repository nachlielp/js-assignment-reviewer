import React, { useState, ChangeEvent, useEffect } from "react";

interface Assignment {
  number: number;
  filename: string;
  content: string;
}

interface StudentAssignments {
  [studentName: string]: Assignment[];
}

const App: React.FC = () => {
  const [studentData, setStudentData] = useState<StudentAssignments>({});
  const [selectedStudent, setSelectedStudent] = useState<string>("");
  const [startAssignment, setStartAssignment] = useState<number>(1);
  const [endAssignment, setEndAssignment] = useState<number>(60);
  const [codeBoxWidth, setCodeBoxWidth] = useState<number>(600);
  const [filteredAssignments, setFilteredAssignments] = useState<Assignment[]>(
    []
  );
  const [currentAssignmentIndex, setCurrentAssignmentIndex] =
    useState<number>(0);

  useEffect(() => {
    console.log("studentData", studentData);
  }, [studentData]);
  // This handler is called when the user selects a folder.
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const filesArray = Array.from(files);
    const tempStudentData: StudentAssignments = {};

    // Get the folder name that was uploaded
    const folderName =
      filesArray.length > 0
        ? filesArray[0].webkitRelativePath.split("/")[0]
        : "Unknown Folder";

    console.log("Uploaded folder:", folderName);

    // Extract all student names from the file paths
    const studentSet = new Set<string>();
    filesArray.forEach((file) => {
      const pathParts = file.webkitRelativePath.split("/");
      // The student folder should be the second folder in the path
      // '/CaEveFeb25-ExerciseSubmissions/STUDENT_NAME/Lesson1-8-IntroToJS/Exercise-Runner/ex/01.js'
      if (
        pathParts.length > 2 &&
        pathParts[0] === "CaEveFeb25-ExerciseSubmissions"
      ) {
        studentSet.add(pathParts[1]);
      }
    });

    const students = Array.from(studentSet);
    console.log("Found students:", students);

    // Process JavaScript files for each student
    const readFilesPromises = filesArray.map(
      (file) =>
        new Promise<void>((resolve, reject) => {
          // We only care about .js files in an "ex" directory
          if (
            !file.webkitRelativePath.includes("/ex/") ||
            !file.name.endsWith(".js")
          ) {
            return resolve(); // Skip if not in the "ex" folder or not a JS file.
          }

          // Extract the student name from the path
          const pathParts = file.webkitRelativePath.split("/");
          let studentName = "Unknown";

          if (
            pathParts.length > 2 &&
            pathParts[0] === "CaEveFeb25-ExerciseSubmissions"
          ) {
            studentName = pathParts[1];
          }

          // Extract assignment number from the file name (e.g., 01.js -> 1)
          const fileNumber = parseInt(file.name.replace(".js", ""));

          // Skip if not a valid number or not in our range (1-60)
          if (isNaN(fileNumber) || fileNumber < 1 || fileNumber > 60) {
            return resolve();
          }

          const reader = new FileReader();
          reader.onload = () => {
            const content = reader.result as string;
            const assignment: Assignment = {
              number: fileNumber,
              filename: file.name,
              content,
            };

            if (!tempStudentData[studentName]) {
              tempStudentData[studentName] = [];
            }
            tempStudentData[studentName].push(assignment);
            resolve();
          };
          reader.onerror = reject;
          reader.readAsText(file);
        })
    );

    Promise.all(readFilesPromises)
      .then(() => {
        // Sort assignments for each student.
        for (const student in tempStudentData) {
          tempStudentData[student].sort((a, b) => a.number - b.number);
        }
        setStudentData(tempStudentData);
      })
      .catch((err) => {
        console.error("Error reading files", err);
      });
  };

  // Handles when a student is selected from the dropdown.
  const handleStudentChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const student = e.target.value;
    setSelectedStudent(student);
    if (studentData[student]) {
      const assignments = studentData[student].filter(
        (assignment) =>
          assignment.number >= startAssignment &&
          assignment.number <= endAssignment
      );
      setFilteredAssignments(assignments);
      setCurrentAssignmentIndex(0);
    }
  };

  // Called when the user changes the assignment range and clicks "Load Range".
  const handleRangeChange = () => {
    if (selectedStudent && studentData[selectedStudent]) {
      const assignments = studentData[selectedStudent].filter(
        (assignment) =>
          assignment.number >= startAssignment &&
          assignment.number <= endAssignment
      );
      setFilteredAssignments(assignments);
      setCurrentAssignmentIndex(0);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <h1>JS Assignment Reviewer</h1>
        <label htmlFor="folderUpload" style={{ marginTop: "7px" }}>
          Select Root Folder (choose a folder with the browser):
        </label>
        <input
          type="file"
          id="folderUpload"
          // The attribute below allows the selection of a folder/directory.
          webkitdirectory="true"
          onChange={handleFileChange}
          style={{ marginTop: "7px" }}
        />
      </div>

      {/* If we have loaded any student data, show the dropdown */}
      {Object.keys(studentData).length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h2>Students</h2>
          <select value={selectedStudent} onChange={handleStudentChange}>
            <option value="">Select a student</option>
            {Object.keys(studentData).map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedStudent && (
        <div style={{ marginTop: "20px" }}>
          <div>
            <label>
              From assignment (file number):
              <input
                type="number"
                value={startAssignment}
                onChange={(e) => setStartAssignment(parseInt(e.target.value))}
                min="1"
                max="60"
                style={{ marginLeft: "10px" }}
              />
            </label>
            <label style={{ marginLeft: "20px" }}>
              To assignment (file number):
              <input
                type="number"
                value={endAssignment}
                onChange={(e) => setEndAssignment(parseInt(e.target.value))}
                min="1"
                max="60"
                style={{ marginLeft: "10px" }}
              />
            </label>
            <button onClick={handleRangeChange} style={{ marginLeft: "20px" }}>
              Load Range
            </button>
            <div style={{ marginTop: "10px" }}>
              <button
                onClick={() =>
                  setCurrentAssignmentIndex((prev) => Math.max(prev - 1, 0))
                }
                disabled={currentAssignmentIndex === 0}
              >
                Previous
              </button>
              <button
                onClick={() =>
                  setCurrentAssignmentIndex((prev) =>
                    Math.min(prev + 1, filteredAssignments.length - 1)
                  )
                }
                disabled={
                  currentAssignmentIndex === filteredAssignments.length - 1
                }
                style={{ marginLeft: "20px" }}
              >
                Next
              </button>
            </div>
          </div>

          {filteredAssignments.length > 0 ? (
            <div style={{ marginTop: "20px", maxWidth: codeBoxWidth }}>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <h3>
                  Showing {filteredAssignments[currentAssignmentIndex].filename}
                </h3>
                <p style={{ marginTop: "21px" }}>
                  Assignment {currentAssignmentIndex + 1} of{" "}
                  {filteredAssignments.length}
                </p>
              </div>
              <pre
                style={{
                  backgroundColor: "#f4f4f4",
                  padding: "10px",
                  border: "1px solid #ccc",
                  whiteSpace: "pre",
                  overflowX: "auto",
                  maxWidth: "100%",
                }}
              >
                {filteredAssignments[currentAssignmentIndex].content}
              </pre>
            </div>
          ) : (
            <p style={{ marginTop: "20px" }}>
              No assignments found in the specified range.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
