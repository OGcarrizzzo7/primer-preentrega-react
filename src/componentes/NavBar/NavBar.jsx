import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <nav className='NavBar'>
                <Link to='/'>
                    <h3>Ecommerce</h3>
                </Link>
                <div className='Categorias'>
                    <NavLink to={`/Category/Pistones`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pistones</NavLink>
                    <NavLink to={`/Category/Bielas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Bielas</NavLink>
                    <NavLink to={`/Category/Inyeccion`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Inyeccion</NavLink>
                </div>
            </nav>
            <CartWidget/>
        </>
    )
}

export default NavBar;