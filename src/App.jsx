import React, { useState } from 'react';
import './App.css';
import ButtonComponent from './componentes/ButtonComponent.jsx';
import CounterComponent from './componentes/CounterComponent.jsx';
import NavBar from './componentes/NavBar.jsx';
import ItemListContainer from './componentes/ItemListContainer.jsx';
import CartWidget from './componentes/CartWidget.jsx';

function App() {
  const estilos = {
    width: '500px',
    height: '500px',
    margin: '10px',
  };

  const [productosEnCarrito, setProductosEnCarrito] = useState([]);

  const dispararConsola = () => {
    console.log('Hola Chicos!!');
  };

  const handleAgregarAlCarrito = (producto) => {
    const productoExistente = productosEnCarrito.find((p) => p.id === producto.id);

    if (productoExistente) {
      productoExistente.cantidad += 1;
      setProductosEnCarrito([...productosEnCarrito]);
    } else {
      setProductosEnCarrito([...productosEnCarrito, { ...producto, cantidad: 1 }]);
    }
  };

  const productosList = [
    { id: 1, name: 'Bielas Forjadas', precio: 20.99 },
    { id: 2, name: 'Pistones Forjados', precio: 15.49 },
    { id: 3, name: 'Fueltech FT550', precio: 30.00 },
  ];

  return (
    <>
      <h1 className='titulo'>CRZ RACING PARTS</h1>
      <ButtonComponent texto='contacto' color='blue' callback={dispararConsola} />
      <ButtonComponent texto='productos' color='green' callback={dispararConsola} />
      <ButtonComponent texto='nosotros' color='red' callback={dispararConsola} />
      <CounterComponent productosEnCarrito={productosEnCarrito} />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" productosList={productosList} agregarAlCarrito={handleAgregarAlCarrito} />
      <CartWidget productosEnCarrito={productosEnCarrito} />
    </>
  );
}

export default App;