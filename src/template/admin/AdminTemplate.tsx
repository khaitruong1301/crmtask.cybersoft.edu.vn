import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './adminTemplate.css'
const logoCyber = require('./../../assets/img/logoCyber.png')
const { Header, Sider, Content } = Layout;
type Props = {}

export default function AdminTemplate({ }: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div className='h-screen'>
      <Layout>
        <Sider className='h-screen p-3 w-56 min-w-56' trigger={null} collapsible collapsed={collapsed}>
          {/* logo cybersoft  */}
          <div className="logo" >
            <img className='mx-auto' width={100} height={100} src={logoCyber} alt="" />
          </div>
          <div className="title mb-10">
            <h3 className='text-white font-semibold uppercase text-center'>CRM Task RoadMap</h3>
          </div>

          <div>
            <Menu>
              <Menu.Item>
                <Link className='flex justify-start items-center' to={"roadmap"}>
                  <i className="fa-solid fa-house mr-2"></i>
                  <p className='leading-5'>Quản lí task roadmap</p>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link className='flex justify-start items-center' to={"roadmapchitiet"}>
                  <i className="fa-solid fa-list-check mr-2"></i>
                  <p className='leading-5'>Quản lí nhiệm vụ khác</p>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link className='flex justify-start items-center' to={""}>
                  <i className="fa-solid fa-code mr-2"></i>
                  <p className='leading-5'>Quản lí runcode</p>
                </Link>
              </Menu.Item>
            </Menu>
          </div>
        </Sider>
        <Layout className="site-layout h-screen max-h-screen">
          {/* <Header style={{ padding: 0, background: colorBgContainer }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header> */}
          <div className='p-5 overflow-y-auto h-full'>
            <Outlet />
          </div>
        </Layout>
      </Layout>
    </div>
  )
}