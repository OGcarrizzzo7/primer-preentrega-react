import React, { useState } from 'react';
import cartWidget from './CartWidget';

const productos = () => {
    const productosList = [
        { id: 1, name: 'Bielas Forjadas', precio: 20.99 },
        { id: 2, name: 'Pistones Forjados', precio: 15.49 },
        { id: 3, name: 'Fueltech FT550', precio: 30.00 },
    ];

    return productosList;
};

const ItemListContainer = (props) => {
    const [productosEnCarrito, setProductosEnCarrito] = useState([]);

    const productosList = productos();

    const handleAgregarAlCarrito = (producto) => {
        const nuevaLista = [...productosEnCarrito, producto];
        setProductosEnCarrito(nuevaLista);

        console.log(`Producto agregado al carrito: ${producto.name}`);
        console.log('Productos en el carrito:', nuevaLista);
    };

    return (
        <div>
            <h2>{props.greeting}</h2>
            <ul>
                {productosList.map(producto => (
                    <li key={producto.id}>
                        <p>{producto.name}</p>
                        <p>Precio: ${producto.precio}</p>
                        <button onClick={() => handleAgregarAlCarrito(producto)}>
                            Agregar al Carrito
                        </button>
                    </li>
                ))}
            </ul>
            <cartWidget productosEnCarrito={productosEnCarrito} />
        </div>
    );
};

export default ItemListContainer;