import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Inicio from "./routes/Home/inicio";
import Home from "./routes/Home";
import Produtos from "./routes/Home/produto";
import Sobre from "./routes/Home/sobre";
import NotFoud from "./routes/Home/NotFound";
import Computadores from "./routes/Home/produto/computadores";
import Eletronicos from "./routes/Home/produto/eletronicos";
import Livros from "./routes/Home/produto/livros";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/produtos" element={<Produtos />}>
            <Route path="computadores" element={<Computadores/>} />
            <Route path="eletronicos" element={<Eletronicos/>} />
            <Route path="livros" element={<Livros/>} />
          </Route>
          <Route path="/sobre" element={<Sobre />} />
          <Route path="*" element={<NotFoud></NotFoud>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
