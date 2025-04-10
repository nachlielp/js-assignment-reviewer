import { ChangeEvent, useEffect, useState } from "react";
import { STUDENT_DATA_KEY, utilService } from "../services/utilService";
import { StudentAssignments } from "../interface";

export const useStudentsData = () => {
  const [studentsData, setStudentsData] = useState<StudentAssignments>({});
  useEffect(() => {
    const tempStudentData = utilService.getFromLocalStorage(STUDENT_DATA_KEY);
    if (tempStudentData) {
      setStudentsData(tempStudentData);
    }
  }, []);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const tempStudentData = await utilService.uploadFiles(e);
    if (Object.keys(tempStudentData).length > 0) {
      setStudentsData(tempStudentData);
    }
  };
  return { studentsData, handleFileChange };
};
