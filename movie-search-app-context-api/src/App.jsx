import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import MovieDetail from "./pages/MovieDetail"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:imdbID" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
