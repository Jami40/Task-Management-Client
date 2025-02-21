import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from './Home/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AllTask from './Pages/AllTask';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>

        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
          path:'allTask',
          element:<AllTask></AllTask>
        }
      ]
    },
  ]);

export default router;