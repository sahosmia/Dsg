import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './padding.css'
import router from './router/root.tsx'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>

     <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)
