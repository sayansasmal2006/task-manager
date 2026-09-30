import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("taskManagerUser");

  const handleLogout = () => {
    localStorage.removeItem("taskManagerUser");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>Task Manager</h2>

      {isLoggedIn && (
        <div className="nav-links">
          <Link to="/">Dashboard</Link>
          <Link to="/tasks">Tasks</Link>
          <Link to="/add-task">Add Task</Link>
          <Link to="/completed">Completed Tasks</Link>

          <button onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;