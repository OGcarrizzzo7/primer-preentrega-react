import './App.css'
import ButtonComponent from './componentes/ButtonComponent.jsx'
import CounterComponent from './componentes/CounterComponent.jsx'
import NavBar from './componentes/NavBar.jsx' 

function App() {

  const estilos = {
    width: '500px',
    height: '500px',
    margin: '10px',
  }

const dispararConsola = () => {
  console.log('Hola Chicos!!')
}

  return (
    <>
      <h1 classname='titulo'>CRZ RACING PARTS</h1>
      <ButtonComponent texto='contacto' color='blue'
      callback = {dispararConsola}
      />
      <ButtonComponent texto='productos'color='green'
      callback = {dispararConsola}
      />
      <ButtonComponent texto='nosotros'color='red'
      callback = {dispararConsola}
      />
      <CounterComponent />
      <img style={estilos} src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fes%2Fimages%2Fcrz-letter-initial-logo-design-template-vector-illustration%2F397807803&psig=AOvVaw2dlK2r4YbRDKQD5zGoPpx5&ust=1709566248515000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMCI69i02IQDFQAAAAAdAAAAABAE" alt="CRZ" />
      <NavBar />
          
      </>
  )
}

export default App
