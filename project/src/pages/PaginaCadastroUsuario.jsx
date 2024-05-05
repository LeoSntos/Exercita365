import { TextField, MenuItem, Button } from "@mui/material"
import { useForm } from "react-hook-form"
import styles from "./PaginaCadastroUsuario.module.css"
import { useContext } from "react"
import { ContextUsuarios } from "../context/ContextUsuario"

function PaginaCadastroUsuario() {
    const { cadastrarUsuario } = useContext(ContextUsuarios)
    const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm()

    const buscarCep = async () => {
        let cep = getValues("cep")

        if (!!cep) {
            await fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(res => res.json())
                .then(data => {
                    setValue("logradouro", data.logradouro)
                    setValue("localidade", data.localidade)
                    setValue("uf", data.uf)
                })
                .catch(err => console.log(err))
        }
    }

    function onSubmit(formValue) {
        cadastrarUsuario(formValue)
    }

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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <TextField type="text" label={errors?.nome?.message || "Nome"} name="nome" placeholder="Nome completo" {...register("nome", {
                            required: "Nome obrigatório",
                            pattern: {
                                value: /^[A-Za-z\s]+$/,
                                message: "Nome invalido"
                            }
                        })} />

                        <TextField
                            select
                            label={errors?.sexo?.message || "Genero"}
                            name="sexo"
                            defaultValue=""
                            sx={{ width: 222, height: 60 }}
                            {...register("sexo", {
                                required: "Genero obrigatorio",
                            })}
                        >
                            {genero.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div>
                        <TextField type="text" label={errors?.cpf?.message || "Cpf"} name="cpf" placeholder="Ex: xxx.xxx.xxx-xx" {...register("cpf", {
                            required: "Cpf obrigatorio",
                            pattern: {
                                value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                                message: "Cpf invalido"
                            }
                        })} />
                        <TextField type="text" label={errors?.data_nasc?.message || "Data de nascimento"} name="data_nasc" placeholder="Ex: xx/xx/xx" {...register("data_nasc", {
                            required: "Data de nascimento obrigatorio",
                            pattern: {
                                value: /^\d{2}\/\d{2}\/\d{4}$/,
                                message: "Data invalida"
                            }
                        })} />
                    </div>
                    <div>
                        <TextField type="email" label={errors?.email?.message || "E-mail"} name="email" placeholder="Seu e-mail" {...register("email", {
                            required: "E-mail obrigatorio",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "E-mail invalido"
                            }
                        })} />
                        <TextField type="password" label={errors?.senha?.message || "Senha"} name="senha" {...register("senha", {
                            required: "Senha obrigatorio",
                            minLength: {
                                value: 3,
                                message: "Senha muito curta"
                            }
                        })} />
                    </div>
                    <TextField type="text" label={errors?.cep?.message || "Cep"} name="cep" placeholder="Ex:xxxxx-xxx" sx={{ width: 447, height: 60 }} {...register("cep", {
                        required: "Cep obrigatorio",
                        onBlur: () => buscarCep(),
                        pattern: {
                            value: /^\d{5}-\d{3}$/,
                            message: "Cep invalido"
                        }
                    })} />
                    <TextField type="text" label={errors?.localidade?.message || "Localidade"} name="localidade" placeholder="Sua cidade" sx={{ width: 447, height: 60 }} {...register("localidade", {
                        required: "Cidade obrigatorio",
                        pattern: {
                            value: /^[\p{L}\s\-']+$/u,
                            message: "Cidade invalida"
                        }
                    })} />
                    <TextField type="text" label={errors?.uf?.message || "UF"} name="uf" placeholder=" Ex: XX" sx={{ width: 447, height: 60 }} {...register("uf", {
                        required: "Estado obrigatorio",
                        pattern: {
                            value: /^(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)$/,
                            message: "Estado invalido"
                        }
                    })} />
                    <Button onClick={handleSubmit(onSubmit)} variant="contained">Cadastrar</Button>
                </form>
            </div>
        </div>
    )
}

export default PaginaCadastroUsuario