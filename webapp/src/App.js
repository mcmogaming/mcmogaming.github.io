import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavBar } from "./components/core/NavBar"
import { ThemeProvider } from "@emotion/react"
import { DarkTheme } from "./components/Theme"
import { HomePage } from "./pages/Home.page"
import { ProjectsPage } from "./pages/Projects.page"
import { QrCodePage } from "./pages/Qrcode.page"

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={DarkTheme}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="qrcode" element={<QrCodePage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
