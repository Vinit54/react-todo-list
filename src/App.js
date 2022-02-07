import "./App.scss";
import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";

const App = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [id, setID] = useState(1);
  const [input, setInput] = useState({
    id: "",
    title: "",
    discription: "",
    isDone: false,
  });

  const HandleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    setData([...data, { ...input, id }]);
    setID(id + 1);
    setInput({
      id: "",
      title: "",
      discription: "",
      isDone: false,
    });
  };

  const DeleteHandler = (id) => {
    let result = data.filter((input) => {
      if (input.id !== id) {
        return input.id;
      }
    });
    setData(result);
  };

  const EditHandler = (current) => {
    setInput(current);
    setToggle(!toggle);
  };

  const update = () => {
    const newData = data.map((current) => {
      if (input.id === current.id) {
        current = input;
      }
      return current;
    });
    setData(newData);

    setInput({
      id: "",
      title: "",
      discription: "",
      isDone: false,
    });
  };

  console.log("data", data);
  console.log("input", input);

  return (
    <>
      <div className="app">
        <div className="container">
          <h2 className="text-center mb-4">Todo List</h2>
          <Form onSubmit={SubmitHandler}>
            <Form.Control
              type="text"
              name="title"
              className="input"
              value={input.title}
              onChange={HandleChange}
              placeholder="title"
            />
            <Form.Control
              type="text"
              name="discription"
              className="input"
              value={input.discription}
              onChange={HandleChange}
              placeholder="discription"
            />
            {!toggle ? (
              <Button type="submit">
                <AddIcon />
              </Button>
            ) : (
              <Button onClick={() => update()}>Update</Button>
            )}
          </Form>
          <div />
          <div>
            {data?.map((current, index) => (
              <Card key={index}>
                <Card.Body>
                  <div>
                    <span
                      style={{
                        textDecoration: current?.isDone ? "line-through" : "",
                      }}
                    >
                      {current?.title} {current?.discription}
                    </span>
                    <div>
                      <Button
                        variant="outline-primary"
                        onClick={() => EditHandler(current)}
                      >
                        <EditIcon />
                      </Button>
                      {/* <Button
                        variant="outline-success"
                        onClick={() => markTodo(index)}
                      >
                        <DoneIcon />
                      </Button> */}
                      <Button
                        variant="outline-danger"
                        onClick={() => DeleteHandler(current.id)}
                      >
                        <DeleteIcon />
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
