import { createContext } from "react";
import type { AllapotTipus, TodoTipus } from "../adat";

export const TodoContext = createContext({})

interface TodoContextValue {
lista:TodoTipus[],
setAllapot: (index:number, allapot:AllapotTipus) => void
}

interface TodoProviderProps {
    children: React.ReactNode
}
export function TodoProvider({ children }: TodoProviderProps) {
    return (
        <TodoContext.Provider value={{}}>
            {children}
        </TodoContext.Provider>
    )
}