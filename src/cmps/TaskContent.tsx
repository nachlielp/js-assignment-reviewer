import { tasks } from "../tasks";
import "../styles/ex-code.css";
import "../styles/task-content.css";
interface TaskContentProps {
  taskId: number;
}

export default function TaskContent({ taskId }: TaskContentProps) {
  const task = tasks[taskId];
  return (
    <div className={`section task-content open`}>
      <div dangerouslySetInnerHTML={{ __html: task.content }} />
    </div>
  );
}
