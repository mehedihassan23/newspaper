import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Login from './components/Login/Login';
import Register from './components/Register/Register';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },{
    path: "/login",
    element: <Login />
  },{
    path: "/register",
    element: <Register />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
