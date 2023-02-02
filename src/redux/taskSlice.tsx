import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './configsStore';
import { DeleteTaskPayLoad, TaskState } from '../types/TypeTaskState';
import { DataRoadMap, DataTask, DataRoadMapChiTiet, DanhSach, DanhSachBaiHoc } from '../types/TypeDataRoadMapChiTiet';
import { type } from 'os';

//Defining our initialState's type
type initialStateType = {
    isModalAddTaskVisible: boolean,
    taskState: TaskState;
    dataRoadMap : DataRoadMap[],
    dataTask: { [key: string]: DataTask },
    isActiveLuuButton: boolean
};

const initialState: initialStateType = {
    isModalAddTaskVisible: false,
    taskState : {} as TaskState,
    dataRoadMap: [] as DataRoadMap[],
    dataTask: {} as { [key: string]: DataTask },
    isActiveLuuButton: true
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
      getDataFromApi: (state, action: PayloadAction<DataRoadMapChiTiet>) => {
        state.dataRoadMap = action.payload.dataRoadMap
        state.dataTask = action.payload.dataTask
      },
      deleteTask: (state, action:PayloadAction<DeleteTaskPayLoad>) => {
        const {maBaiHocXoa, maBuoiHoc, typeTask} = action.payload
        // Xóa key mã bài học 
        let dataTaskCuaBuoiHoc = state.dataTask[maBuoiHoc]
        let dataTaskBuoiHocTheoLoai = dataTaskCuaBuoiHoc[typeTask as keyof DataTask]
        delete dataTaskBuoiHocTheoLoai[maBaiHocXoa]
        state.isActiveLuuButton = false
      },
      addTask: (state, action:PayloadAction<DanhSachBaiHoc>) => {
        const {id, tieuDe} = action.payload
        console.log(state.dataTask)
        let newTask: DanhSach =  {
          idBaiHoc:   id,
          tieuDe:        tieuDe,
          isHoanThanh:   false,
          ngayHoanThanh: new Date()
        }
        
        let dataTaskCuaBuoiHoc = state.dataTask[state.taskState.idBuoiHoc.toString()]
        if (dataTaskCuaBuoiHoc) {
          let dataTaskBuoiHocTheoLoai = dataTaskCuaBuoiHoc[state.taskState.typeTask as keyof DataTask]
          // Thêm key mã bài học 
          dataTaskBuoiHocTheoLoai[id.toString()] = newTask

          // Xóa cái bài học trong taskState đi
          state.taskState.danhSachBaiHoc = state.taskState.danhSachBaiHoc.filter(x => x.id != id)
          state.isActiveLuuButton = false
        } else {
          console.log(dataTaskCuaBuoiHoc)
          dataTaskCuaBuoiHoc = {
              danhSachVideoXemTruoc: {  } as { [key: string]: DanhSach },
              danhSachTracNghiem:    {  } as { [key: string]: DanhSach },
              danhSachBaiTap:        {  } as { [key: string]: DanhSach },
              danhSachTaiLieuExtra:  {  } as { [key: string]: DanhSach },
              danhSachBaiTapExtra:   {  } as { [key: string]: DanhSach },
              danhSachCapstone:      {  } as { [key: string]: DanhSach },
            }

            let dataTaskBuoiHocTheoLoai = dataTaskCuaBuoiHoc[state.taskState.typeTask as keyof DataTask]
          // Thêm key mã bài học 
          dataTaskBuoiHocTheoLoai[id.toString()] = newTask
          console.log(state.dataTask)
          state.isActiveLuuButton = false
        }
       
      }
  },
});

// To able to use reducers we need to export them.
export const { openModalAddTask, closeModalAddTask, getDataFromApi, deleteTask, addTask } = taskSlice.actions;

//Selector to access bookList state.
export const listRoadMap = (state: RootState) => state;

export default taskSlice.reducer;