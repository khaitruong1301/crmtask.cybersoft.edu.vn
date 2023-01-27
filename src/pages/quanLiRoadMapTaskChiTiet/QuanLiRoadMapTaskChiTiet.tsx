import { Cascader } from 'antd';
import React, { ReactElement, useEffect, useState } from 'react'
import AnimateHeight from 'react-animate-height';
import ItemQuanLiRoadMapTask from './itemQuanLiRoadMapTask/ItemQuanLiRoadMapTask';
import ButtonAdd from '../../components/button/ButtonAdd';
import ModalChonItem from './modalChonItem/ModalChonItem';
import dataJson from './../../dataFake/response_1671721468600.json';
import RoadMapTaskBuoi from './roadMapTaskBuoi/RoadMapTaskBuoi';
import TitleLayout from '../../components/titleLayout/TitleLayout';
import { DataTask, DataRoadMap, DataRoadMapChiTiet } from '../../types/TypeDataRoadMapChiTiet';
import { useQuery } from '@tanstack/react-query';
import { BaseApi } from '../../service/BaseService';
import { useParams } from 'react-router-dom';
type Props = {}
export type TypeDataTask = typeof dataJson;

export default function QuanLiRoadMapTaskChiTiet({ }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contentModal, setContentModal] = useState<ReactElement>(<div></div>);
  const [dataTask, setDataTask] = useState<DataTask>();
  const [dataRoadMap, setDataRoadMap] = useState<DataRoadMap[]>()

  const BASE_URL = "/api/crmtask/get-task-crm"

  const {idRoadMapDetail} = useParams()


  // useEffect(() => {
  //   // setDataTask(JSON.parse(JSON.stringify(data.content)));
  //   let dataFake = JSON.parse(JSON.stringify(dataJson.content));

  //   setDataRoadMap(dataFake.dataRoadMap);
  //   setDataTask(dataFake.dataTask)
  // }, [])

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
  

     const {data} = useQuery({queryKey: ['data-road-map-chi-tiet'], queryFn: fetchData});
  
  const renderTaskTheoBuoi = () => {
    return data?.dataRoadMap?.map((item: DataRoadMap, index: number) => {
      return <RoadMapTaskBuoi
        key={index}
        dataItem={item}
        dataTask = {data?.dataTask?.[item.id]}
      />
    })
  }
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
          <TitleLayout
            icon={<i className="fa-solid fa-users mr-3"></i>}
            title="Quản lí Roadmap Task chi tiết"
          />
        </div>
        {/* tìm kiếm */}
        <div className="roadmap_task_search mb-3">
          <Cascader
            options={options}
            onChange={onChange}
            placeholder="Chọn roadmap"
          />
        </div>
        <div>
          {renderTaskTheoBuoi()}
        </div>
      </div>
    </>
  )
}