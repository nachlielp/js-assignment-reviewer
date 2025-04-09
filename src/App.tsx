import React, { useState, ChangeEvent, useEffect } from "react";
import "./App.css";
import JSPlayground from "./cmps/JSPlayground";
import { Comments } from "./cmps/Comments";
import { Header } from "./cmps/Header";
import { FileUploader } from "./cmps/FileUploader";
import { AlertProps, Assignment } from "./interface";
import { StudentAssignments } from "./interface";
import { STUDENT_DATA_KEY, utilService } from "./services/utils";
import { Controller } from "./cmps/Controller";
import TaskContent from "./cmps/TaskContent";
import { tasks } from "./tasks";
import AIFeedback from "./cmps/AIFeedback";
import Alert from "./cmps/Alert";

const App: React.FC = () => {
  const [studentData, setStudentData] = useState<StudentAssignments>({});
  const [selectedStudent, setSelectedStudent] = useState<string>("");
  const [startAssignment, setStartAssignment] = useState<number>(1);
  const [endAssignment, setEndAssignment] = useState<number>(60);
  const [isTaskContentOpen, setIsTaskContentOpen] = useState<boolean>(false);
  const [filteredAssignments, setFilteredAssignments] = useState<Assignment[]>(
    []
  );
  const [currentAssignmentIndex, setCurrentAssignmentIndex] =
    useState<number>(0);
  const [alert, setAlert] = useState<Omit<AlertProps, "onClose">>({
    message: "Hello",
    type: "error",
    isOpen: false,
  });
  useEffect(() => {
    const tempStudentData = utilService.getFromLocalStorage(STUDENT_DATA_KEY);
    if (tempStudentData) {
      setStudentData(tempStudentData);
    }
  }, []);

  // This handler is called when the user selects a folder.
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const tempStudentData = await utilService.uploadFiles(e);
    if (Object.keys(tempStudentData).length > 0) {
      setStudentData(tempStudentData);
    }
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

  const handleAlertClose = () => {
    setAlert({
      message: "",
      type: "info",
      isOpen: false,
    });
  };

  return (
    <div className="app">
      <Header isFilesUploaded={Object.keys(studentData).length > 0} />
      <Alert
        message={alert.message}
        type={alert.type}
        isOpen={alert.isOpen}
        onClose={handleAlertClose}
      />
      <div className="app-container">
        {Object.keys(studentData).length === 0 && (
          <FileUploader onFileChange={handleFileChange} />
        )}

        {Object.keys(studentData).length > 0 && (
          <Controller
            startAssignment={startAssignment}
            endAssignment={endAssignment}
            selectedStudent={selectedStudent}
            studentData={studentData}
            onStartAssignmentChange={(value) => setStartAssignment(value)}
            onEndAssignmentChange={(value) => setEndAssignment(value)}
            onStudentChange={handleStudentChange}
            onRangeChange={handleRangeChange}
            onPrevious={() =>
              setCurrentAssignmentIndex((prev) => Math.max(prev - 1, 0))
            }
            onNext={() =>
              setCurrentAssignmentIndex((prev) =>
                Math.min(prev + 1, filteredAssignments.length - 1)
              )
            }
            currentAssignmentIndex={currentAssignmentIndex}
            totalAssignments={filteredAssignments.length}
            setIsTaskContentOpen={setIsTaskContentOpen}
            isTaskContentOpen={isTaskContentOpen}
          />
        )}
        {filteredAssignments.length > 0 && isTaskContentOpen && (
          <TaskContent
            taskId={filteredAssignments[currentAssignmentIndex].number}
          />
        )}
        {selectedStudent && (
          <div
            style={{
              display: "flex",
            }}
            className="js-playground-container"
          >
            {filteredAssignments.length > 0 ? (
              <JSPlayground
                initialCode={
                  filteredAssignments[currentAssignmentIndex].content
                }
                filename={filteredAssignments[currentAssignmentIndex].filename}
                assignmentNumber={currentAssignmentIndex + startAssignment}
              />
            ) : (
              <p style={{ marginTop: "20px" }}>
                No assignments found in the specified range.
              </p>
            )}
            <div className="ai-feedback-section">
              <AIFeedback
                code={filteredAssignments[currentAssignmentIndex].content}
                taskContent={
                  tasks[filteredAssignments[currentAssignmentIndex].number]
                    .content
                }
                taskSolution={
                  tasks[filteredAssignments[currentAssignmentIndex].number]
                    .solution
                }
                taskName={
                  tasks[filteredAssignments[currentAssignmentIndex].number].name
                }
                studentName={selectedStudent}
                handleAlert={setAlert}
              />
              <Comments />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
