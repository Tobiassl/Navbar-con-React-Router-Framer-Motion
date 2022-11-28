import React from 'react';
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return(
        <nav>
        <NavLink to='/'>Inicio</NavLink>
        <NavLink to='/Acercade'>Acerca De</NavLink>
        <NavLink to='/shop'>Shop</NavLink>
        <NavLink to='/contacto'>Contacto</NavLink>
        </nav>
    )
}

export { Navbar }