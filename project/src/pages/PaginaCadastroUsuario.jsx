import { TextField, MenuItem, Button } from "@mui/material"
import styles from "./PaginaCadastroUsuario.module.css"

function PaginaCadastroUsuario() {
    const genero = [
        {
            value: "Masculino",
            label: "Masculino"
        },
        {
            value: "Feminino",
            label: "Feminino"
        },
        {
            value: "Outro",
            label: "Outro"
        },
    ]

    return (
        <div className={styles.content}>
            <div className={styles.formBlock}>
                <h1 className={styles.title}>Cadastro de usuario</h1>
                <form>
                    <div>
                        <TextField type="text" label="Nome" placeholder="Nome completo" />

                        <TextField
                            select
                            label="sexo"
                            defaultValue=""
                            sx={{ width: 222, height: 60 }}
                        >
                            {genero.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div>
                        <TextField type="text" label="CPF" placeholder="xxx.xxx.xxx-xx" />
                        <TextField type="text" label="Data de Nascimento" placeholder="xx/xx/xx" />
                    </div>
                    <div>
                        <TextField type="email" label="E-mail" />
                        <TextField type="password" label="Senha" />
                    </div>
                        <TextField type="text" label="Cep" placeholder="xxxxx-xx" sx={{ width: 447, height: 60 }} />

                        <Button variant="contained">Cadastrar</Button>
                </form>
            </div>
        </div>
    )
}

export default PaginaCadastroUsuario