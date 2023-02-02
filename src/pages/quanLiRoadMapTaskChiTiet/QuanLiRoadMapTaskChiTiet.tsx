import { Cascader, Button } from 'antd';
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
import { getDataFromApi } from '../../redux/taskSlice';
type Props = {}
export type TypeDataTask = typeof dataJson;

export default function QuanLiRoadMapTaskChiTiet({ }: Props) {
  const BASE_URL = "/api/crmtask/get-task-crm"
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
  const onChange = (value: any) => {
    console.log(value);
  };
  
  const fetchData = (): Promise<DataRoadMapChiTiet> => {
    return BaseApi.get(`${BASE_URL}/${idRoadMapDetail}`).then((res) => res.data.content)
  }

  useEffect(() => {
    fetchData().then((data) => {
      dispatch(getDataFromApi(data))
    })
    
  }, [])
  


  const renderTaskTheoBuoi = () => {
    return taskReducer?.dataRoadMap?.map((item: DataRoadMap, index: number) => {
      return <RoadMapTaskBuoi
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
          <TitleLayout
            icon={<i className="fa-solid fa-users mr-3"></i>}
            title="Quản lí Roadmap Task chi tiết"
          />
        </div>
        {/* tìm kiếm */}
        <div className="roadmap_task_search mb-3">
          <button className="btn btn-primary" disabled={taskReducer.isActiveLuuButton}>
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