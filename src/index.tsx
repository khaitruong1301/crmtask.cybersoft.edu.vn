import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/configsStore';
import CrmTask from './template/crmTask/CrmTask';
import { Route, Routes } from 'react-router-dom';
import { history } from './util/config';
import { BrowserRouter } from 'react-router-dom';
import QuanLiRoadMapTask from './pages/quanLiRoadMapTask/QuanLiRoadMapTask';
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<QuanLiRoadMapTask />}
        />
      </Routes>
    </BrowserRouter>
  </Provider>
);
