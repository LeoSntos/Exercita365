import { Button, TextField } from "@mui/material"
import styles from "./PaginaLogin.module.css"

function PaginaLogin() {
    return (
        <div className={styles.content}>
            <div className={styles.formContent}>
                <h1 className={styles.title}>Login</h1>

                <form>
                    <TextField type="text" label="Email" />
                    <TextField type="password" label="Senha" />

                    <p>Nao está cadastrado ainda? clique <a>aqui</a></p>
                    <Button variant="contained" type="submit">Entrar</Button>
                </form>
            </div>
        </div>
    )
}

export default PaginaLogin

