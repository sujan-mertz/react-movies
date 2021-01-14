import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo2.png';

function ReactLogo(props){
    return(
        <Link to="/" className="c-logo">
            <img src={logo} alt="Company Name"/>
        </Link>
    );
}

export default ReactLogo;