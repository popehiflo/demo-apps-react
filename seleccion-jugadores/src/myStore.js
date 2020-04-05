import {createStore} from "redux";
import imgJugador from "./fotoJugador.jpg";


const initialState = {
    jugadores: [
        {
            id: 1,
            nombre: "Pool Petter",
            foto: "https://avatars0.githubusercontent.com/u/14990458?s=400&u=a8c491d0926f040191dbe123ec2da96c292e6b7e&v=4"
        },
        {
            id: 2,
            nombre: "Claudio Pizarro",
            foto: "https://st-listas.20minutos.es/images/2013-07/364838/4092747_640px.jpg?1373560046"
        },
        {
            id: 3,
            nombre: "Paolo Guerrero",
            foto: "https://st-listas.20minutos.es/images/2013-07/364838/4092750_640px.jpg?1373560046"
        },
        {
            id: 4,
            nombre: "Teofilo Cubillas",
            foto: "https://st-listas.20minutos.es/images/2013-07/364838/4092736_640px.jpg?1373560046"
        },
        {
            id: 5,
            nombre: "Hugo Sotil",
            foto: "https://st-listas.20minutos.es/images/2013-07/364838/4092739_640px.jpg?1373560046"
        },
        {
            id: 6,
            nombre: "Cesar Cueto",
            foto: "https://st-listas.20minutos.es/images/2013-07/364838/4092742_640px.jpg?1373560046"
        },
        {
            id: 7,
            nombre: "Jefferson Farfan",
            foto: "https://st-listas.20minutos.es/images/2013-07/364838/4092749_640px.jpg?1373560046"
        },
        {
            id: 8,
            nombre: "Hector Chumpitaz",
            foto: "https://st-listas.20minutos.es/images/2013-07/364838/4092738_640px.jpg?1373560046"
        },
        {
            id: 9,
            nombre: "Teodoro Fernandez",
            foto: "https://st-listas.20minutos.es/images/2013-07/364838/4092737_640px.jpg?1373560046"
        },
        {
            id: 10,
            nombre: "Julio Cersar Uribe",
            foto: "https://st-listas.20minutos.es/images/2013-07/364838/4092751_640px.jpg?1373560046"
        },
        {
            id: 11,
            nombre: "Juan Carlos oblitas",
            foto: "https://st-listas.20minutos.es/images/2013-07/364838/4092741_640px.jpg?1373560046"
        },
        {
            id: 12,
            nombre: "Nolberto Solano",
            foto: imgJugador
        },
        {
            id: 13,
            nombre: "Roberto Palacios",
            foto: imgJugador
        },
        {
            id: 14,
            nombre: "Juan Manuel Vargas",
            foto: imgJugador
        },
        {
            id: 15,
            nombre: "Roberto Challe",
            foto: imgJugador
        }
    ],
    titulares: [],
    suplentes: []
}
 
const reducerEntrenador = (state = initialState, action) => {

    if(action.type === "AGREGAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if(action.type === "AGREGAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if(action.type === "QUITAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.filter(t => t.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
            
        }
    }

    if(action.type === "QUITAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.filter(t => t.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
            
        }
    }

    return state
}


export default createStore(reducerEntrenador)