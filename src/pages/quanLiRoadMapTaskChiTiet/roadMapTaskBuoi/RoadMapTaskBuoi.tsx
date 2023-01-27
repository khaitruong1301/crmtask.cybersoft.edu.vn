import React, { useState } from 'react'
import AnimateHeight from 'react-animate-height';
import ButtonAdd from '../../../components/button/ButtonAdd';
import { DataTask, DataRoadMap } from '../../../types/TypeDataRoadMapChiTiet';
import ItemQuanLiRoadMapTask from '../itemQuanLiRoadMapTask/ItemQuanLiRoadMapTask';



type Props = {
  dataItem: DataRoadMap,
  dataTask: DataTask
}

export default function RoadMapTaskBuoi({ dataItem, dataTask }: Props) {
  const [collapsed, setCollapsed] = useState(false);

  const { baiTap, baiTapLamThem, capstone, id, maRoadMapDetail, maSkill, ngayHoc, stt, taiLieu, taiLieuDocThem, tracNghiem, tracNghiemExtra, videoXemLai, videoXemTruoc } = dataItem;


  return (
    <>
      {/* nút bấm collapse */}
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      >
        <div className="d-flex align-items-center justify-content-center bg-blue-theme px-5 py-3 text-sm text-white rounded-t">
          <p className="mb-0 flex-grow-1">Buổi: {stt}</p>
          <i
            style={{
              transform: collapsed ? "rotate(0deg)" : "rotate(180deg)",
            }}
            className="flex-shrink-0 fa-solid fa-angle-up text-color-title  transition  duration-100 text-base"
          ></i>
        </div>
      </div>
      {/* Item theo từng buổi  */}
      <div className="body_collapse">
        <AnimateHeight
          id="example-panel"
          duration={300}
          height={collapsed ? 0 : "auto"} // see props documentation below
        >
          <div className="roadmap_task_content">
            <div className="new_task p-3">
              <ButtonAdd title='Tạo task' />
            </div>
            <div className="flex items-start flex-wrap pb-5">
              <div className="w-50 p-2">
                <ItemQuanLiRoadMapTask
                  titleButton={"Chọn video xem trước"}
                  titleNhiemVu={"Video xem trước"}
                  dataVideoXemTruoc={dataTask?.danhSachVideoXemTruoc}
                />
              </div>
              <div className="w-50 p-2">
                <ItemQuanLiRoadMapTask
                  titleButton={"Chọn trắc nghiệm"}
                  titleNhiemVu={"Làm trắc nghiệm"}
                  dataTracNghiem={dataTask?.danhSachTracNghiem}
                />
              </div>
              <div className="w-50 p-2">
                <ItemQuanLiRoadMapTask
                  titleButton={"Chọn tài liệu"}
                  titleNhiemVu={"Đọc tài liệu tham khảo"}
                  dataTaiLieuExtra={dataTask?.danhSachTaiLieuExtra}
                />
              </div>
              <div className="w-50 p-2">
                <ItemQuanLiRoadMapTask
                  titleButton={"Chọn bài tập"}
                  titleNhiemVu={"Xem bài tập extra"}
                  dataBaiTapExtra={dataTask?.danhSachBaiTapExtra}
                />
              </div>
              <div className="w-50 p-2">
                <ItemQuanLiRoadMapTask
                  titleButton={"Chọn capstone"}
                  titleNhiemVu={"Làm bài capstone"}
                  dataCapstone={dataTask?.danhSachCapstone}
                />
              </div>
              <div className="w-50 p-2">
                <ItemQuanLiRoadMapTask
                  titleButton={"Chọn bài tập"}
                  titleNhiemVu={"Nộp bài tập"}
                  dataBaiTap={dataTask?.danhSachBaiTap}
                />
              </div>
              {/* <div className="w-50 p-2">
                <ItemQuanLiRoadMapTask
                  titleButton={"Chọn khoá học liên quan"}
                  titleNhiemVu={"Xem khoá học liên quan"}
                  dataVideoLienQuan={videoXemLai.danhSachBaiHoc}
                />
              </div> */}
              <div className="w-50 p-2">
                <ItemQuanLiRoadMapTask
                  titleButton={"Các nhiệm vụ khác"}
                  titleNhiemVu={"Các nhiệm vụ khác"}
                  dataNhiemVuKhac={[]}
                />
              </div>
            </div>
          </div>
        </AnimateHeight>
      </div>
    </>
  )
}