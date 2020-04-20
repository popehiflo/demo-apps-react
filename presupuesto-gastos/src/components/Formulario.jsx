import React from 'react'
import { useState } from 'react'

const Formulario = () => {

    const [nombregasto, guardarNombreGasto] = useState('');
    const [cantidadgasto, guardarCantidadGasto] = useState(0);

    return (
        <form onSubmit={} />
            <h2>Agrega tus gastos aqui</h2>
            <div className="campo">
                <label htmlFor="">Nombre Gasto</label>
                <input type="text" className="u-full-width" placeholder="Ejemplo: Salida al cine" 
                    value={nombregasto} onChange={e => guardarNombreGasto(e.target.value)} />
            </div>
            <div className="campo">
                <label htmlFor="">Cantidad Gasto</label>
                <input type="number" className="u-full-width" placeholder="Ejemplo: 150" />
            </div>
            <input type="submit" className="button-primary u-full-width" value="Agregar Gasto"
                value={cantidadgasto} onChange={e => guardarCantidadGasto(parseInt(e.target.value,10))} />
        </form>
    )
}

export default Formulario
