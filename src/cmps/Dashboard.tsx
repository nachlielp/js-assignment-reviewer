import { ChangeEvent, useState } from "react";
import { Assignment, AlertProps } from "../interface";
import { tasks } from "../tasks";
import AIFeedback from "./AIFeedback";
import { Comments } from "./Comments";
import { Controller } from "./Controller";
import { FileUploader } from "./FileUploader";
import { Header } from "./Header";
import JSPlayground from "./JSPlayground";
import TaskContent from "./TaskContent";
import Alert from "./Alert";
import "../styles/dashboard.css";
import { useStudentsData } from "../hooks/useStudentsData";

export default function Dashboard() {
  const [selectedStudent, setSelectedStudent] = useState<string>("");
  const [startAssignmentRange, setStartAssignmentRange] = useState<number>(1);
  const [endAssignmentRange, setEndAssignmentRange] = useState<number>(60);
  const [isTaskContentOpen, setIsTaskContentOpen] = useState<boolean>(false);
  const [studentAssignments, setStudentAssignments] = useState<Assignment[]>(
    []
  );
  const [currentAssignmentIndex, setCurrentAssignmentIndex] =
    useState<number>(0);
  const [alert, setAlert] = useState<Omit<AlertProps, "onClose">>({
    message: "Hello",
    type: "error",
    isOpen: false,
  });
  const { studentsData, handleFileChange } = useStudentsData();

  const isStudentData = Object.keys(studentsData).length > 0;

  const handleStudentChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const student = e.target.value;
    setSelectedStudent(student);
    handleSetStudentAssignmentsByRange(
      student,
      startAssignmentRange,
      endAssignmentRange
    );
  };

  const handleSetStudentAssignmentsByRange = (
    student: string,
    start: number,
    end: number
  ) => {
    if (studentsData[student]) {
      const assignments = studentsData[student].filter(
        (assignment) => assignment.number >= start && assignment.number <= end
      );
      setStudentAssignments(assignments);
      setCurrentAssignmentIndex(0);
    }
  };

  const handleStartRangeChange = (value: number) => {
    setStartAssignmentRange(value);
    setCurrentAssignmentIndex(0);
    handleSetStudentAssignmentsByRange(
      selectedStudent,
      value,
      endAssignmentRange
    );
  };
  const handleEndRangeChange = (value: number) => {
    setEndAssignmentRange(value);
    setCurrentAssignmentIndex(0);
    handleSetStudentAssignmentsByRange(
      selectedStudent,
      startAssignmentRange,
      value
    );
  };
  const handleAlertClose = () => {
    setAlert({
      message: "",
      type: "info",
      isOpen: false,
    });
  };

  return (
    <div className="dashboard">
      <Header isFilesUploaded={isStudentData} />
      <Alert
        message={alert.message}
        type={alert.type}
        isOpen={alert.isOpen}
        onClose={handleAlertClose}
      />
      <div className="dashboard-container">
        {!isStudentData && <FileUploader onFileChange={handleFileChange} />}

        {isStudentData && (
          <Controller
            startAssignment={startAssignmentRange}
            endAssignment={endAssignmentRange}
            selectedStudent={selectedStudent}
            studentData={studentsData}
            onStartAssignmentChange={handleStartRangeChange}
            onEndAssignmentChange={handleEndRangeChange}
            onStudentChange={handleStudentChange}
            onPrevious={() =>
              setCurrentAssignmentIndex((prev) => Math.max(prev - 1, 0))
            }
            onNext={() =>
              setCurrentAssignmentIndex((prev) =>
                Math.min(prev + 1, studentAssignments.length - 1)
              )
            }
            currentAssignmentIndex={currentAssignmentIndex}
            totalAssignments={studentAssignments.length}
            setIsTaskContentOpen={setIsTaskContentOpen}
            isTaskContentOpen={isTaskContentOpen}
          />
        )}
        {studentAssignments.length > 0 && isTaskContentOpen && (
          <TaskContent
            taskId={studentAssignments[currentAssignmentIndex].number}
          />
        )}
        {selectedStudent && (
          <div
            style={{
              display: "flex",
            }}
            className="dashboard-js-playground-container"
          >
            {studentAssignments.length > 0 ? (
              <JSPlayground
                initialCode={studentAssignments[currentAssignmentIndex].content}
                filename={studentAssignments[currentAssignmentIndex].filename}
                assignmentNumber={currentAssignmentIndex + startAssignmentRange}
              />
            ) : (
              <article className="section no-assignments-found">
                <p className="no-assignments-found-p">
                  No assignments found in the specified range.
                </p>
              </article>
            )}
            <div className="ai-feedback-section">
              <AIFeedback
                code={studentAssignments[currentAssignmentIndex]?.content}
                taskContent={
                  tasks[studentAssignments[currentAssignmentIndex]?.number]
                    ?.content
                }
                taskSolution={
                  tasks[studentAssignments[currentAssignmentIndex]?.number]
                    ?.solution
                }
                taskName={
                  tasks[studentAssignments[currentAssignmentIndex]?.number]
                    ?.name
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
}
