import { useState } from 'react'
import { ThemeContext } from './ThemeContext'

function ThemeProvider({ children }) {
    console.log('ThemeProvider', { children })
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    const value = {
        theme,
        toggleTheme
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider