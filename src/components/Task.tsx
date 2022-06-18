import { Trash } from "phosphor-react";
import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import styles from "./Task.module.css";

interface TaskProps {
  id: string;
  content: string;
}

export function Task({ id, content }: TaskProps) {
  const { deleteTask } = useTasks();
  const [checked, setChecked] = useState<boolean>(false);

  function handleChecked(event: React.ChangeEvent<HTMLInputElement>) {
    setChecked(event.target.checked);
  }

  return (
    <div
      className={
        checked ? `${styles.task} ${styles.checked}` : `${styles.task}`
      }
    >
      <div className={styles.taskInfo}>
        <input
          type="checkbox"
          name="task"
          checked={checked}
          onChange={(event) => handleChecked(event)}
        />
        <p>{content}</p>
      </div>
      <button title="Delete comment">
        <Trash onClick={() => deleteTask(id)} size={24} />
      </button>
    </div>
  );
}
