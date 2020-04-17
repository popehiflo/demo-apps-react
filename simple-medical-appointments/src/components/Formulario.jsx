import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import uuid from 'uuid/v4';


const Formulario = ({crearCita, listaCitas}) => {

    // Crear State de Citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    // State para error
    const [error, actualizarError] = useState(false);

    // Funcion que se ejecuta cada que el usuario escribe en un input
    const actualizarState = (e) => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    // Extraer valores
    const {mascota,propietario,fecha,hora,sintomas} = cita;

    //Cuando el usuario presiona agregar cita
    const submitCita = e => {
        e.preventDefault();
        
        //Validar que campos no esten vacios
        if(mascota.trim()==='' || propietario.trim()==='' || fecha.trim()==='' || hora.trim()==='' || sintomas.trim()==='') {
            actualizarError(true);
            return;
        }
        // Eliminar bloque (mensaje) de error
        actualizarError(false);
        // Asignar ID
        cita.id = uuid();
        
        // Crear la cita
        crearCita(cita)

        //Reiniciar el form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }

    return (
        <>
            <h2>Create Appointment</h2>
            {/* Bloque que muestra si tienes un error */
                error
                ? <p className="alerta-error">Todos los campos son obligatorios</p>
                : null
            }
            <form onSubmit={submitCita}>
                <label htmlFor="">Pet Name</label>
                <input 
                    type="text" name="mascota" className="u-full-width" 
                    placeholder="pet name" onChange={actualizarState} 
                    value={mascota}
                />
                <label htmlFor="">Client Name</label>
                <input 
                    type="text" name="propietario" className="u-full-width" 
                    placeholder="client name" onChange={actualizarState}
                    value={propietario}
                />
                <label htmlFor="">Date</label>
                <input 
                    type="date" name="fecha" className="u-full-width" 
                    onChange={actualizarState}
                    value={fecha}
                />
                <label htmlFor="">Hour</label>
                <input 
                    type="time" name="hora" className="u-full-width" 
                    onChange={actualizarState}
                    value={hora}
                />
                <label htmlFor="">Symptoms</label>
                <textarea 
                    name="sintomas" className="u-full-width" placeholder="describe them" 
                    onChange={actualizarState}
                    value={sintomas} >
                </textarea>
                <button type="submit" className="u-full-width button-primary">Add Appointment</button>
            </form>
        </>
    )
}

export default Formulario
