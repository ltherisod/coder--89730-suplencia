import "../css/Navbar.css"
// PARA IMAGEWNES EN SRC TENGO QUE IMPORTARLA
import logoReact from '../assets/react.svg'
import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"


const Navbar = ()=>{
    return(
        <nav className='nav-container'>
            <NavLink className="anchor-nav"  to='/'>
                {/* IMAGEN EN PUBLIC (NO MENCIONO PUBLIC) */}
                <img className='logo' alt='logo' src='../logo-shop.png' />
                {/* IMG EN SRC */}
                 {/* <img className='logo' alt='logo' src={logoReact} /> */}
            </NavLink>
            <NavLink className="anchor-nav" to="/category/nuevos">Nuevos</NavLink>
            <NavLink className="anchor-nav" to="/category/ofertas">Ofertas</NavLink>
            <NavLink className="anchor-nav" to="/category/mas vendidos">Más vendidos</NavLink>
            <CartWidget compras={15}/>
        </nav>
    )
}

export default Navbar