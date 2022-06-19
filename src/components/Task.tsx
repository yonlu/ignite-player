import { Trash } from "phosphor-react";
import { useTasks } from "../hooks/useTasks";
import styles from "./Task.module.css";

interface TaskProps {
  id: string;
  content: string;
  done: boolean;
}

export function Task({ id, content, done }: TaskProps) {
  const { deleteTask, toggleTaskDone } = useTasks();

  function handleChecked() {
    toggleTaskDone(id);
  }

  return (
    <div
      className={done ? `${styles.task} ${styles.checked}` : `${styles.task}`}
    >
      <div className={styles.taskInfo}>
        <input
          type="checkbox"
          name="task"
          checked={done}
          onChange={handleChecked}
        />
        <p>{content}</p>
      </div>
      <button title="Delete comment">
        <Trash onClick={() => deleteTask(id)} size={24} />
      </button>
    </div>
  );
}
