import { Button, TextField } from "@mui/material"
import { Link } from "react-router-dom"
import styles from "./PaginaLogin.module.css"
import { useContext, useState } from "react"
import { ContextUsuarios } from "../context/ContextUsuario"

function PaginaLogin() {
    const { login } = useContext(ContextUsuarios)

    const [usuario , setUsuario] = useState({
        email: "", 
        senha: ""
    })
    
    async function relizarLogin() {
        await login(usuario.email, usuario.senha)
    } 

    return (
        <div className={styles.content}>
            <div className={styles.formBlock}>
                <h1 className={styles.title}>Login</h1>

                <form>
                    <TextField type="email" label="Email" onChange={e => setUsuario({...usuario, email: e.target.value})}/>
                    <TextField type="password" label="Senha" onChange={e => setUsuario({...usuario, senha: e.target.value})}/>

                    <p>Nao está cadastrado ainda? clique <Link to="/Pagina-cadastro-usuario">aqui</Link></p> 
                    <Button variant="contained" onClick={() => relizarLogin()}>Entrar</Button>
                </form>
            </div>
        </div>
    )
}

export default PaginaLogin

