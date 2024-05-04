import styles from "./Header.module.css"
import { Link} from "react-router-dom"
import { Button } from "@mui/material"

function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.containerLinks}>
                <Link className={styles.Links} to="/Pagina-cadastro-local">Cadastro de local</Link>
                <Link className={styles.Links} to="/Pagina-dashboard">Dashboard</Link>
                <Link className={styles.Links} to="/Pagina-listagem-de-locais">Listagem de locais</Link>
                <Button variant="contained" className={styles.Links} to="">Logout</Button>
            </div>
        </div>
    )
}

export default Header