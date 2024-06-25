import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DetectSystemTheme from './utils/detectSystemTheme.js';
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
        path: "aboutus",
        element: <AboutUs />
      }
    ]
  }

]);


// * import the store and setup 
import { store } from './Store/Store.js';
import { Provider } from 'react-redux';

DetectSystemTheme();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <Provider store={store}>
      <RouterProvider router={router} >
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
