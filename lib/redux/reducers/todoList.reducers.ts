import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: TaskListCollectionState = {
  taskLists: [],
};

const taskListCollectionSlice = createSlice({
  name: 'taskListCollection',
  initialState,
  reducers: {
    addTaskList: (state, action: PayloadAction<string>) => {
      state.taskLists.push({
        id: new Date().toISOString(),
        name: action.payload,
        tasks: [],
      });
    },
    deleteTaskList: (state, action: PayloadAction<string>) => {
      state.taskLists = state.taskLists.filter(
        (taskList) => taskList.id !== action.payload,
      );
    },
    addTask: (
      state,
      action: PayloadAction<{ taskListId: string; title: string }>,
    ) => {
      const taskList = state.taskLists.find(
        (taskList) => taskList.id === action.payload.taskListId,
      );
      if (taskList) {
        taskList.tasks.push({
          id: new Date().toISOString(),
          title: action.payload.title,
          completed: false,
          createdDate: new Date().toISOString(),
          isDeleted: false,
        });
      }
    },
    completeTask: (
      state,
      action: PayloadAction<{ taskListId: string; taskId: string }>,
    ) => {
      const taskList = state.taskLists.find(
        (taskList) => taskList.id === action.payload.taskListId,
      );
      if (taskList) {
        const task = taskList.tasks.find(
          (task) => task.id === action.payload.taskId,
        );
        if (task) {
          task.completed = !task.completed;
          task.updatedDate = new Date().toISOString();
        }
      }
    },
    softDeleteTask: (
      state,
      action: PayloadAction<{ taskListId: string; taskId: string }>,
    ) => {
      const taskList = state.taskLists.find(
        (taskList) => taskList.id === action.payload.taskListId,
      );
      if (taskList) {
        const task = taskList.tasks.find(
          (task) => task.id === action.payload.taskId,
        );
        if (task) {
          task.isDeleted = true;
          task.deletedDate = new Date().toISOString();
        }
      }
    },
    hardDeleteTask: (
      state,
      action: PayloadAction<{ taskListId: string; taskId: string }>,
    ) => {
      const taskList = state.taskLists.find(
        (taskList) => taskList.id === action.payload.taskListId,
      );
      if (taskList) {
        taskList.tasks = taskList.tasks.filter(
          (task) => task.id !== action.payload.taskId,
        );
      }
    },
    restoreTask: (
      state,
      action: PayloadAction<{ taskListId: string; taskId: string }>,
    ) => {
      const taskList = state.taskLists.find(
        (taskList) => taskList.id === action.payload.taskListId,
      );
      if (taskList) {
        const task = taskList.tasks.find(
          (task) => task.id === action.payload.taskId,
        );
        if (task && task.isDeleted) {
          task.isDeleted = false;
          task.deletedDate = undefined;
          task.updatedDate = new Date().toISOString();
        }
      }
    },
  },
});

export const {
  addTaskList,
  deleteTaskList,
  addTask,
  completeTask,
  softDeleteTask,
  hardDeleteTask,
  restoreTask,
} = taskListCollectionSlice.actions;

export const taskListCollectionReducer = taskListCollectionSlice.reducer;
