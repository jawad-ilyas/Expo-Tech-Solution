import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import Home from './screens/Home.jsx';
import AboutUs from './screens/AboutUs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path:"aboutus",
        element: <AboutUs/> 
      }
    ]
  }

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <RouterProvider router={router} >
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
