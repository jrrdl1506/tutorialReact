import React from 'react'

const Recorredor = (props) =>{
    const elementos = props.elementos;

    return(
        <>
        <ul>
            {elementos.map((item,index)=>(
                <li>{item}</li>
            ))}
        </ul>
       
        </>
    );

}

export default Recorredor;