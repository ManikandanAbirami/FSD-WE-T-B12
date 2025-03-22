import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <header
            style={{
                background: theme === 'light' ? 'white' : 'black',
                color: theme === 'light' ? 'black' : 'white',
                padding: '1rem',
                textAlign: 'center'
            }}>
            <h1>My Themed App</h1>
            <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'dark' : 'light'} Mode
            </button>
        </header>
    )
}

export default Header