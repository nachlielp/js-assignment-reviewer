export interface Assignment {
  number: number;
  filename: string;
  content: string;
}

export interface StudentAssignments {
  [studentName: string]: Assignment[];
}
