import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const View = () => {
  const { id } = useParams();
  
  const [ViewData, setviewdata] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/students/" + id)
      .then((res) => setviewdata(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className="container">
      <div className="container p-5"></div>
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
          <tr>
            <td>{ViewData.id}</td>
            <td>{ViewData.name}</td>
            <td>{ViewData.email}</td>
            <td>{ViewData.contact}</td>
            <td><Link to="/" className="text-decoration-none btn btn-sm btn-dark">
        Back
      </Link></td>
          </tr>
        </tbody>
      </table>

      
    </div>
  );
};

export default View;
