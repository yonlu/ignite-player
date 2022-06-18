import { useState } from "react";

import plusIcon from "../assets/plus.svg";
import { Header } from "../components/Header";
import { TaskList } from "../components/TaskList";
import { useTasks } from "../hooks/useTasks";

import "./styles.css";

export function Dashboard() {
  const { createNewTask } = useTasks();
  const [newTask, setNewTask] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleSubmitTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    createNewTask(newTask);
    setNewTask("");
  }

  return (
    <main>
      <Header />
      <form className="newTask" onSubmit={handleSubmitTask}>
        <input
          value={newTask}
          onChange={(event) => handleChange(event)}
          type="text"
          placeholder="Add a new task"
        />
        <button type="submit">
          Add <img src={plusIcon} alt="plus icon" />
        </button>
      </form>
      <TaskList />
    </main>
  );
}
