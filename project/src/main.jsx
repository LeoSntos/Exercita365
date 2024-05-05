import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContextGlobalProvider } from './context/ContextGlobal.jsx'
import { RouterProvider } from 'react-router-dom'
import routers from './router/routers.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(

    <ContextGlobalProvider>
        <RouterProvider router={routers}>
        </RouterProvider>
    </ContextGlobalProvider>
    
)
