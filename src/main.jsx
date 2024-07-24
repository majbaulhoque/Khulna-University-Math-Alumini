import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { RouterProvider } from 'react-router-dom'
import route from './Router/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
