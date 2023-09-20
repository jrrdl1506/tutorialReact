import React from 'react';
import Hijo from '../hijoComponent/hijo';


const Padre = () =>{
    const mensajeParaHijo = 'Hola soy tu padre!';

    return (
        <>
        <h6>Componente Padre</h6>
        <Hijo mensaje={mensajeParaHijo}></Hijo>
        </>
    );
}
export default Padre;