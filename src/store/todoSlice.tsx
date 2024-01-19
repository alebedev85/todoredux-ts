import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToDo } from "./types";

type InitialState = {
  todos: ToDo[]
};

const initialState: InitialState = {
  todos: []
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addToDo(state, action: PayloadAction<{text: string}>) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      })
    },
    deleteToDo(state, action: PayloadAction<{id: string}>) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    },
    toggleTodoComplete(state, action: PayloadAction<{id: string}>) {
      const toggledToDo = state.todos.find(todo => todo.id === action.payload.id)
      if (toggledToDo) {
        toggledToDo.completed = !toggledToDo.completed
      }
    },
  }
});

export const { addToDo, deleteToDo, toggleTodoComplete } = todoSlice.actions

export default todoSlice.reducer
