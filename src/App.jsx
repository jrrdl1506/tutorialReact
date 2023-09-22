import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Padre from './components/padreComponent/Padre'
import Recorredor from './components/recorredorComponent/Recorredor'
import UseState from './components/useStateComponent/UseState'

import './App.css'


const MiBoton = () =>{
  return <button>Soy un boton</button>
}

function App() {
  const [count, setCount] = useState(0)

  const nombre = "JORGE";
  const nombreClase="Titulo";
  const boleano = true;
  const lista = ['Manzana','Pera','Durazno'];

  return (
    <>
      <h1 className={nombreClase}>Hola a todos, mi nombre es {nombre}</h1>
      <h2>Otro elemento</h2>
      <h3>{nombre.toLowerCase()}</h3>
      <h3>{1 + 2 + 3}</h3>
      <h4>{`Combinacion de texto y ${nombre}`}</h4>
      <MiBoton></MiBoton><br></br>
      {boleano ? "Verdadero" : <MiBoton></MiBoton>}
      
      <Padre></Padre>
      <Recorredor elementos={lista}></Recorredor>
      <UseState></UseState>
    </>
  )
}

export default App
