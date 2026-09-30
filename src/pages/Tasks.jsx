import { Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

function Tasks() {
  const { tasks, deleteTask, completeTask } = useTasks();

  return (
    <div className="page">
      <h1>All Tasks</h1>

      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <div className="task-list">
          {tasks.map((task) => (
            <div className="task-card" key={task.id}>
              <h2>{task.header}</h2>

              <p>{task.description}</p>

              <p>
                <strong>Priority:</strong> {task.priority}
              </p>

              <p>
                <strong>Category:</strong> {task.category}
              </p>

              <p>
                <strong>Status:</strong> {task.status}
              </p>

              <div className="task-actions">
                <Link to={`/tasks/${task.id}`}>
                  View Details
                </Link>

                {task.status !== "Closed" && (
                  <button onClick={() => completeTask(task.id)}>
                    Complete
                  </button>
                )}

                <button
                  className="delete-btn"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Tasks;