import React from 'react';
import ReactDOM from 'react-dom/client';

// Css Files
import './Fonts/css/all.min.css';
import './Fonts/css/normalize.css';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// All Components
import DashboardRoot from './Components/dashboardRoot/DashboardRoot';
import ErrorPage from './Components/errorPage/ErrorPage';
import DashboardMain from './Components/dashboardMain/DashboardMain';
import DashboardChat from './Components/dashboardChat/DashboardChat';


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <DashboardRoot />,
    children: [
      {
        index: true,
        element: <DashboardMain />,
      },
      {
        path: "branch-management",
        element: <div>Branch</div>
      },
      {
        path: "roles-management/employee-list",
        element: <div>Roles</div>
      },
      {
        path: "chat",
        element: <DashboardChat />
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);



