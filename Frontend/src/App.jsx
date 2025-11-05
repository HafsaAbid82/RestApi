import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/data")
      .then((response) => setData(response.data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <h2>User Data</h2>
      {data.length > 0 ? (
        <table border="1" cellPadding="8" style={{ margin: "auto" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Username</th>
              <th>Country</th>
              <th>City</th>
              <th>State</th>
              <th>PostCode</th>
              <th>Age</th>
              <th>Id Name</th>
              <th>Id Value</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={index}>
                <td>{user.name.title} {user.name.first} {user.name.last}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.login.username}</td>
                <td>{user.location.country}</td>
                <td>{user.location.city}</td>
                <td>{user.location.state}</td>
                <td>{user.location.postcode}</td>
                <td>{user.dob.age}</td>
                <td>{user.id.name}</td>
                <td>{user.id.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;


