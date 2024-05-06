import { createContext } from "react";
import useFetch from "../hooks/useFetch";

export const ContextLocal = createContext()

export const ContextLocalProvider = ({ children }) => {
    const { data , loading } = useFetch("http://localhost:3000/locais")

    function cadastrarLocal(local) {
        fetch("http://localhost:3000/locais", {
            method: "POST",
            body: JSON.stringify(local),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(() => alert("Local Cadastrado com sucesso!") && window.location.reload())
        .catch(() => alert("Erro ao cadastrar local!"))
    }

    return (
        <ContextLocal.Provider value={{ data, loading, cadastrarLocal }}>
            {children}
        </ContextLocal.Provider>
    )
}