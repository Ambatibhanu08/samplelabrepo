import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./Dashboard.css";

function Dashboard() {

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    if(sessionStorage.getItem("adminLoggedIn") !== "true")
    {
      navigate("/admin-login");
    }

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    setUsers(storedUsers);

  }, []);


  const fetchData = async () => {

    try{
      const res = await API.get("/posts?_limit=5");
      setPosts(res.data);
    }
    catch(error){
      console.log(error);
    }

  };


  const logout = () => {

    sessionStorage.removeItem("adminLoggedIn");
    navigate("/admin-login");

  };


  return (

    <div className="dashboard-container">

      <div className="dashboard-header">
        <h2>Admin Dashboard</h2>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      <div className="users-section">

        <h3>Registered Users</h3>

        {users.length === 0 ? (

          <p>No users registered yet</p>

        ) : (

          <table className="users-table">

            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>

            <tbody>

              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}

            </tbody>

          </table>

        )}

      </div>

      <br />

      <button className="fetch-btn" onClick={fetchData}>
        Fetch API Data
      </button>

      <div className="api-section">

  <h3>API Data</h3>

  {posts.length === 0 ? (
    <p>No API data loaded</p>
  ) : (

    <table className="api-table">

      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
        </tr>
      </thead>

      <tbody>

        {posts.map((post) => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
          </tr>
        ))}

      </tbody>

    </table>

  )}

</div>

    </div>

  );
}

export default Dashboard;