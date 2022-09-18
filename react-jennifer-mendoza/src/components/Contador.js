import React from 'react';
import { useState, useEffect } from 'react';



const Contador = ({initial, stock}) => {

    const [Contador, setContador] = useState(initial);
    const [agregadoAlCarro, setAgregadoAlCarro] =useState(false)

    const sumar = () => {
       if (Contador<=stock) {
       setContador(Contador + 1 );}
    };

    const restar = () => {
        if (Contador > initial){
        setContador(Contador - 1 );}
    };

    const agregarAlCarro = () =>{
        setContador (Contador);
        setAgregadoAlCarro(!agregadoAlCarro)
        console.log("Se agregó al carrito");
    };

   useEffect(() => {
    setTimeout(() => {
    console.log("Me ejecuté");

    return () => {
        <h1>Hola</h1>
    }
      },5000);
    
   },[agregadoAlCarro]) //array de dependencia.
    

    return (
        <>
        <button onClick={()=> sumar()}> + </button>
        <button onClick={()=> restar()}> - </button>
        <span> {Contador} </span>
        <button onClick={()=> agregarAlCarro()}> Agregar Al Carrito </button>       
        </>
    )
}
export default Contador;