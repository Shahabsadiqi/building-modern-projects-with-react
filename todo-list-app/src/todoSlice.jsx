import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
  name: 'todos',
  initialState: {
    value: [
      { text: "a new cloths", isCompleted: true },
      { text: "a new shose", isCompleted: false }
    ],
  },
  reducers: {
    createTodo: (state, action) => {
      const { text } = action.payload; // Allow dynamic todo text
      state.value.push({ text, isCompleted: false });
    },
    markTodoAsComplete: (state, action) => {
      const { text } = action.payload; 
      const todo = state.value.find(t => t.text === text);
      if (todo) {
        todo.isCompleted = true;
      } else {
        console.error(`Todo with text "${text}" not found.`);
      }
    },
    deleteTodo: (state, action) => {
      const { text } = action.payload; // Expect text as part of action payload
      state.value = state.value.filter(t => t.text !== text);
    },
  }
});

export const { createTodo, markTodoAsComplete, deleteTodo } = TodoSlice.actions;
