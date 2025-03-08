import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Candies from './Candies';
import CandyDetails from './CandyDetails';


function App() {

  return (
    <Router>
      <div style={styles.container}>
        <nav style={styles.navbar}>
          <Link style={styles.link} to="/">🏡 Home</Link>
          <Link style={styles.link} to="/about">💡 About</Link>
          <Link style={styles.link} to="/candies">🍭 Candies</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/candies" element={<Candies />} />
          <Route path="/candies/:id" element={<CandyDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

const styles = {
  container: { textAlign: 'center', margin: '20px', fontFamily: 'Arial, sans-serif' },
  navbar: { backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '5px' },
  link: { margin: '0 10px', textDecoration: 'none', color: '#333', fontWeight: 'bold' },
}

export default App
