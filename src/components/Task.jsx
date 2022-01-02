import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <p>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer", float: "right" }}
          onClick={() => onDelete(task.id)}
        />
      </p>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
