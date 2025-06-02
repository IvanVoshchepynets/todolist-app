import { createSlice } from '@reduxjs/toolkit';

// Читання з localStorage
const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem('tasks');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Помилка при читанні з localStorage:', error);
    return [];
  }
};

// Запис у localStorage
const saveToLocalStorage = (tasks) => {
  try {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (error) {
    console.error('Помилка при записі в localStorage:', error);
  }
};

const initialState = {
  tasks: loadFromLocalStorage(),
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      saveToLocalStorage(state.tasks);
    },
    toggleStatus: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.status = !task.status;
        saveToLocalStorage(state.tasks);
      }
    },
    softDeleteTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.deleted_at = new Date().toISOString();
        saveToLocalStorage(state.tasks);
      }
    },
    restoreTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.deleted_at = null;
        saveToLocalStorage(state.tasks);
      }
    },
    updateTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const index = state.tasks.findIndex((t) => t.id === id);
      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...updatedTask };
        saveToLocalStorage(state.tasks);
      }
      },
      hardDeleteTask: (state, action) => {
        state.tasks = state.tasks.filter((t) => t.id !== action.payload);
      }
      
  },
});

export const { addTask, toggleStatus, softDeleteTask, restoreTask, updateTask, hardDeleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
