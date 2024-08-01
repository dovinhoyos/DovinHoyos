import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskCard = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);

  return (
    <>
      <div>
        <h1>{task.nombre}</h1>
        <p>{task.fecha_entrega}</p>
        <button onClick={() => deleteTask(task.id)}>X</button>
      </div>
    </>
  );
};

export default TaskCard;
