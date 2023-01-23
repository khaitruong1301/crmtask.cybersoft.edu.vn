import React from 'react'
import { Space, Table, Spin } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useQuery, UseQueryResult  } from '@tanstack/react-query'
import { BaseApi } from '../../../service/BaseService';
type Props = {}
interface DataType {
  id: number;
  tenRoadMapDetail: string;
  biDanh: string;
  stt: number;
  danhSachSkill: string[];
  endRoadMap: boolean;
  maRoadMap: number;
}

const BASE_URL = "/api/roadmapdetail";

interface UseRequestResult {
  data: DataType,
  error: Error,
  unknown: DataType[]
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Mã lộ trình',
    dataIndex: 'id',
    filterMode: 'tree',
    filterSearch: true,
    // onFilter: (value: any, record) => record.name.startsWith(value),
    width: '30%',
    render: (_: any, record: DataType) => <Link to={`/roadmapchitiet/${record.id}`}>{record.id}</Link>

  },
  {
    title: 'Tên Lộ Trình',
    dataIndex: 'tenRoadMapDetail',
    render: (_: any, record: DataType) => <Link to={`/roadmapchitiet/${record.id}`}>{record.tenRoadMapDetail}</Link>
    // sorter: (a, b) => a.age - b.age,\
  
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



const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};



const fetchData = async (): Promise<UseQueryResult<UseRequestResult>> => {
  const response = await BaseApi.get(BASE_URL)
  return response.data.content
}

export default function TableItemRoadMap({ }: Props) {

  //  const data = useQuery({ queryKey: ['listRoadMapDetail'], queryFn: fetchData })

  //  let dataRender: DataType[] = [];

  const jsonData = [{"id":10,"tenRoadMapDetail":"FE-Có Angular","biDanh":"fe-co-angular","stt":6,"danhSachSkill":["HTML-CSS","HTML5-CSS3","BOOTSTRAP-FE-CO-ANGULAR","SASS-FE-CO-ANGULAR","GIT","JS-ES5-FE-CO-ANGULAR","FETCH-API-FE","JS-ES6-FE","REACTJS-FE","TYPESCRIPT-FE","ANGULAR-FE"],"endRoadMap":false,"maRoadMap":1},{"id":11,"tenRoadMapDetail":"Data Science","biDanh":"data-science","stt":7,"danhSachSkill":["PYTHON-BASIC","MATPLOLIB","DATA-ANALYSIS","PANDAS","SEABORN","DASHBOARD","DATABASE","OOP-PYTHON"],"endRoadMap":false,"maRoadMap":1},{"id":12,"tenRoadMapDetail":"BCFE-DN","biDanh":"bcfe-dn","stt":8,"danhSachSkill":["HTML-CSS","HTML5-CSS3","BOOTSTRAP-BC-CO-ANGULAR","GIT","JS-ES5-BC-CO-ANGULAR","SASS-FE-CO-ANGULAR","FETCH-API","JS-ES6","REACTJS"],"endRoadMap":false,"maRoadMap":1},{"id":13,"tenRoadMapDetail":"Java","biDanh":"java","stt":9,"danhSachSkill":["JAVA-CORE","JAVA-OOP","JAVA-DATABASE","JAVA-BACKEND-FOUNDATION","JAVA-DESIGN-PATTERN","JAVA-SPRING","JAVA-BASIC-HIBERNATE","JAVA-RESTful-API","JAVA-LOGGING-SECURITY","JAVA-ADVANCED-HIBERNATE"],"endRoadMap":false,"maRoadMap":1},{"id":14,"tenRoadMapDetail":"React Native","biDanh":"react-native","stt":10,"danhSachSkill":["REACT-NATIVE-HTML-CSS","REACT-NATIVE-JS-ES6","REACT-NATIVE"],"endRoadMap":false,"maRoadMap":1},{"id":15,"tenRoadMapDetail":"BCFE-Bỏ Angular v2","biDanh":"bcfe-bo-angular-v2","stt":11,"danhSachSkill":["HTML-CSS-V2","HTML5-CSS3-V2","BOOTSTRAP","GIT","JS","SASS","REACTJS","TYPESCRIPT"],"endRoadMap":false,"maRoadMap":1},{"id":17,"tenRoadMapDetail":"Golang","biDanh":"golang","stt":13,"danhSachSkill":["GOLANG-CORE","GOLANG-MYSQL","GOLANG-RESTful-API","GOLANG-DOCKER","GOLANG-ADVANCED"],"endRoadMap":false,"maRoadMap":1},{"id":18,"tenRoadMapDetail":"BC-Java","biDanh":"bc-java","stt":14,"danhSachSkill":["JAVA-CORE-BC","HTML-CSS-JS-JAVA-BC","JAVA-DATABASE-BC","JAVA-SPRING-BC"],"endRoadMap":false,"maRoadMap":1},{"id":19,"tenRoadMapDetail":"NodeJSV3","biDanh":"nodejs-v3","stt":15,"danhSachSkill":["ES6","MYSQL","EXPRESSJS","ORM","DOCKER","NESTJS"],"endRoadMap":false,"maRoadMap":1},{"id":1,"tenRoadMapDetail":"BCFE-Bỏ Angular","biDanh":"bcfe-bo-angular","stt":1,"danhSachSkill":["HTML-CSS","HTML5-CSS3","BOOTSTRAP","GIT","JS-ES5","SASS","FETCH-API","JS-ES6","REACTJS","TYPESCRIPT"],"endRoadMap":false,"maRoadMap":1},{"id":2,"tenRoadMapDetail":"NodeJS","biDanh":"nodejs","stt":2,"danhSachSkill":["NODEJS-ES6","BASIC-NODEJS","MYSQL","EXPRESSJS","ADVANCED-NODEJS","GRAPHQL","SOCKETIO"],"endRoadMap":false,"maRoadMap":1},{"id":3,"tenRoadMapDetail":"New BCFE DN","biDanh":"newbcfe-dn","stt":3,"danhSachSkill":["HTML-CSS","HTML5-CSS3","BOOTSTRAP","GIT","JS-ES5","SASS","FETCH-API","JS-ES6","REACTJS","TYPESCRIPT"],"endRoadMap":false,"maRoadMap":1},{"id":4,"tenRoadMapDetail":"FE-Bỏ Angular","biDanh":"fe-bo-angular","stt":4,"danhSachSkill":["HTML-CSS","HTML5-CSS3","BOOTSTRAP-FE","SASS-FE","GIT","JS-ES5-FE","FETCH-API-FE","JS-ES6-FE","REACTJS-FE"],"endRoadMap":false,"maRoadMap":1},{"id":9,"tenRoadMapDetail":"BCFE-Có Angular","biDanh":"bc-fe-co-angular","stt":5,"danhSachSkill":["HTML-CSS","HTML5-CSS3","BOOTSTRAP-BC-CO-ANGULAR","GIT","JS-ES5-BC-CO-ANGULAR","SASS","FETCH-API-BC-CO-ANGULAR","JS-ES6","REACTJS","TYPESCRIPT-FE","ANGULAR-FE"],"endRoadMap":false,"maRoadMap":1}];
  
  const dataRender: DataType[] = jsonData;
  

  return (
    // <div>test</div>
    <Table columns={columns} dataSource={dataRender} onChange={onChange} rowKey="id" />
  )
}