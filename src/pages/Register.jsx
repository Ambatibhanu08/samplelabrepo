import { useState } from "react";

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

    <div>

      <h2>User Registration</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required
        />

        <br/><br/>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />

        <br/><br/>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
        />

        <br/><br/>

        <button>
          Register
        </button>

      </form>

    </div>

  );
}

export default Register;