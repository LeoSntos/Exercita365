import { Button, TextField } from "@mui/material"
import styles from "./PaginaLogin.module.css"
import { Link} from "react-router-dom"

function PaginaLogin() {
    return (
        <div className={styles.content}>
            <div className={styles.formBlock}>
                <h1 className={styles.title}>Login</h1>

                <form>
                    <TextField type="text" label="Email" />
                    <TextField type="password" label="Senha" />

                    <p>Nao está cadastrado ainda? clique <Link to="/Pagina-cadastro-usuario">aqui</Link></p>
                    <Button variant="contained" type="submit">Entrar</Button>
                </form>
            </div>
        </div>
    )
}

export default PaginaLogin

