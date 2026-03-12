import { useState } from "react";
import "./Register.css";

function Register() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const newUser = { name, email, password };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("User Registered Successfully");

    setName("");
    setEmail("");
    setPassword("");
  };

  return (

    <div className="register-container">

      <div className="register-card">

        <h2>User Registration</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          <button className="register-btn">
            Register
          </button>

        </form>

      </div>

    </div>

  );
}

export default Register;