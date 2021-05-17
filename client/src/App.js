import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [foodName, setFoodName] = useState("");
  const [days, setDays] = useState(0);
  const [foodList, setFoodList] = useState([]);
  const [newFoodName,setNewFoodName]=useState('');

  useEffect(() => {
    Axios.get("http://localhost:3001").then((res) => setFoodList(res.data));
  });
  const addToDo = () => {
    Axios.post("http://localhost:3001/add", { foodName: foodName, days: days });
    setFoodName("");
    setDays(0);
  };
  // update name request
  const updateName=(id)=>{
    Axios.put("http://localhost:3001/update",{id:id,foodName:newFoodName}); // id pass to server
  }

  const deleteFood=(id)=>{
    console.log(id)
    Axios.delete(`http://localhost:3001/delete/${id}`);
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
      <h1>Food List</h1>

      {foodList.map((val, key) => {
        return (
          <div key={key} className="card text-center mb-3">
            <div className="card-body">
              <h5 className="card-title">{val.foodName}</h5>
              <div>
                <input type="text" onChange={(e)=>{setNewFoodName(e.target.value)}} />
                <button href="#" className="btn btn-primary ml-2" onClick={()=>updateName(val._id)}>
                  Update
                </button>
              </div>
              <button href="#" className="btn btn-primary" onClick={()=>deleteFood(val._id)}>
                Delete
              </button>
            </div>
            <div className="card-footer text-muted">{val.daysSinceIAte}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
