import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    contact: "",
  });
  
  const navigate =   useNavigate();
  const handleSubmit =(event)=>{
    event.preventDefault();
    axios.get('http://localhost:3030/students',inputData)
    .then(res =>{
        alert("Successfully!!!")
        navigate('/')
    })
  }

 
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-item-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <form onSubmit={handleSubmit} >
          <div>
            <label htmlFor="name">NAME:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="email">EMAIL:</label>
            <input
              type="text"
              name="email"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="phone number">CONTACT</label>
            <input type="number" name="contact" className="form-control"
            onChange={(e) =>
                setInputData({ ...inputData, contact: e.target.value })
              } />
          </div>
          <br />
          <Button variant="dark" className="btn btn-info" type="submit" >
            SUBMIT
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Create;
