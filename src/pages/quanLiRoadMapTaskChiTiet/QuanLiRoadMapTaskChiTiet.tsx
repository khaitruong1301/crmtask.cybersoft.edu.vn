import { Cascader, Button, message } from 'antd';
import _ from 'lodash'
import React, { ReactElement, useEffect, useState } from 'react'
import AnimateHeight from 'react-animate-height';
import ItemQuanLiRoadMapTask from './itemQuanLiRoadMapTask/ItemQuanLiRoadMapTask';
import ButtonAdd from '../../components/button/ButtonAdd';
import ModalChonItem from './modalChonItem/ModalChonItem';
import dataJson from './../../dataFake/response_1671721468600.json';
import RoadMapTaskBuoi from './roadMapTaskBuoi/RoadMapTaskBuoi';
import TitleLayout from '../../components/titleLayout/TitleLayout';
import { DataTask, DataRoadMap, DataRoadMapChiTiet, DanhSachBaiHoc, DanhSach } from '../../types/TypeDataRoadMapChiTiet';
import { useQuery } from '@tanstack/react-query';
import { BaseApi } from '../../service/BaseService';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import ColumnGroup from 'antd/es/table/ColumnGroup';
import { getDataFromApi, turnOffLuuButton } from '../../redux/taskSlice';
type Props = {}
export type TypeDataTask = typeof dataJson;

export default function QuanLiRoadMapTaskChiTiet({ }: Props) {
  const BASE_URL_GET_DATA = "/api/crmtask/get-task-crm"
  const BASE_URL_UPDATE_DATA = "/api/crmtask/update-task-crm"
  const dispatch = useAppDispatch();
  const {idRoadMapDetail} = useParams()
  const taskReducer = useAppSelector((state) => state.task)
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
  const [messageApi, contextHolder] = message.useMessage();


  function luuTask() {
    BaseApi.post(`${BASE_URL_UPDATE_DATA}/${idRoadMapDetail}`,taskReducer.dataTask).then(res =>{ if(res.status === 200) {
      message.info("Đã update task thành công")
    }})
  }
  
  const fetchData = (): Promise<DataRoadMapChiTiet> => {
    return BaseApi.get(`${BASE_URL_GET_DATA}/${idRoadMapDetail}`).then((res) => res.data.content)
  }

  useEffect(() => {
    fetchData().then((data) => {
      dispatch(getDataFromApi(data))
    })
    
  }, [])
  


  const renderTaskTheoBuoi = () => {
    return taskReducer?.dataRoadMap?.map((item: DataRoadMap, index: number) => {
      return <RoadMapTaskBuoi
        thuTuBuoiHoc= {index + 1}
        key={index}
        dataItem={item}
        dataTask = {taskReducer?.dataTask?.[item.id]}
      />
    })
  }
  return (
    <>
      <ModalChonItem
        isVisible={taskReducer.isModalAddTaskVisible}
        title="Thêm dữ liệu"
      />
      <div className="roadmap_task bg-white-hover">
        {/* tiêu đề */}
        <div className="roadmap_task_title mb-3">
          {contextHolder}
          <TitleLayout
            icon={<i className="fa-solid fa-users mr-3"></i>}
            title="Quản lí Roadmap Task chi tiết"
          />
        </div>
        {/* tìm kiếm */}
        <div className="roadmap_task_search mb-3">
          <button className="btn btn-primary" disabled={taskReducer.isActiveLuuButton} onClick={() => {luuTask() 
          dispatch(turnOffLuuButton())
          }}>
            Lưu Task
          </button>
        </div>
        <div>
          {renderTaskTheoBuoi()}
        </div>
      </div>
    </>
  )
}