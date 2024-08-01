import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskCard = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);

  return (
    <>
      <div className="bg-gray-800 text-white rounded-md">
        <h1 className="text-lg font-bold">{task.nombre}</h1>
        <p className="text-sm text-gray-500">{task.fecha_entrega}</p>
        <button onClick={() => deleteTask(task.id)}>X</button>
      </div>
    </>
  );
};

export default TaskCard;
