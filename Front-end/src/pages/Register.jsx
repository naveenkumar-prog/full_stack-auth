import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function Register() {

const [data, setData] = useState({
  name: "",
  email: "",
  password: ""
});

const navigate = useNavigate();

const handleSubmit = async () => {
  try {
    await API.post("/auth/register", data);
    alert("Registered successfully");
    navigate("/");
  } catch (err) {
    alert(err.response?.data?.message || "Error");
  }
};

return (
  <div>
    <h2>Register</h2>

    <input placeholder="Name"
      onChange={(e)=>setData({...data,name:e.target.value})}
    />

    <input placeholder="Email"
      onChange={(e)=>setData({...data,email:e.target.value})}
    />

    <input placeholder="Password"
      type="password"
      onChange={(e)=>setData({...data,password:e.target.value})}
    />

    <button onClick={handleSubmit}>Register</button>
  </div>
);
}