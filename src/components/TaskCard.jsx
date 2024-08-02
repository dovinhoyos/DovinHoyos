import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskCard = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);

  return (
    <>
      <div className="bg-gray-800 text-white rounded-md p-4">
        <h1 className="text-lg font-bold capitalize">{task.nombre}</h1>
        <p className="text-sm text-gray-500">{task.fecha_entrega}</p>
        <button
          className="bg-red-600 px-2 py-1 rounded-md mt-4 hover:bg-red-500"
          onClick={() => deleteTask(task.id)}
        >
          Eliminar
        </button>
      </div>
    </>
  );
};

export default TaskCard;
