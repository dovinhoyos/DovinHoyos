import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const { createTask } = useContext(TaskContext);

  const [name, setName] = useState("");
  const [fecha, setFecha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(name, fecha);

    setName("");
    setFecha("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Ingrese una tarea nueva"
          onChange={(e) => setName(e.target.value)}
          value={name}
          autoFocus
        />
        <input
          placeholder="AAAA-MM-DD"
          onChange={(e) => setFecha(e.target.value)}
          value={fecha}
        />
        <button>Guardar Tarea</button>
      </form>
    </div>
  );
};

export default TaskForm;
