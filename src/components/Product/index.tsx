import { NavLink } from "react-router-dom";
import './styles.css'

export default function Product() {
  return (
    <>
      <div className="produtos-container">
        <nav className="produtos-navbar">
          <NavLink
            to="/products/computers"
            className={({ isActive }) =>
              isActive ? "produtos-menu-item menu-active" : "produtos-menu-item"
            }
          >
            Computadores
          </NavLink>
          <NavLink
            to="/products/electronics"
            className={({ isActive }) =>
              isActive ? "produtos-menu-item menu-active" : "produtos-menu-item"
            }
          >
            Eletrônicos
          </NavLink>
          <NavLink
            to="/products/books"
            className={({ isActive }) =>
              isActive ? "produtos-menu-item menu-active" : "produtos-menu-item"
            }
          >
            Livros
          </NavLink>
        </nav>
      </div>
    </>
  );
}
