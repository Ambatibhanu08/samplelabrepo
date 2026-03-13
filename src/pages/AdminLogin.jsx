import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {

  const navigate = useNavigate();

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    if(username === "admin" && password === "admin123")
    {
      sessionStorage.setItem("adminLoggedIn","true");
      navigate("/dashboard");
    }
    else
    {
      alert("Invalid Credentials");
    }
  };

  return (

    <div className="admin-container">

      <div className="admin-card">

        <h2>Admin Login</h2>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Admin Username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button className="login-btn">Login</button>

        </form>

      </div>

    </div>
  );
}

export default AdminLogin;