import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../Features/Todo/todoSlice";
const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});

export default store;
