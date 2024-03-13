import React, { useEffect, useState } from 'react';

const CounterComponent = ({ productosEnCarrito }) => {
    const [cantidadTotal, setCantidadTotal] = useState(0);
    const [precioTotal, setPrecioTotal] = useState(0);

    useEffect(() => {
        // Calcular la cantidad total de productos en el carrito
        const nuevaCantidadTotal = productosEnCarrito.reduce((total, producto) => total + producto.cantidad, 0);
        setCantidadTotal(nuevaCantidadTotal);

        // Calcular el precio total sumando los precios de los productos
        const nuevoPrecioTotal = productosEnCarrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
        setPrecioTotal(nuevoPrecioTotal);
    }, [productosEnCarrito]);

    return (
        <div>
            <p>Cantidad total de productos: {cantidadTotal}</p>
            <p>Precio total: ${precioTotal.toFixed(2)}</p>
        </div>
    );
};

export default CounterComponent;