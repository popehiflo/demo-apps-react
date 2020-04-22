import React, { useState } from 'react';

const useSelectCategoria = (stateInicial, opciones) => {

    // state del custom hook
    const [state, actualizarState] = useState(stateInicial);

    const SelectCategoria = () => (
        <select className="browser-default" value={state} onChange={e => actualizarState(e.target.value)}>
            {opciones.map( opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}
        </select>
    );

    return [state, SelectCategoria]
}

export default useSelectCategoria;
