import { createContext, useState } from "react";

const ThemeContext = createContext();


export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('Light');

    const toggleTheme = () => {
        console.log('theme', theme);
        
        setTheme((prevTheme) => prevTheme === 'Light' ? 'Dark' : 'Light')
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext