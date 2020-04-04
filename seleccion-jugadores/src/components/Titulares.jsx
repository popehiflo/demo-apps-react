import React from "react";
import { connect } from "react-redux";

const Titulares = ({titulares}) => (
    <section>
        <h2>Titulares</h2>
        <div className="cancha">
            {
                titulares.map(t => (
                    <article className="titular">
                        <div>
                            <img src={t.foto} alt={t.nombre} />        
                            <button>X</button>
                        </div>
                        <p>{t.nombre}</p>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => (
    {
        titulares: state.titulares
    }

)

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps,mapDispatchToProps)(Titulares)