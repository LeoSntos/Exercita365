import { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export const ContextUsuarios = createContext()

export const ContextUsuariosProvider = ({ children }) => {
    const { data , loading } = useFetch("http://localhost:3000/usuarios")

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
                        UsuarioLogado(usuario.id)
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

    async function logout() {
        try {
            const res = await fetch("http://localhost:3000/usuarios");
            const dados = await res.json();

            // Encontrar o usuário logado
            const usuarioLogado = dados.find(usuario => usuario.isLogado === true);
            if (usuarioLogado) {
                // Atualizar o status de login do usuário para false
                await fetch(`http://localhost:3000/usuarios/${usuarioLogado.id}`, {
                    method: "PATCH",
                    body: JSON.stringify({ isLogado: false }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
            }

            localStorage.setItem("estaAutenticado", false);
            window.location.href = "/Login";
        } catch (error) {
            console.log(error);
        }
    }

    async function UsuarioLogado(userId) {
        try {
            await fetch(`http://localhost:3000/usuarios/${userId}`, {
                method: "PATCH",
                body: JSON.stringify({ isLogado: true }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } catch (error) {
            console.log(error);
        }
    }

    function cadastrarUsuario(usuario) {
        if (usuario.nome == "") {
            alert("O usuário precisa ter um nome!")
        }
        else if (cpfExiste(usuario.cpf)) {
            alert("Cpf ja existe em nosso sistema!")
            return
        }
        fetch("http://localhost:3000/usuarios", {
            method: "POST",
            body: JSON.stringify(usuario),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(() => {
                alert("Usuário cadastrado com sucesso!")
                window.location.href = "/login"
                return
            })
            .catch(() => alert("Erro ao cadastrar usuário!"))
    }

    function cpfExiste(cpf) {
        return data.some(usuario => usuario.cpf === cpf);
    }


    return (
        <ContextUsuarios.Provider value={{ data, loading, login, logout, cadastrarUsuario, cpfExiste }}>
            {children}
        </ContextUsuarios.Provider>
    )
}