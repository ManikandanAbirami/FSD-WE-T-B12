import ThemeProvider from "./ThemeProvider"
import Header from "./Header"
import Page from "./Page"
import Footer from "./Footer"

function App() {

  return (
    <ThemeProvider>
      <Header />
      <Page />
      <Footer />
    </ThemeProvider>
  )
}

export default App
