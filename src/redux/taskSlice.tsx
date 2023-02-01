import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './configsStore';
import { TaskState } from '../types/TypeTaskState';

//Defining our initialState's type
type initialStateType = {
    isModalAddTaskVisible: boolean,
    taskState: TaskState;
};

const initialState: initialStateType = {
    isModalAddTaskVisible: false,
    taskState : {} as TaskState
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    openModalAddTask: (state, action: PayloadAction<TaskState>) => {
      // console.log(action.payload)
      state.isModalAddTaskVisible = true;
      state.taskState = action.payload;
    },
    closeModalAddTask: (state) => {
        state.isModalAddTaskVisible = false;
        state.taskState = {} as TaskState;
      },
  },
});

// To able to use reducers we need to export them.
export const { openModalAddTask, closeModalAddTask } = taskSlice.actions;

//Selector to access bookList state.
export const listRoadMap = (state: RootState) => state;

export default taskSlice.reducer;