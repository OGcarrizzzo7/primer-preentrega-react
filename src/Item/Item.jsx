import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import './Item.css';

const Item = ({ id, name, img, price, stock }) => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/producto/${id}`);
    }

    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg'/>
            </picture>
            <section>
                <p className='Info'>
                    Precio: ${price}
                </p>
                <p className='Info'>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                {}
                <Link to={`/producto/${id}`} className='Option'>Ver Detalle</Link>
            </footer>
        </article>
    );
}

export default Item;