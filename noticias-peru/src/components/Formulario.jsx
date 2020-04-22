import React from 'react';
import styles from './Formulario.module.css';
import PropTypes from 'prop-types';
import useSelectCategoria from '../hooks/useSelectCategoria';
import useSelectPais from '../hooks/useSelectPais';

const Formulario = ({guardarPais,guardarCategoria}) => {

    //PAISES y CATEGORIAS definidas en la API
    const PAISES = [
        { value: 'ae', label: 'United Arab Emirates'}, { value: 'ar', label: 'Argentina'}, { value: 'at', label: 'Austria'},
        { value: 'au', label: 'Australia'}, { value: 'be', label: 'Belgium'}, { value: 'bg', label: 'Bulgaria'},
        { value: 'br', label: 'Brazil'}, { value: 'ca', label: 'Canada'}, { value: 'ch', label: 'Switzerland'},
        { value: 'cn', label: 'China'}, { value: 'co', label: 'Colombia'}, { value: 'cu', label: 'Cuba'},
        { value: 'cz', label: 'Czechia'}, { value: 'de', label: 'Germany'}, { value: 'eg', label: 'Egypt'},
        { value: 'fr', label: 'France'}, { value: 'gb', label: 'United Kingdom of Great Britain and Northern Ireland'}, { value: 'gr', label: 'Greece'},
        { value: 'hk', label: 'Hong Kong'}, { value: 'hu', label: 'Hungary'}, { value: 'id', label: 'Indonesia'},
        { value: 'ie', label: 'Ireland'}, { value: 'il', label: 'Israel'}, { value: 'in', label: 'India'},
        { value: 'it', label: 'Italy'}, { value: 'jp', label: 'Japan'}, { value: 'kr', label: 'Korea'},
        { value: 'lt', label: 'Lithuania'}, { value: 'lv', label: 'Latvia'}, { value: 'ma', label: 'Morocco'},
        { value: 'mx', label: 'Mexico'}, { value: 'my', label: 'Malaysia'}, { value: 'ng', label: 'Nigeria'},
        { value: 'nl', label: 'Netherlands'}, { value: 'no', label: 'Norway'}, { value: 'nz', label: 'New Zealand'},
        { value: 'ph', label: 'Philippines'}, { value: 'pl', label: 'Poland'}, { value: 'pt', label: 'Portugal'},
        { value: 'ro', label: 'Romania'}, { value: 'rs', label: 'Serbia'}, { value: 'ru', label: 'Russian Federation'},
        { value: 'sa', label: 'Saudi Arabia'}, { value: 'se', label: 'Sweden'}, { value: 'sg', label: 'Singapore'},
        { value: 'si', label: 'Slovenia'}, { value: 'sk', label: 'Slovakia'}, { value: 'th', label: 'Thailand'},
        { value: 'tr', label: 'Turkey'}, { value: 'tw', label: 'Taiwan, Province of China'}, { value: 'ua', label: 'Ukraine'},
        { value: 'us', label: 'United States of America'}, { value: 've', label: 'Venezuela'}, { value: 'za', label: 'South Africa'}
    ]

    const CATEGORIAS = [
        { value: 'general', label: 'General'},
        { value: 'health', label: 'Salud'},
        { value: 'science', label: 'Ciencia'},
        { value: 'sports', label: 'Deportes'},
        { value: 'technology', label: 'Tecnologia'},
        { value: 'business', label: 'Negocios'},
        { value: 'entertainment', label: 'Entretenimiento'}
    ]
    // utilizar custom hook pais
    const [pais, SelectPais] = useSelectPais('ca', PAISES);
    // utilizar custom hook categoria
    const [categoria, SelectCategoria] = useSelectCategoria('general', CATEGORIAS);

    // submit al form, pasar categoria a app.js
    const buscarNoticias = e => {
        e.preventDefault();

        guardarPais(pais)
        guardarCategoria(categoria);
    }

    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={buscarNoticias}>
                    <h2 className={styles.heading}>Noticias por país y categoría</h2>
                    <SelectPais />
                    <SelectCategoria />
                    <div className="input-field col s12">
                        <input type="submit"
                            className={`${styles['btn-block']} btn-large amber darken-2`} value="Buscar"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

Formulario.propTypes = {
    guardarPais: PropTypes.func.isRequired,
    guardarCategoria: PropTypes.func.isRequired
}

export default Formulario
