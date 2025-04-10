import { ChangeEvent } from "react";
import { Assignment, StudentAssignments } from "../interface";

export const STUDENT_DATA_KEY = "STUDENT_DATA";
export const FEEDBACK_STORAGE_KEY = "assignment_feedback";
const MAX_ITERATIONS = 1000000; // Prevent excessive iterations
const MAX_EXECUTION_TIME = 3000; // 3 seconds timeout

export const utilService = {
  saveToLocalStorage,
  getFromLocalStorage,
  addQuestionComment,
  uploadFiles,
  wrapCodeForRunningLocally,
  MAX_ITERATIONS,
  MAX_EXECUTION_TIME,
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

async function uploadFiles(
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

function wrapCodeForRunningLocally(code: string) {
  // Check if the code starts with 'use strict'
  const hasStrictMode =
    code.trim().startsWith("'use strict'") ||
    code.trim().startsWith('"use strict"');

  // Extract the strict mode directive if present
  let strictModeDirective = "";
  let codeWithoutStrict = code;

  if (hasStrictMode) {
    const lines = code.split("\n");
    strictModeDirective = lines[0];
    codeWithoutStrict = lines.slice(1).join("\n");
  }

  return `
    ${strictModeDirective}
    
    let __iterationCount = 0;
    const __checkInfiniteLoop = () => {
      __iterationCount++;
      if (__iterationCount > ${MAX_ITERATIONS}) {
        throw new Error('Excessive iterations detected. Possible infinite loop.');
      }
    };
    
    // Override setTimeout and setInterval locally
    const originalSetTimeout = setTimeout;
    const originalSetInterval = setInterval;
    
    setTimeout = (fn, delay, ...args) => {
      if (delay > ${MAX_EXECUTION_TIME}) {
        console.log('Warning: setTimeout duration capped at 3 seconds');
        delay = ${MAX_EXECUTION_TIME};
      }
      return originalSetTimeout(fn, delay, ...args);
    };
    
    setInterval = (fn, delay, ...args) => {
      if (delay > ${MAX_EXECUTION_TIME}) {
        console.log('Warning: setInterval duration capped at 3 seconds');
        delay = ${MAX_EXECUTION_TIME};
      }
      return originalSetInterval(fn, delay, ...args);
    };
    
    ${codeWithoutStrict
      .replace(
        /for\s*\(([^;]*);([^;]*);([^)]*)\)/g,
        (init, condition, increment) => {
          // If there's a variable declaration in the initialization, we need to handle it differently
          if (
            init.trim().startsWith("var ") ||
            init.trim().startsWith("let ") ||
            init.trim().startsWith("const ")
          ) {
            return `for (${init}; __checkInfiniteLoop(), ${condition}; ${increment})`;
          } else {
            return `for (__checkInfiniteLoop(), ${init}; ${condition}; ${increment})`;
          }
        }
      )
      .replace(/while\s*\(/g, "while (__checkInfiniteLoop(), ")
      .replace(/do\s*{/g, "do { __checkInfiniteLoop();")}
  `;
}
