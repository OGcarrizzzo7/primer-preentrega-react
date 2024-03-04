import React from 'react';

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
            </ul>
        </nav>
    );
};

export default NavBar;