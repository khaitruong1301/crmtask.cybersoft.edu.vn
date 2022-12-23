import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/configsStore';
import CrmTask from './template/crmTask/CrmTask';
import { Route, Routes } from 'react-router-dom';
import { history } from './util/config';
import { BrowserRouter } from 'react-router-dom';
import QuanLiRoadMapTaskChiTiet from './pages/quanLiRoadMapTaskChiTiet/QuanLiRoadMapTaskChiTiet';
import './index.css'
import AdminTemplate from './template/admin/AdminTemplate';
import QuanLiRoadMapTask from './pages/quanLiRoadMapTask/QuanLiRoadMapTask';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='admin' element={<AdminTemplate />} >

          <Route path='roadmap' element={<QuanLiRoadMapTask />} />
          <Route path='roadmapchitiet' element={<QuanLiRoadMapTaskChiTiet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
