import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Page() {
    const { theme } = useContext(ThemeContext);

    return (
        <main
            style={{
                background: theme === 'light' ? 'white' : 'black',
                color: theme === 'light' ? 'black' : 'white',
                padding: '1rem',
                textAlign: 'center'
            }}>
            <p>This is the main content area styled by the theme.</p>
        </main>
    )
}

export default Page