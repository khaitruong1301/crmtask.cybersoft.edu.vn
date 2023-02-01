import React, { ReactNode, useState } from 'react'
import ButtonAdd from '../../../components/button/ButtonAdd'
import PopConfirmDelete from '../../../components/popConfirm/PopConfirmDelete'
import { BaiTap, DanhSachBaiHoc, DanhSach } from '../../../types/TypeDataRoadMapChiTiet'
import AnimateHeight from 'react-animate-height'

import { openModalAddTask } from '../../../redux/taskSlice'
import { useAppDispatch } from '../../../hooks'



type Props = {
  titleButton: string,
  titleNhiemVu: string,
  contentItem?: ReactNode,
  dataVideoXemTruoc?: { [key: string]: DanhSach },
  dataBaiTap?: { [key: string]: DanhSach },
  dataTaiLieu?: { [key: string]: DanhSach },
  dataVideoLienQuan?: { [key: string]: DanhSach },
  dataTaiLieuExtra?: { [key: string]: DanhSach },
  dataCapstone?: { [key: string]: DanhSach },
  dataBaiTapExtra?: { [key: string]: DanhSach },
  dataTracNghiem?: { [key: string]: DanhSach },
  dataTask?:  { [key: string]: DanhSach },
  dataNhiemVuKhac?: [],
  dataRoadMap ?: DanhSachBaiHoc[],
  idBuoiHoc: number,
  typeTask: string,
}


const ItemQuanLiRoadMapTask = ({
  titleButton,
  titleNhiemVu,
  contentItem,
  dataBaiTap,
  dataNhiemVuKhac,
  dataTaiLieu,
  dataVideoLienQuan,
  dataVideoXemTruoc,
  dataTaiLieuExtra,
  dataCapstone,
  dataBaiTapExtra,
  dataTracNghiem,
  dataTask,
  dataRoadMap,
  idBuoiHoc,
  typeTask,
}: Props) => {
  const [collapsed, setCollapsed] = useState(true);
  const dispatch = useAppDispatch();

  let newDataTask:DanhSachBaiHoc[] = [] ;

  // Duyệt mảng data road map xem coi có bài nào chưa có trong task không.
  dataRoadMap?.forEach(baiHoc => {
    if (!dataTask?.[baiHoc.id]) {
      newDataTask.push(baiHoc)
    }
  });

  

  return (
    <div className=" bg-white p-5 rounded-md shadow_item">
      {/* <div>
        <ButtonAdd title='Tạo nhiệm vụ' />
      </div> */}
      <div>
        <div className="video_xem_truoc">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          >
            <div className="title_video_xem_truoc mb-3 flex justify-between items-center">
              <h4 className='font-bold text-lg'>{titleNhiemVu}</h4>
              <i
                style={{
                  transform: collapsed ? "rotate(0deg)" : "rotate(180deg)",
                }}
                className="flex-shrink-0 fa-solid fa-angle-up text-color-title  transition  duration-100 text-base"
              ></i>
            </div>
          </div>
          <AnimateHeight
            id="example-panel"
            duration={300}
            height={collapsed ? 0 : "auto"} // see props documentation below
          >
            <div className="item_xem_truoc mb-3">
              <ul className="d-flex flex-wrap">
                {dataTask && Object.keys(dataTask).map((item, index) => {
                  return <li key={index} className="flex justify-between w-full mb-1 rounded px-4 py-3 bg-white border border-white-border hover:bg-white-hover">
                    <a className='text-black flex items-center justify-between w-full'>
                      <p className='mb-0 mr-1'>+ {dataTask[item].tieuDe}</p>
                      <PopConfirmDelete
                        title='Bạn có chắc muốn xoá chứ ?'
                        content={<button>Xoá</button>}
                        
                      >
                        <button>
                          <i className="fa-regular fa-trash-can  hover:text-red-500"></i>
                        </button>
                      </PopConfirmDelete>
                    </a>
                  </li>
                })}
              </ul>
            </div>
            <div>
              {
                newDataTask?.length == 0 ? <p className='text-success'>Đã đủ task</p> :
              <ButtonAdd title={`+ ${titleButton}`} onClick={() => dispatch(openModalAddTask({
                id: idBuoiHoc,
                danhSachBaiHoc: newDataTask,
                typeTask,
              }))} />}
            </div>
          </AnimateHeight>
        </div>
      </div>
    </div>
  )
}

export default ItemQuanLiRoadMapTask