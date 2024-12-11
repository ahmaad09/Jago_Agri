import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPages from './Pages/login.jsx';
import RegisterPages from './Pages/Register.jsx';
import ErrorPage from './Pages/404.jsx';
import ProductPage from './Pages/products.jsx';
import ResetAcount from './Pages/resetAcount.jsx';
import ResetPassword from './Pages/resetPassword.jsx';
import Dashboard from './Pages/dashboard.jsx';
import HomePages from './Pages/homePages.jsx';
import Forum from './Pages/forum.jsx';
import Panduan from './Pages/panduan.jsx';
import HawarDaun from './Pages/hawarDaun.jsx';
import PenyakitBulai from './Pages/penyakitBulai.jsx';
import ResetEmail from './Pages/resetEmail.jsx';
import ProtectedRoute from './Pages/ProtectedRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePages />
  },
  {
    path: "*",
    element: <ErrorPage />
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
    path: "/reset-email",
    element: <ResetEmail/>
  },
  {
    path: "/reset-password",
    element: <ResetPassword/>
  },
  {
    path: "/products",
    element: <ProductPage/>
  },
  {
    path: "/dashboard",
    element:  (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    )
  },
  {
    path: "/forum",
    element: (
      <ProtectedRoute>
        <Forum />
      </ProtectedRoute>
    )
  },
  {
    path: "/panduan",
    element: (
      <ProtectedRoute>
        <Panduan />
      </ProtectedRoute>
    )
  },
  {
    path: "/hawarDaun",
    element: <ProtectedRoute>
      <HawarDaun/>
      </ProtectedRoute>
  },
  {
    path: "/penyakitBulai",
    element: 
      <ProtectedRoute>
        <PenyakitBulai/>
      </ProtectedRoute>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
