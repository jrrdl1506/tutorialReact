import React, { useState } from "react";

const UseState = () =>{
    const [count,setCount] = useState(0);


    const HandleClick = () => {
        setCount(count + 1);
    };

    return(
        <>
            <button onClick={HandleClick}>Numero = {count}</button>
        </>
    );
}

export default UseState;