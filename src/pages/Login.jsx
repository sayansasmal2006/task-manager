import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("taskManagerUser", "true");
    navigate("/");
  };

  return (
    <div className="page login-page">
      <div className="login-card">
        <h1>Task Manager Login</h1>
        <p>Click the button below to continue.</p>

        <button onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;