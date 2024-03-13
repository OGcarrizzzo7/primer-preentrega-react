import React from 'react';

const CartWidget = ({ productosEnCarrito }) => {
    const cantidadProductos = productosEnCarrito.length;

    return (
        <div className="cart-widget">
            <i className="fa fa-shopping-cart"></i>
            <span className="cart-count">{cantidadProductos}</span>
        </div>
    );
};

export default CartWidget;