import { TextField, Button, FormLabel, FormGroup, FormControlLabel, Checkbox } from "@mui/material"
import { ContextLocal } from "../context/ContextLocal"
import styles from "./PaginaEditarLocal.module.css"
import { useForm } from "react-hook-form"
import { useContext, useEffect, useState} from "react"
import { useParams } from "react-router-dom"


function PaginaEditarLocal() {
    const { editarLocal } = useContext(ContextLocal)
    const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm()
    const [localData, setLocalData] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/locais/${id}`)
            .then(res => res.json())
            .then(data => {
                setLocalData(data)
                setLocalData(data)
                setValue("nomeLocal", data.nomeLocal)
                setValue("nomeCriador", data.nomeCriador)
                setValue("descriçaoLocal", data.descriçaoLocal)
                setValue("cep", data.cep)
                setValue("bairro", data.bairro)
                setValue("logradouro", data.logradouro)
                setValue("localidade", data.localidade)
                setValue("uf", data.uf)
                setValue("cordenadas", data.cordenadas)
            })
            .catch(err => console.log(err))
    }, [setValue, id])

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

        editarLocal(formValue, id)
    }

    return (
        <div className={styles.mainCotent}>
            <div className={styles.formBlock}>
                <h1>Ediçao de locais de exercicios</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <TextField label={errors?.nomeLocal?.message || "Nome do local"} name="Nomelocal" type="text" sx={{ width: 450 }} {...register("nomeLocal", {
                            required: "Nome do local obrigatóriorio",
                            pattern: {
                                value: /^[\p{L}\s\-']+$/u,
                                message: "Nome do local invalido"
                            }
                        })} />
                        <TextField label={errors?.nomeCriador?.message || "Nome do criador"} name="NomeCriador" type="text" sx={{ width: 450 }} {...register("nomeCriador", {
                            required: "Nome do criador obrigatóriorio",
                            pattern: {
                                value: /^[\p{L}\s\-']+$/u,
                                message: "Nome do criador invalido"
                            }
                        })} />
                    </div>

                    <div>
                        <TextField label={errors?.descriçaoLocal?.message || "Descriçao do local"} name="Descriçaolocal" type="text" sx={{ width: 450 }} {...register("descriçaoLocal", {
                            required: "Descriçao do local obrigatóriorio",
                            minLength: {
                                value: 10,
                                message: "Descriçao do local muito,  curta minimo 10 caracteres"
                            }
                        })} />
                        <TextField label={errors?.cep?.message || "Cep"} type="text" sx={{ width: 450 }} {...register("cep", {
                            required: "cep obrigatóriorio",
                            pattern: {
                                value: /^\d{5}-\d{3}$/,
                                message: "Cep invalido"
                            },
                            onBlur: () => buscarCep()
                        })} />
                    </div>
                    <div>
                        <TextField label={errors?.bairro?.message || "Bairro"} name="bairro" type="text" sx={{ width: 450 }} {...register("bairro", {
                            required: "Bairro obrigatóriorio",
                            pattern: {
                                value: /^[\p{L}\s\-']+$/u,
                                message: "Bairro invalido"
                            }
                        })} />
                        <TextField label={errors?.logradouro?.message || "Logradouro"} name="logradouro" type="text" sx={{ width: 450 }} {...register("logradouro", {
                            required: "Logradouro obrigatóriorio",
                            pattern: {
                                value: /^[\p{L}\s\-']+$/u,
                                message: "Logradouro invalido"
                            }
                        })} />
                    </div>
                    <div>
                        <TextField label={errors?.localidade?.message || "Cidade"} name="localidade" type="text" sx={{ width: 450 }} {...register("localidade", {
                            required: "Cidade obrigatóriorio",
                            pattern: {
                                value: /^[\p{L}\s\-']+$/u,
                                message: "Cidade invalido"
                            }
                        })} />
                        <TextField label={errors?.uf?.message || "Estado"} type="Estado" sx={{ width: 450 }} {...register("uf", {
                            required: "Estado obrigatóriorio",
                            pattern: {
                                value: /^(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)$/,
                                message: "Estado invalido"
                            }
                        })} />
                    </div>
                    <TextField label={errors?.Cordenadas?.message || "Cordenadas"} name="Cordenadas" type="text" sx={{ width: 900 }} {...register("cordenadas", {
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
                    <Button variant="contained" type="Submit">Editar</Button>
                </form>
            </div>
        </div >
    )
}

export default PaginaEditarLocal