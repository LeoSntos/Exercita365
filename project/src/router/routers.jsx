import { createBrowserRouter } from "react-router-dom"
import PaginaCadastroUsuario from "../pages/PaginaCadastroUsuario"
import PaginaDashboard from "../pages/PaginaDashboard"
import PaginaCadastroLocal from "../pages/PaginaCadastroLocal"
import PaginaListagemDeLocais from "../pages/PaginaListagemDeLocais"
import PaginaLogin from "../pages/PaginaLogin"
import App from "../App"
import PrivateRoute from "../components/PrivateRoute/PrivateRoute"

const routers = createBrowserRouter([
    {
        path: "/Login",
        element: <PaginaLogin />
    },
    {
        path: "/Pagina-cadastro-usuario",
        element: <PaginaCadastroUsuario />
    },
    {
        path: "/",
        element: (
            <PrivateRoute>
                <App />
            </PrivateRoute>
        ),
        children: [
            {
                path: "/",
                element: <PaginaDashboard />
            },
            {
                path: "/Pagina-cadastro-local",
                element: <PaginaCadastroLocal />
            },
            {
                path: "/Pagina-listagem-de-locais",
                element: <PaginaListagemDeLocais />
            }
        ]
    }
])

export default routers