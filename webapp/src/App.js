import logo from "./logo.svg"
import "./App.css"
import { NavBar } from "./components/core/NavBar"
import { ThemeProvider } from "@emotion/react"
import { DarkTheme } from "./components/Theme"
import { HomepageCarosel } from "./pages/AboutMe"

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={DarkTheme}>
        <NavBar />
        <HomepageCarosel />
      </ThemeProvider>
    </div>
  )
}

export default App
