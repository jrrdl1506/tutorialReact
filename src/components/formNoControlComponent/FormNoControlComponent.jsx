import React, {useRef, useState} from "react";

const FormNoControl = () =>{

    const form =  useRef(null);
    const [error,setError] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        console.log(form.current);

        //Obtener los datos
        const data = new FormData(form.current);
        const {title,description,state} = Object.fromEntries([...data.entries()]);
        console.log(title, description, state);
        
        //Validar los datos
        if(!title.trim() || !description.trim() || !state.trim()){
            return setError("Lleno todos los campos");
        }
    
    
    };

    return(
        <>
            <form onSubmit={handleSubmit} ref={form}>
            <br/>
            <br/><h1>Formulario No controlado</h1>
                <input name="title" placeholder="titulo">
                </input><br/>

                <textarea name="description" placeholder="descripcion"> 
                </textarea><br/>

                <select name="state" placeholder="estado">
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select><br/>

                {error !== "" && error}
                <br/>

                <button type="submit" >
                    Procesar
                </button>
            </form>
        </>
    );
}


export default FormNoControl;