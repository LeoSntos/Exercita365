import { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export const ContextUsuarios = createContext()

export const ContextUsuariosProvider = ({ children }) => {
    const { data, loading } = useFetch("http://localhost:3000/usuarios")

    async function login(email, senha) {
        try {
            const res = await fetch("http://localhost:3000/usuarios")
            const dados = await res.json()

            let existeUsuario = false

            dados.map(usuario => {
                if (usuario.email == email) {
                    existeUsuario = true
                    if (usuario.senha == senha) {
                        localStorage.setItem("estaAutenticado", true)
                        window.location.href = "/"
                        return
                    }

                    alert("Senha ou Email incorreta")
                    return
                }


            })

            if (!existeUsuario) {
                alert("Nao existe usuarios com este email")
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ContextUsuarios.Provider value={{ data, loading, login }}>
            {children}
        </ContextUsuarios.Provider>
    )
}