import React, { useState} from "react";

const FormControl = () =>{

    const [todo,setTodo] = useState({
        title:"Todo #01",
        description:"Descripcion #01",
        state: "pendiente"
    });



    const handleSubmit = (e) => {
        e.preventDefault();
        setTodo({
            ...todo,
            [e.target.name]:
            e.target.type === "checkbox" ? e.target.checked : e.target.value});
        
        console.log(todo.title + " " + todo.state + " " + todo.description);
    };

    return(
        <>
            <form onSubmit={handleSubmit} >
            <br/>
            <br/><h1>Formulario Controlado</h1>
                <input 
                name="title" placeholder="titulo"
                value={todo.title}
                onChange={handleSubmit}>
                </input><br/>

                <textarea 
                name="description" placeholder="descripcion"
                value={todo.description}
                onChange={handleSubmit}> 
                </textarea><br/>

                <select name="state" placeholder="estado"
                value={todo.state}
                onChange={handleSubmit}>
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select><br/>

               
                <br/>
                <div>
                    <input
                        type="checkbox"
                        name="priority"
                        className="form-check-input"
                        id="inputCheck"
                        checked={priority}
                        onChange={handleChange}
                    ></input>
                </div>

                <button type="submit" >
                    Procesar
                </button>
            </form>
        </>
    );
}


export default FormControl;