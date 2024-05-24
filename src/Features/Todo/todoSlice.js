import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action) => {
      const UpdatedTodo = state.todos.map((todo) =>
        todo.id == action.payload.id ? action.payload : todo
      );
      return { todos: UpdatedTodo };
    },
    deleteTodo: (state, action) => {
      const filteredTodos = state.todos.filter(
        (todo) => todo.id != action.payload
      );
      return { todos: filteredTodos };
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
