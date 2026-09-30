import { Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

function Dashboard() {
  const { tasks } = useTasks();

  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;
  const completedTasks = tasks.filter(
    (task) => task.status === "Closed"
  ).length;

  return (
    <div className="page">
      <h1>Dashboard</h1>
      <p>Welcome to your Task Manager.</p>

      <div className="stats">
        <div className="stat-card">
          <h2>{totalTasks}</h2>
          <p>Total Tasks</p>
        </div>

        <div className="stat-card">
          <h2>{pendingTasks}</h2>
          <p>Pending Tasks</p>
        </div>

        <div className="stat-card">
          <h2>{completedTasks}</h2>
          <p>Completed Tasks</p>
        </div>
      </div>

      <Link to="/add-task" className="primary-btn">
        + Add New Task
      </Link>
    </div>
  );
}

export default Dashboard;