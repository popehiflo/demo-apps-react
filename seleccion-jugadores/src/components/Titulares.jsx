import React from "react";
import { connect } from "react-redux";
import cancha from "../cancha.svg"

const Titulares = ({titulares, quitarTitular}) => (
    <section>
        <h2>Titulares</h2>
        <div className="cancha">
            {
                titulares.map(t => (
                    <article className="titular" key={t.id}>
                        <div>
                            <img src={t.foto} alt={t.nombre} />        
                            <button onClick={() => quitarTitular(t)}>X</button>
                        </div>
                        <p>{t.nombre}</p>
                    </article>
                ))
            }
            <img src={cancha} alt="cancha de futbol" />
        </div>
    </section>
)

const mapStateToProps = state => (
    {
        titulares: state.titulares
    }

)

const mapDispatchToProps = dispatch => ({
    quitarTitular(jugador) {
        dispatch({
            type: "QUITAR_TITULAR",
            jugador
        })
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Titulares)