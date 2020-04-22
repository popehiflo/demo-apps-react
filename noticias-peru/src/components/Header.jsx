import React from 'react';
import PropTypes from 'prop-types';

const Header = ({titulo}) => {
    return (
        <nav className="nav-wrapper red lighten-2">
            <a href="https://github.com/popehiflo/demo-apps-react" target="_blank" rel="noopener noreferrer" className="brand-logo center">{titulo}</a>
        </nav>
    )
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header
