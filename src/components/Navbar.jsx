import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>

      <div>User System</div>

      <div>
        <Link to="/">Home</Link> | 
        <Link to="/register">Register</Link> | 
        <Link to="/admin-login">Admin Login</Link>
      </div>

    </nav>
  );
}

export default Navbar;