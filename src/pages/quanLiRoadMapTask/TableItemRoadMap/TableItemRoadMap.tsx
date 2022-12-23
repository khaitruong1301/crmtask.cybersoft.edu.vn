import React from 'react'
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { Link } from 'react-router-dom';
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
    render: (text: string) => <Link to={""}></Link>,
    // sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    // onFilter: (value: any, record) => record.address.startsWith(value),
    filterSearch: true,
    width: '40%',
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