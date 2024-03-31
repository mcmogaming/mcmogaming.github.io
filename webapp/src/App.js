import logo from "./logo.svg"
import "./App.css"
import { NavBar } from "./components/core/NavBar"
import { ThemeProvider } from "@emotion/react"
import { DarkTheme } from "./components/Theme"
import { Homepage } from "./pages/Homepage.page"

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={DarkTheme}>
        <NavBar />
        <Homepage />
      </ThemeProvider>
    </div>
  )
}

export default App
