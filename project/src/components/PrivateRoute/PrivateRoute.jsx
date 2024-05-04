import { Navigate } from "react-router-dom"

let estaAutenticado = JSON.parse(localStorage.getItem("estaAutenticado")) || false

function PrivateRoute({ children }) {
    return estaAutenticado ? children  : <Navigate to="/Login" />
}

export default PrivateRoute