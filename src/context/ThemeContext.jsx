import React, {createContext, useState} from "react";

export const ThemeContext = React.createContext("light");

export const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState("light"); 

    return <ThemeContext.Provider value={theme}>
        {children}
    </ThemeContext.Provider>
}