import { ChangeEvent } from "react";
import { Assignment, StudentAssignments } from "../interface";

export const STUDENT_DATA_KEY = "STUDENT_DATA";
export const FEEDBACK_STORAGE_KEY = "assignment_feedback";
export const utilService = {
  saveToLocalStorage,
  getFromLocalStorage,
  addQuestionComment,
  uploadFiles,
};

function saveToLocalStorage(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key: string) {
  return JSON.parse(localStorage.getItem(key) || "null");
}

function addQuestionComment(key: string, number: number, comment: string) {
  const existingData = getFromLocalStorage(key);
  if (existingData) {
    saveToLocalStorage(key, [...existingData, `\n${number} - ${comment}`]);
  }
}

function uploadFiles(
  e: ChangeEvent<HTMLInputElement>
): Promise<StudentAssignments> {
  console.log("handleFileChange");
  const files = e.target.files;
  if (!files) return Promise.resolve({});

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

  return Promise.all(readFilesPromises)
    .then(() => {
      // Sort assignments for each student.
      for (const student in tempStudentData) {
        tempStudentData[student].sort((a, b) => a.number - b.number);
      }

      // Calculate size of data in MB
      const sizeInBytes = new TextEncoder().encode(
        JSON.stringify(tempStudentData)
      ).length;
      const sizeInMB = (sizeInBytes / (1024 * 1024)).toFixed(2);
      console.log(`Student data size: ${sizeInMB} MB`);
      saveToLocalStorage(STUDENT_DATA_KEY, tempStudentData);
      return tempStudentData;
    })
    .catch((err) => {
      console.error("Error reading files", err);
      return {};
    });
}
