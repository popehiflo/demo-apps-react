import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  // Citas en localStorage (localstorage solo almacena strings)
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {
    citasIniciales = [];
  }

  // Arreglo de citas
  const [listaCitas, guardarListaCitas] = useState(citasIniciales);

  // UseEffect para realizar operaciones cuando el state cambia
  useEffect(() => {
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(listaCitas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [listaCitas,citasIniciales]);

  // Funcion que toma cita actuales y agrega la nueva
  const crearCita = cita => {
    guardarListaCitas([
      ...listaCitas,
      cita
    ])
  }

  // Funcion que elimina una cita por su id
  const eliminarCita = id => {
    const restoCitas = listaCitas.filter( c => c.id !== id);
    guardarListaCitas(restoCitas);
  }

  //Mensaje condicional
  const mensaje = listaCitas.length === 0 ? "There are no Appointments": 'Manage Appointment'

  return (
    <>
      <h1>Patient Management</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} listaCitas={listaCitas} />
          </div>
          <div className="one-half column">
          <h2>{mensaje}</h2>
            {
              listaCitas.map(c => (
              <Cita key={c.id} cita={c} eliminarCita={eliminarCita} />))
            }
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
