import React from 'react'
import { Space, Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
type Props = {}
interface DataType {
  key: React.Key;
  maLoTrinh: number;
  tenLoTrinh: string;
  thaoTac: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Mã lộ trình',
    dataIndex: 'maLoTrinh',
    filterMode: 'tree',
    filterSearch: true,
    // onFilter: (value: any, record) => record.name.startsWith(value),
    width: '30%',
  },
  {
    title: 'Tên Lộ Trình',
    dataIndex: 'tenLoTrinh',
    render: (text: string) => <Link to={"#"}>{text}</Link>,
    // sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Thao tác',
    dataIndex: 'thaoTac',
    render: (_: any, record: DataType) => (
      <Space size="middle">
        <div className='px-3 '>
          <a className='hover:bg-slate-200 rounded px-2 py-2'>Tạo mới danh mục task</a>
        </div>
        <div className='px-3'>
          <a className='hover:bg-slate-200 rounded px-2 py-2'><EditOutlined className='text-lg' /></a>
        </div>
        <div className='px-3'>
          <button className='text-white px-2 py-2 bg-red-500 hover:bg-red-600 rounded flex items-center justify-center'>
            <DeleteOutlined className='text-lg leading-none' />
          </button>
        </div>
      </Space>
    )
  },
];

const data: DataType[] = [
  {
    key: '1',
    maLoTrinh: 1,
    tenLoTrinh: "FE chuyên nghiệp",
    thaoTac: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    maLoTrinh: 2,
    tenLoTrinh: "BE Java",
    thaoTac: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    maLoTrinh: 3,
    tenLoTrinh: "BE Nodejs",
    thaoTac: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    maLoTrinh: 4,
    tenLoTrinh: "Bootcamp FE",
    thaoTac: 'London No. 2 Lake Park',
  },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};



export default function TableItemRoadMap({ }: Props) {
  return (
    <Table columns={columns} dataSource={data} onChange={onChange} />
  )
}