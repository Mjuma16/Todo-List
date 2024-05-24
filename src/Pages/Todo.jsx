import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../Features/Todo/todoSlice";
import { Link } from "react-router-dom";

function Todo() {
  const todoitem = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const [todo, setTodo] = useState({
    title: "",
    description: "",
    time: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 100),
      ...todo,
    };
    dispatch(addTodo(newTodo));
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-5">
          <form onSubmit={handleSubmit} className="w-100">
            <h1 className="my-4 todo_heading">Add Todo</h1>
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
              Save Todo
            </button>
          </form>
        </div>

        {/* 2nd coloum start here */}
        <div className="col-md-7">
          <h1 className="todo_heading">Todo List</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Time</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {todoitem.map((todo, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{todo.id}</th>
                    <td>{todo.title}</td>
                    <td>{todo.description}</td>
                    <td>{todo.time}</td>
                    <td>
                      <button
                        className="btn"
                        onClick={() => {
                          dispatch(deleteTodo(todo.id));
                        }}
                      >
                        <i className="bi bi-trash3 text-danger"></i>
                      </button>
                      <Link to={`/update-todo/${todo.id}`}>
                        <i className="bi bi-pencil-square"></i>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Todo;
