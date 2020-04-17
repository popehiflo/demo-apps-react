import React from 'react'

const Cita = ({cita, eliminarCita}) => (
    <div className="cita">
        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>Propietario: <span>{cita.propietario}</span></p>
        <p>Fecha y hora: <span>{cita.fecha}-{cita.hora}</span></p>
        <p>sintomas: <span>{cita.sintomas}</span></p>
        <button 
            className="button eliminar u-full-width"
            onClick={() => eliminarCita(cita.id)}>Dar de alta &times;</button>
    </div>
)

export default Cita
