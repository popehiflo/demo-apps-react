import React, { useState } from 'react'
import { Error } from './Error';

const Pregunta = ({guardarPresupuesto,guardarSaldo,actualizarPregunta}) => {

    // definir el state
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);
    // funcion que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10));
    }
    // Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // Validar cantidad de presupuesto
        if(cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }
        // si se pasa la validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarSaldo(cantidad);
        actualizarPregunta(false);
    }

    return (
        <div>
            {// bloque de error
                error ? <Error mensaje="El presupuesto en Incorrecto"/>: null
            }
            <h2>Inserte su presupuesto</h2>
            <form action="">
                <input type="number" className="u-full-width" 
                    placeholder="Inserte su presupuesto" onChange={definirPresupuesto} />
                <input type="submit" className="button-primary u-full-width" 
                    value="Definir Presupuesto" onClick={agregarPresupuesto} />
            </form>
        </div>
    )
}

export default Pregunta
