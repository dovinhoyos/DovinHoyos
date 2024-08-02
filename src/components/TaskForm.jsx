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
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-5 mb-2">
        <h1 className="text-xl font-bold text-white mb-2">Crea tu tarea</h1>
        <input
          placeholder="Ingrese una tarea nueva"
          onChange={(e) => setName(e.target.value)}
          value={name}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <input
          placeholder="AAAA-MM-DD"
          onChange={(e) => setFecha(e.target.value)}
          value={fecha}
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <button className="bg-red-600 px-2 py-1 rounded-md text-white hover:bg-red-500">
          Guardar Tarea
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
