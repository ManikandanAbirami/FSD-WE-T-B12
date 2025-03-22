import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Footer() {
    const { theme } = useContext(ThemeContext);
    return (
        <footer
            style={{
                background: theme === 'light' ? 'white' : 'black',
                color: theme === 'light' ? 'black' : 'white',
                padding: '1rem',
                textAlign: 'center'
            }}>
            <p>2025 MyApp. All rights reserved.</p>
        </footer>
    )
}

export default Footer