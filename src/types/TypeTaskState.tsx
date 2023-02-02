import { DanhSachBaiHoc } from "./TypeDataRoadMapChiTiet";

export type TaskState = {
    idBuoiHoc: number;
    danhSachBaiHoc: DanhSachBaiHoc[];
    typeTask: string;
   };


   export type DeleteTaskPayLoad = {
    maBuoiHoc: string,
    maBaiHocXoa: string,
    typeTask: string,
   }

   


