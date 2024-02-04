//todoslice
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const { title, description } = action.payload;
      const existingTodo = state.todos.find(
        (todo) => todo.title === title && todo.description === description
      );

      if (!existingTodo) {
        state.todos.push({
          id: Date.now().toString(),
          title,
          description,
          completed: false,
        });
      } else {
        console.warn("Todo already exists!");
      }
    },
    deleteTodo: (state, action) => {
      const todoId = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
    },
    complete: (state, action) => {
      const todoId = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, complete } = todoSlice.actions;

export default todoSlice;
