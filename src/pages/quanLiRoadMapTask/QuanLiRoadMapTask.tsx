import { Cascader } from 'antd';
import React, { ReactElement, useState } from 'react'
import AnimateHeight from 'react-animate-height';
import ItemQuanLiRoadMapTask from './itemQuanLiRoadMapTask/ItemQuanLiRoadMapTask';
import ButtonAdd from '../../components/button/ButtonAdd';
import ModalChonItem from './modalChonItem/ModalChonItem';
type Props = {}

export default function QuanLiRoadMapTask({ }: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contentModal, setContentModal] = useState<ReactElement>(<div></div>);
  const options = [
    {
      value: "zhejiang",
      label: "Zhejiang",
      children: [
        {
          value: "hangzhou",
          label: "Hangzhou",
          children: [
            {
              value: "xihu",
              label: "West Lake",
            },
          ],
        },
      ],
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
      children: [
        {
          value: "nanjing",
          label: "Nanjing",
          children: [
            {
              value: "zhonghuamen",
              label: "Zhong Hua Men",
            },
          ],
        },
      ],
    },
  ];
  const onChange = (value: any) => {
    console.log(value);
  };
  return (
    <>
      <ModalChonItem
        isVisible={isModalOpen}
        title="Thêm dữ liệu"
        contetModal={contentModal}
        setContentModal={setContentModal}
        setIsVisible={setIsModalOpen}
      />
      <div className="roadmap_task bg-white-hover">
        {/* tiêu đề */}
        <div className="roadmap_task_title mb-3">
          <h2 className="d-flex align-items-center">
            <span className="flex w-10 h-10 bg-blue-theme mr-3 text-white rounded-full text-xs items-center justify-center">
              <i className="fa-solid fa-angle-up"></i>
            </span>
            Quản lí Roadmap Task
          </h2>
        </div>
        {/* tìm kiếm */}
        <div className="roadmap_task_search mb-3">
          <Cascader
            options={options}
            onChange={onChange}
            placeholder="Chọn roadmap"
          />
        </div>
        {/* nút bấm collapse */}
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            setCollapsed(!collapsed);
          }}
        >
          <div className="d-flex align-items-center justify-content-center bg-blue-theme px-5 py-3 text-sm text-white rounded-t">
            <p className="mb-0 flex-grow-1">Buổi: 1</p>
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
            duration={500}
            height={collapsed ? 0 : "auto"} // see props documentation below
          >
            <div className="roadmap_task_content">
              <div className="new_task p-3">
                <ButtonAdd title='Tạo task' />
              </div>
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="w-50 p-2">
                  <ItemQuanLiRoadMapTask
                    titleButton={"Chọn video xem trước"}
                    titleNhiemVu={"Video xem trước"}
                    setIsModalOpen={setIsModalOpen}
                  />
                </div>
                <div className="w-50 p-2">
                  <ItemQuanLiRoadMapTask
                    titleButton={"Chọn tài liệu"}
                    titleNhiemVu={"Đọc tài liệu tham khảo"}
                  />
                </div>
                <div className="w-50 p-2">
                  <ItemQuanLiRoadMapTask
                    titleButton={"Chọn bài tập"}
                    titleNhiemVu={"Nộp bài tập"}
                  />
                </div>
                <div className="w-50 p-2">
                  <ItemQuanLiRoadMapTask
                    titleButton={"Chọn khoá học liên quan"}
                    titleNhiemVu={"Xem khoá học liên quan"}
                  />
                </div>
                <div className="w-50 p-2">
                  <ItemQuanLiRoadMapTask
                    titleButton={"Các nhiệm vụ khác"}
                    titleNhiemVu={"Các nhiệm vụ khác"}
                  />
                </div>
              </div>
            </div>
          </AnimateHeight>
        </div>
      </div>
    </>
  )
}