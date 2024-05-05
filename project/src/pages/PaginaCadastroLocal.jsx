import { TextField, Button, FormLabel, FormGroup, FormControlLabel, Checkbox } from "@mui/material"
import styles from "./PaginaCadastroLocal.module.css"

function PaginaCadastroLocal() {
    return (
        <div className={styles.mainCotent}>
            <div className={styles.formBlock}>
                <h1>Cadastro de locais de exercicios</h1>
                <form>
                    <TextField label="Nome do local" type="text" sx={{ width: 450 }} />
                    <TextField label="Nome do criador" type="text" sx={{ width: 450 }} />
                    <TextField label="Descriçao do local" type="text" sx={{ width: 450 }} />
                    <TextField label="Localizaçao" type="text" sx={{ width: 450 }} />
                    <TextField label="Cordenadas" sx={{ width: 450 }} />
                    <FormLabel component="legend">Tipos de Práticas esportivas</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox name="Caminhada" />
                            }
                            label="Caminhada"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox name="Trilha" />
                            }
                            label="Trilha"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox name="Musculaçao" />
                            }
                            label="Musculaçao"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox name="Natação" />
                            }
                            label="Natação"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox name="Surf" />
                            }
                            label="Surf"
                        />
                    </FormGroup>
                    <Button variant="contained" type="Submit">enviar</Button>
                </form>
            </div>
        </div >
    )
}

export default PaginaCadastroLocal