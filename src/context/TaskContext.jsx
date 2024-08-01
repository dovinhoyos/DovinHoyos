import { createContext, useEffect, useState } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  const createTask = (nombre, fecha_entrega) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        nombre,
        fecha_entrega,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
