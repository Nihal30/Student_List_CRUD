import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
    const {id} = useParams();

    const [inputData, setInputData] = useState({
        id: id,
        name: "",
        email: "",
        contact: "",
      });
      
      const navigate =   useNavigate();
      useEffect(()=>{
        axios.get('http://localhost:3030/students/'+id)
        .then(res => setInputData(res.data))
        .catch(err => console.log(err))

      },[id])
      const handleSubmit =(event)=>{
        event.preventDefault();
        axios.put('http://localhost:3030/students/'+id ,inputData)
        .then(res =>{
            alert( " Update Successfully!!!")
            navigate('/')
        })
      }
    
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-item-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <form onSubmit={handleSubmit} >
        <div>
            <label htmlFor="name">ID:</label>
            <input
              type="number"
              name="id"
              disabled
              className="form-control"
              value={inputData.id}
             
            />
          </div>
          <div>
            <label htmlFor="name">NAME:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={inputData.name}
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
              value={inputData.email}
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="phone number">CONTACT</label>
            <input type="number" name="contact" className="form-control" value={inputData.contact}
            onChange={(e) =>
                setInputData({ ...inputData, contact: e.target.value })
              } />
          </div>
          <br />
          <Button variant="dark" className="btn btn-info" type="submit" >
            UPDATE
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Update