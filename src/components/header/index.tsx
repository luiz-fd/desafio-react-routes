import { Link, NavLink } from "react-router-dom";
import "./styles.css";
import HomeIMG from "../../images/Vector.png";

export default function Header() {
  return (
    <header>
      <div className="header-content-container container">
        <nav className="header-navbar">
          <NavLink
            to="/inicio"
            className={({ isActive }) =>
              isActive ? "header-menu-item header-menu-active" : "header-menu-item"
            }
          >
            Início
          </NavLink>
          <NavLink
            to="/produtos"
            className={({ isActive }) =>
              isActive ? "header-menu-item header-menu-active header-menu-item-left" : "header-menu-item header-menu-item-left"
            }
          >
            Produtos
          </NavLink>
          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              isActive ? "header-menu-item header-menu-active header-menu-item-left" : "header-menu-item header-menu-item-left"
            }
          >
            Sobre nós
          </NavLink>
        </nav>
        <div className="header-home-icon">
          <Link to="/">
            <img src={HomeIMG} />
          </Link>
        </div>
      </div>
    </header>
  );
}
