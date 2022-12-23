import React, { ReactNode } from 'react'
import TitleLayout from '../../components/titleLayout/TitleLayout'
import CascaderRoadMap from '../../components/cascader/CascaderRoadMap'
import TableItemRoadMap from './TableItemRoadMap/TableItemRoadMap'

type Props = {

}

export default function QuanLiRoadMapTask({ }: Props) {
  return (
    <div className='h-full'>
      <div className='h-1/10'>
        <TitleLayout
          icon={<i className="fa-solid fa-users mr-3"></i>}
          title="Quản lí task roadmap"
        />
      </div>
      <div className='h-1/10'>
        <CascaderRoadMap />
      </div>
      <div className='h-8/10'>
        <TableItemRoadMap />
      </div>
    </div>
  )
}