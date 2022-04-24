import { createContext, useState } from "react";

export const ToggleContext=createContext()

export const ToggleContextProvider=({children})=>{
    const [Toggle,setToggle]=useState(false)
    const handleChange=()=>{
        setToggle(!Toggle)
    }
    return(
        <ToggleContext.Provider value={{Toggle,handleChange}}>
            {children}
        </ToggleContext.Provider>
    )
}