import { useMemo } from "react";

import { useTasks } from "../hooks/useTasks";
import { TaskProps } from "../utils/types";
import { Task } from "./Task";
import styles from "./TaskList.module.css";

export function TaskList() {
  const { tasks } = useTasks();

  const renderTasks = () =>
    useMemo(() => {
      return tasks.length ? (
        <div className={styles.tasks}>
          {tasks.map((task: TaskProps) => (
            <Task key={task.id} id={task.id} content={task.content}></Task>
          ))}
        </div>
      ) : (
        <>
          <h1>No tasks</h1>
        </>
      );
    }, [tasks.length]);

  return (
    <section className={styles.taskList}>
      <header className={styles.info}>
        <span className={styles.totalTasks}>
          Tasks
          <span className={styles.counter}>{tasks.length}</span>
        </span>
        <span className={styles.finishedTasks}>
          Finished
          <span className={styles.counterDone}>
            {1} of {tasks.length}
          </span>
        </span>
      </header>

      {renderTasks()}
    </section>
  );
}
