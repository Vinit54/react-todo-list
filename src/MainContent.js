import React, { useState } from "react";
import "./MainContent.scss";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const MainContent = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState();
  const [id, setId] = useState(0);
  const [toggle, setToggle] = useState(true);

  const ChangeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    setId(id + 1);
    let newInput = { ...input, id };
    setData([...data, newInput]);
  };

  const DeleteHandler = (id) => {
    let result = data.filter((value) => {
      if (value.id !== id) {
        return value.id;
      }
    });
    setData(result);
  };

  const EditHandler = () => {
  }

  console.log("data", data);
  console.log("input", input);

  return (
    <div className="main">
      <div className="box">
        <form>
          <div>
            <input
              type="text"
              name="title"
              onChange={ChangeHandler}
              autoComplete="off"
              placeholder="title"
            />
            <div className="button" onClick={SubmitHandler}>
              <AddIcon />
            </div>
          </div>
          <input
            type="text"
            name="description"
            onChange={ChangeHandler}
            className="description"
            placeholder="description"
            autoComplete="off"
          />
        </form>
        {data.map((current, index) => {
          return (
            <div key={index} className="list" placeholder="list">
              <div className="todo">
                <input 
                type="checkbox" 
                placeholder="checkbox" 
                onChange ={()=>isCompleteHandler(current.id)}
                />
                <h4>{current?.title}</h4>
                <div className="edit">
                  <EditIcon onClick={()=> EditHandler(current.description)}/>
                </div>
                <div className="delete">
                  <DeleteIcon onClick={() => DeleteHandler(current.id)} />
                </div>
              </div>
              <div className="details">
                <p>{current?.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainContent;
