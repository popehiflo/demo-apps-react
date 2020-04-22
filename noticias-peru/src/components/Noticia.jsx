import React from 'react';
import PropTypes from 'prop-types';

const Noticia = ({noticia}) => {

    //extraer datos de noticia
    const { urlToImage, url, title, description, publishedAt, source } = noticia;

    // -- Convertir fecha de formato ISO 8601
    let fechaISO8601 = publishedAt;
    /* reemplazar caracteres que no son numericos por un espacio*/
    fechaISO8601 = fechaISO8601.replace(/\D/g, ' ');
    /* array con las partes de la fecha */
    let partes = fechaISO8601.split(' ');
    --partes[1];
    /* crear objeto Date segun zona horaria*/
    let fecha = new Date(Date.UTC.apply(null, partes))
    // -- Fin Convertir fecha

    const imagen = (urlToImage)
    ?
    <div className="card-image">
        <img src={urlToImage} alt={title} />
        <span className="card-title">
            {fecha.toString()}
        </span>
    </div>
    :
    null;

    return (
        <div className="col s12 m6 l4">
            <div className="card">
                {imagen}
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a
                        href={url} target="_blank" rel="noopener noreferrer" className="waves-effect waves-light btn"
                    >Leer articulo completo - {source.name}</a>
                </div>
            </div>
        </div>
    )
}

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}

export default Noticia
