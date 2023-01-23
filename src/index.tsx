import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/configsStore';
import CrmTask from './template/crmTask/CrmTask';
import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import { history } from './util/config';
import QuanLiRoadMapTaskChiTiet from './pages/quanLiRoadMapTaskChiTiet/QuanLiRoadMapTaskChiTiet';
import './index.css'
import AdminTemplate from './template/admin/AdminTemplate';
import QuanLiRoadMapTask from './pages/quanLiRoadMapTask/QuanLiRoadMapTask';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient()

root.render(
  <QueryClientProvider client={queryClient}>
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<AdminTemplate />} >
          <Route path='roadmap' element={<QuanLiRoadMapTask />} ></Route>
          <Route path='roadmapchitiet' element={<QuanLiRoadMapTaskChiTiet />} ></Route>
          <Route path='roadmapchitiet/:idRoadMapDetail' element={<QuanLiRoadMapTaskChiTiet />} ></Route>
          <Route path='*' element={<Navigate to="admin/roadmap" />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
  </QueryClientProvider>
);
