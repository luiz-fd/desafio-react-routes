import { NavLink } from "react-router-dom";
import './styles.css'

export default function Produto() {
  return (
    <>
      <div className="produtos-container">
        <nav className="produtos-navbar">
          <NavLink
            to="/produtos/computadores"
            className={({ isActive }) =>
              isActive ? "produtos-menu-item menu-active" : "produtos-menu-item"
            }
          >
            Computadores
          </NavLink>
          <NavLink
            to="/eletronicos"
            className={({ isActive }) =>
              isActive ? "produtos-menu-item menu-active" : "produtos-menu-item"
            }
          >
            Eletrônicos
          </NavLink>
          <NavLink
            to="/livros"
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
