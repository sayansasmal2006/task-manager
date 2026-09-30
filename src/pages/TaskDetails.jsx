import { Link, useNavigate, useParams } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

function TaskDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, updateTask, deleteTask, completeTask } = useTasks();

  const task = tasks.find((item) => item.id === Number(id));

  if (!task) {
    return (
      <div className="page">
        <h1>Task Not Found</h1>
        <Link to="/tasks">Back to Tasks</Link>
      </div>
    );
  }

  const handleStatusChange = (e) => {
    updateTask(task.id, {
      status: e.target.value,
    });
  };

  const handleDelete = () => {
    deleteTask(task.id);
    navigate("/tasks");
  };

  return (
    <div className="page">
      <h1>Task Details</h1>

      <div className="details-card">
        <h2>{task.header}</h2>

        <p>
          <strong>Description:</strong> {task.description}
        </p>

        <p>
          <strong>Priority:</strong> {task.priority}
        </p>

        <p>
          <strong>Category:</strong> {task.category}
        </p>

        <p>
          <strong>Raised:</strong> {task.raisedDate}
        </p>

        <p>
          <strong>Due Date:</strong> {task.dueDate}
        </p>

        <label>
          <strong>Status:</strong>{" "}
          <select value={task.status} onChange={handleStatusChange}>
            <option value="Raised">Raised</option>
            <option value="Pending">Pending</option>
            <option value="Closed">Closed</option>
          </select>
        </label>

        <div className="task-actions">
          {task.status !== "Closed" && (
            <button onClick={() => completeTask(task.id)}>
              Mark Completed
            </button>
          )}

          <button className="delete-btn" onClick={handleDelete}>
            Delete Task
          </button>

          <Link to="/tasks">Back to Tasks</Link>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;