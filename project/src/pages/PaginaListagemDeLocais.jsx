import CardsLocais from "../components/CardLocais/CardsLocais"
import styles from "./PaginaListagemDeLocais.module.css"
import { ContextLocal } from "../context/ContextLocal"
import { useContext } from "react"
import {Button} from "@mui/material"
import { Link } from "react-router-dom"

function PaginaListagemDeLocais() {
    const { data, excluirLocal } = useContext(ContextLocal)

    return (
        <div className={styles.mainContent}>
            <div className={styles.block}>
            <h1>Listagem de locais</h1>
                <div>
                    {data && data.map((local, index) => (
                        <div key={index}>
                            <CardsLocais props={local}/>
                            <Link to={`/Pagina-editar-local/${local.id}`}>
                            <Button sx={{mb: 2, mr: 2, ml: 2}} variant="contained">Editar</Button>
                            </Link>
                            <Button color="error" sx={{mb: 2,}} onClick={() => excluirLocal(local.id)}  variant="contained">Excluir</Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PaginaListagemDeLocais