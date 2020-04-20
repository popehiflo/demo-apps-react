import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';

function App() {
  // definir state (presupuesto y saldo/restante)
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [saldo, guardarSaldo] = useState();
  const [mostrarpregunta, actualizarPregunta] = useState(true);

  return (
    
    <div className="container">
      <header>
        <h1>Gastos</h1>
      </header>
      <div className="contenido-principal contenido">
        { mostrarpregunta
          ? 
          <Pregunta guardarPresupuesto={guardarPresupuesto} guardarSaldo={guardarSaldo} actualizarPregunta={actualizarPregunta}/> 
          : 
          <div className="row">
            <div className="one-half column">
              <Formulario />
            </div>
            <div className="one-half column">2</div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
