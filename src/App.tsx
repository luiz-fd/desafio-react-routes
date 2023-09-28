import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Inicio from "./routes/Home/inicio"
import Home from "./routes/Home"

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<Navigate to="/inicio" />} />
            <Route path="/inicio" element={ <Inicio/> } />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
