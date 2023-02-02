import { Modal,message  } from 'antd';
import React, { ReactElement, ReactNode, SetStateAction } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { addTask, closeModalAddTask } from '../../../redux/taskSlice';
import { DanhSachBaiHoc } from '../../../types/TypeDataRoadMapChiTiet';

type Props = {
  isVisible: boolean
  title: string
  onCloseModal?: () => void,
}



const ModalChonItem = ({
  isVisible,
  title,
  onCloseModal = () => { },
}: Props) => {
  const task = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();

  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.info('Hello, Ant Design!');
  };

  return (
    <Modal
      title={title}
      open={isVisible}
      onCancel={() => {
       dispatch(closeModalAddTask())
      }}
      footer={null}
      zIndex={1000}
      style={{ top: 20, width: "800px" }}
    >
      <div style={{ width: "100%" }}>
      <ul className="d-flex flex-wrap">
                {task.taskState.danhSachBaiHoc && task.taskState.danhSachBaiHoc.map((item, index) => {
                  return <li key={index} className="flex justify-between w-full mb-1 rounded px-4 py-3 bg-white border border-white-border hover:bg-white-hover">
                    <a className='text-black flex items-center justify-between w-full'>
                      <p className='mb-0 mr-1'>+ {item.tieuDe}</p>
                      {contextHolder}
                        <button onClick={() => {
                          dispatch(addTask(
                            item
                          ))
                        
                          info()
                        } }>
                          <i className="fa fa-regular fa-plus hover:text-red-500"></i>
                        </button>
                    </a>
                  </li>
                })}
              </ul>
        </div>
    </Modal>
  )
}

export default ModalChonItem