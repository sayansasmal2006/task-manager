import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

function AddTask() {
  const { addTask } = useTasks();
  const navigate = useNavigate();

  const [header, setHeader] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Academic");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask({
      header,
      description,
      priority,
      category,
      dueDate: "28 Aug 2026",
    });

    navigate("/tasks");
  };

  return (
    <div className="page">
      <h1>Add New Task</h1>

      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Header"
          value={header}
          onChange={(e) => setHeader(e.target.value)}
          required
        />

        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Academic">Academic</option>
          <option value="Personal">Personal</option>
        </select>

        <p>
          <strong>Due Date:</strong> 28 Aug 2026
        </p>

        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}

export default AddTask;