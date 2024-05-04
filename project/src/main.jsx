import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContextUsuariosProvider } from './context/ContextUsuario';
import { RouterProvider } from 'react-router-dom'
import routers from './router/routers.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextUsuariosProvider>
        <RouterProvider router={routers}>
        </RouterProvider>
    </ContextUsuariosProvider>
)
