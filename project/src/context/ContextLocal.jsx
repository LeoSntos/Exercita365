import { createContext } from "react";
import useFetch from "../hooks/useFetch";

export const ContextLocal = createContext()

export const ContextLocalProvider = ({ children }) => {
    const { data, loading } = useFetch("http://localhost:3000/locais")

    function cadastrarLocal(local) {
        fetch("http://localhost:3000/locais", {
            method: "POST",
            body: JSON.stringify(local),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(() => {
            alert("Local cadastrado com sucesso!")
            window.location.reload()
        }).catch(() => alert("Erro ao cadastrar local!"))
    }

    function editarLocal(dadosLocais, id) {
        fetch(`http://localhost:3000/locais/${id}`, {
            method: "PATCH",
            body: JSON.stringify(dadosLocais),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                if (response.ok) {
                    alert("Local editado com sucesso!");
                    window.location.reload();
                } else {
                    throw new Error("Erro ao editar local");
                }
            })
            .catch(error => {
                console.error("Erro ao editar local:", error);
                alert("Erro ao editar local!");
            });
    }

    function excluirLocal(id) {
        fetch(`http://localhost:3000/locais/${id}`, {
            method: "DELETE",
        }).then(() => {
            alert("Local excluido com sucesso!")
            window.location.reload()
        }).catch(() => alert("Erro ao excluir local!"))
    }

    return (
        <ContextLocal.Provider value={{ data, loading, cadastrarLocal, editarLocal, excluirLocal }}>
            {children}
        </ContextLocal.Provider>
    )
}