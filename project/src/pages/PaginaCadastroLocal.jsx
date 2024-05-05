import { TextField, Button, FormLabel, FormGroup, FormControlLabel, Checkbox } from "@mui/material"
import { ContextLocal } from "../context/ContextLocal"
import styles from "./PaginaCadastroLocal.module.css"
import { useForm } from "react-hook-form"
import { useContext } from "react"


function PaginaCadastroLocal() {
    const { cadastrarLocal } = useContext(ContextLocal)
    const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm()

    const buscarCep = async () => {
        let cep = getValues("cep")

        if (!!cep) {
            await fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(res => res.json())
                .then(data => {
                    setValue("bairro", data.bairro)
                    setValue("logradouro", data.logradouro)
                    setValue("localidade", data.localidade)
                    setValue("uf", data.uf)
                })
                .catch(err => console.log(err))
        }
    }

    function onSubmit(formValue) {
        const tiposDePraticasEcolhidas = Object.entries(formValue)
            .filter(([key, value]) => value === true)
            .map(([key, value]) => key)

        formValue.tiposDePraticas = tiposDePraticasEcolhidas

        cadastrarLocal(formValue)
    }

    return (
        <div className={styles.mainCotent}>
            <div className={styles.formBlock}>
                <h1>Cadastro de locais de exercicios</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <TextField label="Nome do local" name="Nomelocal" type="text" sx={{ width: 450 }} {...register("nomelocal", {
                            required: "Nome do local obrigatóriorio",
                            pattern: {
                                value: /^[\p{L}\s\-']+$/u,
                                message: "Nome do local invalido"
                            }
                        })} />
                        <TextField label="Nome do criador" name="NomeCriador" type="text" sx={{ width: 450 }} {...register("nomeCriador", {
                            required: "Nome do criador obrigatóriorio",
                            pattern: {
                                value: /^[\p{L}\s\-']+$/u,
                                message: "Nome do criador invalido"
                            }
                        })} />
                    </div>

                    <div>
                        <TextField label="Descriçao do local" name="Descriçaolocal" type="text" sx={{ width: 450 }} {...register("descriçaoLocal", {
                            required: "Descriçao do local obrigatóriorio",
                            minLength: {
                                value: 10,
                                message: "Descriçao do local muito,  curta minimo 10 caracteres"
                            }
                        })} />
                        <TextField label="cep" type="text" sx={{ width: 450 }} {...register("cep", {
                            required: "cep obrigatóriorio",
                            pattern: {
                                value: /^\d{5}-\d{3}$/,
                                message: "Cep invalido"
                            },
                            onBlur: () => buscarCep()
                        })} />
                    </div>
                    <div>
                        <TextField label="Bairro" name="bairro" type="text" sx={{ width: 450 }} {...register("bairro", {
                            required: "Cidade obrigatóriorio",
                            pattern: {
                                value: /^[\p{L}\s\-']+$/u,
                                message: "Bairro invalido"
                            }
                        })} />
                        <TextField label="Logradouro" name="logradouro" type="text" sx={{ width: 450 }} {...register("logradouro", {
                            required: "Logradouro obrigatóriorio",
                            pattern: {
                                value: /^[\p{L}\s\-']+$/u,
                                message: "Logradouro invalido"
                            }
                        })} />
                    </div>
                    <div>
                        <TextField label="Cidade" name="localidade" type="text" sx={{ width: 450 }} {...register("localidade", {
                            required: "Cidade obrigatóriorio",
                            pattern: {
                                value: /^[\p{L}\s\-']+$/u,
                                message: "Cidade invalido"
                            }
                        })} />
                        <TextField label="cep" type="Estado" sx={{ width: 450 }} {...register("uf", {
                            required: "Estado obrigatóriorio",
                            pattern: {
                                value: /^(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)$/,
                                message: "Estado invalido"
                            }
                        })} />
                    </div>
                    <TextField label="Cordenadas" sx={{ width: 900 }} {...register("Cordenadas", {
                        required: "Cordenadas obrigatóriorio",
                        pattern: {
                            value: /^[-+]?\d{1,3}\.\d{6,},\s*[-+]?\d{1,3}\.\d{6,}$/,
                            message: "Cordenadas invalidas"
                        }
                    })} />

                    <FormLabel component="legend">Tipos de Práticas esportivas</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox name="Caminhada" {...register("Caminhada")} />

                            }
                            label="Caminhada"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox name="Trilha" {...register("Trilha")} />
                            }
                            label="Trilha"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox name="Musculaçao" {...register("Musculaçao")} />
                            }
                            label="Musculaçao"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox name="Natação" {...register("Natação")} />
                            }
                            label="Natação"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox name="Surf" {...register("Surf")} />
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