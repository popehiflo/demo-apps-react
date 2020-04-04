import React from 'react';
import {Provider} from "react-redux";
import myStore from './myStore';
import Jugadores from './components/Jugadores';
import EquipoSeleccionado from './components/EquipoSeleccionado';
import "./styles/styles.scss"

const App = () => (
  <Provider store={myStore}>
    <main>
      <h1>Seleccion de Jugadores</h1>
      <Jugadores />
      <EquipoSeleccionado />
    </main>
  </Provider>
)

export default App;
