import React, { ReactNode } from 'react'
import ButtonAdd from '../../../components/button/ButtonAdd'

type Props = {
  titleButton: string,
  titleNhiemVu: string,
  contentItem?: ReactNode,
  setIsModalOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

const ItemQuanLiRoadMapTask = ({
  titleButton,
  titleNhiemVu,
  contentItem,
  setIsModalOpen = () => { },
}: Props) => {
  return (
    <div className=" bg-white p-5 rounded-md shadow_item">
      {/* <div>
        <ButtonAdd title='Tạo nhiệm vụ' />
      </div> */}
      <div>
        <div className="video_xem_truoc">
          <div className="title_video_xem_truoc mb-3">
            <h4 className='font-bold text-lg'>{titleNhiemVu}</h4>
          </div>
          <div className="item_xem_truoc mb-3">
            <ul className="d-flex flex-wrap">
              <li className="flex justify-between w-full mb-1 rounded px-4 py-3 bg-white border border-white-border hover:bg-white-hover">
                <a className='text-black flex items-center justify-between w-full'>
                  <p className='mb-0 mr-1'>+ Bài 1: Giới thiệu</p>
                  <button className=''>
                    <i className="fa-regular fa-trash-can  hover:text-red-500"></i>
                  </button>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ButtonAdd title={`+ ${titleButton}`} onClick={() => {
              console.log('object');
              setIsModalOpen(true);
            }} />

          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemQuanLiRoadMapTask