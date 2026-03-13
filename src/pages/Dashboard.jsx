import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

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

    <div>

      <h2>Admin Dashboard</h2>

      <button onClick={logout}>Logout</button>

      <h3>Registered Users</h3>

      {users.length === 0 ? (

        <p>No users registered yet</p>

      ) : (

        <table border="1">

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

      <br/><br/>

      <button onClick={fetchData}>
        Fetch API Data
      </button>

      <h3>API Data</h3>

      {posts.length === 0 ? (

        <p>No API data loaded</p>

      ) : (

        <table border="1">

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

  );
}

export default Dashboard;