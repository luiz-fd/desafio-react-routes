import { Link, NavLink } from 'react-router-dom'
import './styles.css'

export default function Header(){
    return(
        <header>
            <div className="header-content-container container">
                <nav className="navbar">
                    <NavLink to="/" className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item" } >
                        Início
                    </NavLink>
                    <NavLink to="/produtos" className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item" } >
                        Produtos
                    </NavLink>
                    <NavLink to="/sobre" className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item" } >
                        Sobre nós
                    </NavLink>
                </nav>
                <Link to="/">
                    <h1>D</h1>
                </Link>
            </div>
        </header>
    )
}