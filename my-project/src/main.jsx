import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPages from './Pages/login.jsx';
import RegisterPages from './Pages/Register.jsx';
import ErrorPage from './Pages/404.jsx';
import ProductPage from './Pages/products.jsx';
import ResetAcount from './Pages/resetAcount.jsx';
import ResetUsername from './Pages/resetUsername.jsx';
import ResetPassword from './Pages/resetPassword.jsx';

const router = createBrowserRouter([
  {
    path: "",
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPages />
  },
  {
    path: "/register",
    element: <RegisterPages />
  },
  {
    path: "/resetAcount",
    element: <ResetAcount/>
  },
  {
    path: "/resetUsername",
    element: <ResetUsername/>
  },
  {
    path: "/resetPassword",
    element: <ResetPassword/>
  },
  {
    path: "/products",
    element: <ProductPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
