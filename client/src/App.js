import React, { useState } from "react";
import Axios from 'axios';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [foodName, setFoodName] = useState("");
  const [days, setDays] = useState(0);

  const addToDo=()=>{
    console.log(foodName+days);
    Axios.post('http://localhost:3001/add',{foodName:foodName,days:days})
  }
  return (
    <div className="App">
      <h1>CRUD app with MERN</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Food Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setFoodName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Days Since you Ate It :
          </label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => {
              setDays(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={addToDo}>
          Submit
        </button>
      
    </div>
  );
}

export default App;
