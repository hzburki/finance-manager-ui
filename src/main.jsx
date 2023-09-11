import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from "@material-tailwind/react";

// Importing Custom Routes
import AppRoutes from './app.routes'

// Importing Tailwind CSS
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={AppRoutes} />
    </ThemeProvider>
  </React.StrictMode>,
)
