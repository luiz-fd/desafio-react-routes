import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeBody from "./routes/Home/homebody";
import Home from "./routes/Home";
import Products from "./routes/Home/products";
import Sobre from "./routes/Home/about";
import NotFoud from "./routes/Home/NotFound";
import Computadores from "./routes/Home/products/computers";
import Electronics from "./routes/Home/products/electronics";
import Books from "./routes/Home/products/books";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomeBody />} />
          <Route path="/products" element={<Products />}>
            <Route path="computers" element={<Computadores/>} />
            <Route path="electronics" element={<Electronics/>} />
            <Route path="books" element={<Books/>} />
          </Route>
          <Route path="/about" element={<Sobre />} />
          <Route path="*" element={<NotFoud></NotFoud>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
