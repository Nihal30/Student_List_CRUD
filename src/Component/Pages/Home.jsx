import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const nevigate = useNavigate();
  // using Axios
  useEffect(() => {
    axios
      .get("http://localhost:3030/students")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  //   Using JS APi CAll
  //   useEffect(() => {
  //     fetch("http://localhost:3030/students").then((res) => {
  //         return res.json();
  //     }).then((res) => {
  //         setData(res);
  //     }).catch((err) => {
  //         console.log(err.message);
  //     })
  // }, [])

  return (
    <div className="container mt-5">
      <h1 style={{ backgroundColor: "#242B2E", color: "white" }}>
        STUDENT LIST CRUD OPRATION{" "}
      </h1>
      <br />
      <div>
        <Link to="/create" className="btn btn-dark my-3 ">
          CREATE NEW DATA +
        </Link>
      </div>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>CONTACT</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, i) => (
            <tr key={i}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.contactLink}</td>
              <td>
                <Link
                  className="text-decoration-none btn btn-sm btn-success"
                  to={`/view/${data.id}`}
                >
                  View
                </Link>
                <Link
                  className="text-decoration-none btn btn-sm btn-dark"
                  to={`/update/${data.id}`}
                  style={{ marginLeft: 10 }}
                  variant="dark"
                >
                  UpDate
                </Link>
                <Button
                  className="text-decoration-none btn btn-sm btn-danger"
                  style={{ marginLeft: 10 }}
                  variant="danger"
                  onClick={(e) => handleDelete(data.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  //Delet Function
  function handleDelete(id) {
    const confirm = window.confirm("Do you want to delete?");
    if (confirm) {
      axios.delete("http://localhost:3030/students/" + id).then((res) => {
        alert("Record Deleted!!");
        nevigate("/");
      });
    }
  }
};

export default Home;
