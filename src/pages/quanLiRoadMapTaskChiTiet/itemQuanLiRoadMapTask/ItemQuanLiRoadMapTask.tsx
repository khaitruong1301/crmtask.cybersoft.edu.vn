import React, { ReactNode, useState } from 'react'
import ButtonAdd from '../../../components/button/ButtonAdd'
import PopConfirmDelete from '../../../components/popConfirm/PopConfirmDelete'
import { BaiTap, DanhSachBaiHoc } from '../../../types/TypeDataRoadMapChiTiet'
import AnimateHeight from 'react-animate-height'

type Props = {
  titleButton: string,
  titleNhiemVu: string,
  contentItem?: ReactNode,
  setIsModalOpen?: React.Dispatch<React.SetStateAction<boolean>>,
  dataVideoXemTruoc?: DanhSachBaiHoc[],
  dataBaiTap?: DanhSachBaiHoc[],
  dataTaiLieu?: DanhSachBaiHoc[],
  dataVideoLienQuan?: DanhSachBaiHoc[],
  dataNhiemVuKhac?: []
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
  setIsModalOpen = () => { },
}: Props) => {
  const [collapsed, setCollapsed] = useState(true);
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
                {dataVideoXemTruoc?.length && dataVideoXemTruoc.map((item, index) => {
                  return <li key={index} className="flex justify-between w-full mb-1 rounded px-4 py-3 bg-white border border-white-border hover:bg-white-hover">
                    <a className='text-black flex items-center justify-between w-full'>
                      <p className='mb-0 mr-1'>+ {item.tieuDe}</p>
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
                {dataTaiLieu?.length && dataTaiLieu.map((item, index) => {
                  return <li key={index} className="flex justify-between w-full mb-1 rounded px-4 py-3 bg-white border border-white-border hover:bg-white-hover">
                    <a className='text-black flex items-center justify-between w-full'>
                      <p className='mb-0 mr-1'>+ {item.tieuDe}</p>
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
                {dataBaiTap?.length && dataBaiTap.map((item, index) => {
                  return <li key={index} className="flex justify-between w-full mb-1 rounded px-4 py-3 bg-white border border-white-border hover:bg-white-hover">
                    <a className='text-black flex items-center justify-between w-full'>
                      <p className='mb-0 mr-1'>+ {item.tieuDe}</p>
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
                {dataVideoLienQuan?.length && dataVideoLienQuan.map((item, index) => {
                  return <li key={index} className="flex justify-between w-full mb-1 rounded px-4 py-3 bg-white border border-white-border hover:bg-white-hover">
                    <a className='text-black flex items-center justify-between w-full'>
                      <p className='mb-0 mr-1'>+ {item.tieuDe}</p>
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
                {/* <li className="flex justify-between w-full mb-1 rounded px-4 py-3 bg-white border border-white-border hover:bg-white-hover">
                  <a className='text-black flex items-center justify-between w-full'>
                    <p className='mb-0 mr-1'>+ Bài 1: Giới thiệu</p>
                    <PopConfirmDelete
                      title='Bạn có chắc muốn xoá chứ ?'
                      content={<button>Xoá</button>}
                    >
                      <button>
                        <i className="fa-regular fa-trash-can  hover:text-red-500"></i>
                      </button>
                    </PopConfirmDelete>
                  </a>
                </li> */}
              </ul>
            </div>
            <div>
              <ButtonAdd title={`+ ${titleButton}`} onClick={() => {
                setIsModalOpen(true);
              }} />
            </div>
          </AnimateHeight>
        </div>
      </div>
    </div>
  )
}

export default ItemQuanLiRoadMapTask