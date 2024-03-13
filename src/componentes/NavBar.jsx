import React from 'react';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer'; 

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">Inicio</a>
                </li>
                <li>
                    <a href="/acerca">Acerca de</a>
                </li>
                <li>
                    <a href="/contacto">Contacto</a>
                </li>
                <li>
                    <CartWidget/>
                </li>
            </ul>
            <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
        </nav>
    );
};

export default NavBar;