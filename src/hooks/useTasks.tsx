import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { TaskItem } from "../utils/types";

const defaultTasks = [
  {
    id: uuidv4(),
    content:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    done: false,
  },
  {
    id: uuidv4(),
    content: "Todo 2",
    done: true,
  },
  {
    id: uuidv4(),
    content: "Foobar",
    done: true,
  },
];

interface TasksProviderProps {
  children: React.ReactNode;
}

interface TasksContextData {
  tasks: TaskItem[];
  createNewTask(content: string): void;
  deleteTask(id: string): void;
}

const TasksContext = createContext({} as TasksContextData);

const TasksProvider = ({ children }: TasksProviderProps) => {
  const [tasks, setTasks] = useState(defaultTasks);

  function createNewTask(content: string) {
    const createdTask = {
      id: uuidv4(),
      content,
      done: false,
    };
    setTasks([...tasks, createdTask]);
  }

  function deleteTask(id: string) {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  return (
    <TasksContext.Provider value={{ tasks, createNewTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
};

const useTasks = () => {
  const context = useContext(TasksContext);

  return context;
};

export { TasksProvider, useTasks };
