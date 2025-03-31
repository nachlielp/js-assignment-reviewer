import { tasks } from "../tasks";
import "../styles/ex-code.css";
import "../styles/task-content.css";
import { useState } from "react";
interface TaskContentProps {
  taskId: number;
}

export default function TaskContent({ taskId }: TaskContentProps) {
  const task = tasks[taskId];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`section task-content ${isOpen ? "open" : "closed"}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen && <div dangerouslySetInnerHTML={{ __html: task.content }} />}
      {!isOpen && (
        <div className="task-content-open-btn">
          <h3>Open</h3>
          <h3> Task</h3>
        </div>
      )}
    </div>
  );
}
