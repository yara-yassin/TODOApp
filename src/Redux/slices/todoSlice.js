//todoslice
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    completedTodos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const { title, description } = action.payload;
      if (!title.trim() && !description.trim()) {
        alert("Title and Description cannot be empty!");
      } else if (!title.trim() && description.trim()) {
        alert("Title cannot be empty!");
      } else if (title.trim() && !description.trim()) {
        alert("Description cannot be empty!");
      } else {
        const existingTodo = state.todos.find(
          (todo) =>
            todo.title.toLowerCase() === title.toLowerCase() &&
            todo.description.toLowerCase() === description.toLowerCase()
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
