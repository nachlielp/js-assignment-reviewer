export interface Assignment {
  number: number;
  filename: string;
  content: string;
}

export interface StudentAssignments {
  [studentName: string]: Assignment[];
}

export interface AIResponse {
  works: boolean;
  explanation: string;
  error: string;
}

export interface AlertProps {
  message: string;
  type: "success" | "error" | "warning" | "info";
  isOpen: boolean;
  onClose: () => void;
}
