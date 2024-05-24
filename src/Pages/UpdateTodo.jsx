import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo } from "../Features/Todo/todoSlice";
import { useNavigate } from "react-router-dom";

function UpdateTodo() {
  const { id } = useParams();
  const navigate = useNavigate();

  const allTodo = useSelector((state) => state.todo.todos);
  const findTodo = allTodo.find((todo) => todo.id == id);
  const dispatch = useDispatch();

  const [todo, setTodo] = useState({
    title: findTodo.title,
    description: findTodo.description,
    time: findTodo.time,
  });

  const handleUpdate = (e) => {
    e.preventDefault();
    const newTodo = {
      id,
      ...todo,
    };
    dispatch(updateTodo(newTodo));
    navigate("/todo");
  };
  return (
    <div className="container">
      <form onSubmit={handleUpdate} className="w-100">
        <h1 className="my-4 todo_heading">Update Todo</h1>
        <div className="mb-3">
          <input
            type="text"
            className="form-control py-2"
            name="title"
            placeholder="Todo Title"
            onChange={(e) => {
              setTodo({ ...todo, title: e.target.value });
            }}
            value={todo.title}
          />
        </div>
        <div className="mb-3 mt-4">
          <input
            type="text"
            className="form-control py-2"
            name="description"
            placeholder="Todo Description"
            onChange={(e) => {
              setTodo({ ...todo, description: e.target.value });
            }}
            value={todo.description}
          />
        </div>
        <div className="mb-3 mt-4">
          <input
            type="text"
            className="form-control py-2"
            name="time"
            onChange={(e) => {
              setTodo({ ...todo, time: e.target.value });
            }}
            value={todo.time}
            placeholder="Time"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Todo
        </button>
      </form>
    </div>
  );
}

export default UpdateTodo;
