import { useEffect, useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

const [tasks, setTasks] = useState([]);
const [title, setTitle] = useState("");
const [desc, setDesc] = useState("");

const navigate = useNavigate();

const token = localStorage.getItem("token");

// Fetch tasks
useEffect(() => {

  if (!token) {
    navigate("/");
    return;
  }

  API.get("/tasks", {
    headers: {
      authorization: token
    }
  }).then(res => setTasks(res.data));

}, []);

// Create task
const addTask = async () => {

  await API.post("/tasks",
    { title, description: desc },
    {
      headers: { authorization: token }
    }
  );

  window.location.reload();
};

// Delete task
const deleteTask = async (id) => {

  await API.delete(`/tasks/${id}`, {
    headers: { authorization: token }
  });

  setTasks(tasks.filter(t => t._id !== id));
};

// Logout
const logout = () => {
  localStorage.removeItem("token");
  navigate("/");
};

return (
  <div>

    <h2>Dashboard</h2>

    <button onClick={logout}>Logout</button>

    <h3>Add Task</h3>

    <input placeholder="Title"
      onChange={(e)=>setTitle(e.target.value)}
    />

    <input placeholder="Description"
      onChange={(e)=>setDesc(e.target.value)}
    />

    <button onClick={addTask}>Add</button>

    <h3>Your Tasks</h3>

    {tasks.map(task => (
      <div key={task._id}>
        <h4>{task.title}</h4>
        <p>{task.description}</p>
        <button onClick={()=>deleteTask(task._id)}>
          Delete
        </button>
      </div>
    ))}

  </div>
);
}