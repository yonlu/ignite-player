import { useMemo } from "react";

import clipboardIcon from "../assets/clipboard.svg";
import { useTasks } from "../hooks/useTasks";
import { TaskItem } from "../utils/types";
import { Task } from "./Task";
import styles from "./TaskList.module.css";

export function TaskList() {
  const { tasks, finishedTasksLength } = useTasks();

  const renderTasks = () =>
    useMemo(() => {
      return tasks.length ? (
        <div className={styles.tasks}>
          {tasks.map((task: TaskItem) => (
            <Task
              key={task.id}
              id={task.id}
              content={task.content}
              done={task.done}
            ></Task>
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <img src={clipboardIcon} alt="clipboard icon" />
          <p className={styles.title}>
            You don't have any registered tasks yet.
          </p>
          <p>Create tasks and organize your Todos</p>
        </div>
      );
    }, [tasks]);

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
            {finishedTasksLength} of {tasks.length}
          </span>
        </span>
      </header>

      {renderTasks()}
    </section>
  );
}
