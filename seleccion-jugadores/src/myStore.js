import {createStore} from "redux"


const initialState = {
    jugadores: [
        {
            id: 1,
            nombre: "Pool Petter Hijuela",
            foto: "https://avatars0.githubusercontent.com/u/14990458?s=400&u=a8c491d0926f040191dbe123ec2da96c292e6b7e&v=4"
        },
        {
            id: 2,
            nombre: "Java EE",
            foto: "https://avatars0.githubusercontent.com/u/26341556?s=400&u=dac0dde41a0ff26b383b651d1510712e107fbbd1&v=4"
        },
        {
            id: 3,
            nombre: "Thiago Pro",
            foto: "https://avatars2.githubusercontent.com/u/721009?s=400&u=104044d16ec134bdb3e0b661312aa49b2a71832a&v=4"
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