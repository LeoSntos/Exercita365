import { createContext, useContext } from "react";
import { ContextUsuariosProvider } from "./ContextUsuario";
import { ContextLocalProvider } from "./ContextLocal";

export const ContextGlobal = createContext()

export const ContextGlobalProvider = ({ children }) => {

    return (
        <ContextUsuariosProvider>
            <ContextLocalProvider>
                <ContextGlobal.Provider value={{}}>
                    {children}
                </ContextGlobal.Provider>
            </ContextLocalProvider>
        </ContextUsuariosProvider>
    )
}
