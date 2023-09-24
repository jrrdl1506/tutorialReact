import React, { useState} from "react";

const FormControl = () =>{

    const [todo,setTodo] = useState({
        title:"Todo #01",
        description:"Descripcion #01",
        state: "pendiente"
    });



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(todo.title,todo.description,todo.state);
    };

    return(
        <>
            <form onSubmit={handleSubmit} >
            <br/>
            <br/><h1>Formulario Controlado</h1>
                <input 
                name="title" placeholder="titulo"
                value={todo.title}
                onChange={(e)=> setTodo({...todo,title:e.target.value})}>
                </input><br/>

                <textarea 
                name="description" placeholder="descripcion"
                value={todo.description}
                onChange={(e)=> setTodo({...todo,description:e.target.value})}> 
                </textarea><br/>

                <select name="state" placeholder="estado"
                value={todo.state}
                onChange={(e)=> setTodo({...todo,state:e.target.value})}>
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select><br/>

               
                <br/>

                <button type="submit" >
                    Procesar
                </button>
            </form>
        </>
    );
}


export default FormControl;