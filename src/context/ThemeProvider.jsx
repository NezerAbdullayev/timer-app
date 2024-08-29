import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(true);

    function darkMode() {
        setIsDarkMode(true);
    }

    function lightMode() {
        setIsDarkMode(false);
    }



    // dark mode 
    useEffect(() => {
        if (isDarkMode === true)
            document.getElementById('root').classList.add('dark');
        else document.getElementById('root').classList.remove('dark');
    }, [isDarkMode]);




    return (
        <ThemeContext.Provider value={{ isDarkMode, darkMode, lightMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
