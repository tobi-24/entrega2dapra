import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget"

const NavBar =() =>{
    return(
        <nav className="NavBar">
            <Link to="/">
                <h3>Ecommerce</h3>
            </Link>
            <div className="Categories">
                <NavLink to={`/categories/celular`} className={({ isActive }) => isActive ?'ActiveOption' : 'Option'}>Celulares</NavLink>
                <NavLink to={`/categories/tablets`} className={({ isActive }) => isActive ?'ActiveOption' : 'Option'}>Tablets</NavLink>
                <NavLink to={`/categories/notebook`} className={({ isActive }) => isActive ?'ActiveOption' : 'Option'}>Notebook</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;