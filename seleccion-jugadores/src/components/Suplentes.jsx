import React from "react";
import { connect } from "react-redux";

const Suplentes = ({suplentes}) => (
    <section>
        <h2>Suplentes</h2>
        <div className="suplentes">
            {
                suplentes.map(t => (
                    <article className="suplente">
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
        suplentes: state.suplentes
    }

)

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps,mapDispatchToProps)(Suplentes)