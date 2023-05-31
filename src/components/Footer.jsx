import React, { Fragment } from 'react';
import logo from '../img/logo_hospedaje.jpg';

const Footer = () => {
  return (
    <Fragment>
        <div className="container bg-info">
            <div className="row">
                <div className="col-md-8">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                    <a className="nav-link text-primary-emphasis" aria-current="page" href="/">Politica de Privacidad</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-primary-emphasis" href="/">Protección de datos personales</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-primary-emphasis" href="/contacto">Contacto</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-primary-emphasis" href="/">Defensa del Consumidor</a>
                    </li>
                </ul>
                </div>
                <div className="col-md-4 align-items-center justify-content-end">
                <p><a href="index.html"> <img src={logo} alt="HospedajeLogo" style={{ width: '30px', marginRight: '10px' }} /> </a> ©Palmeras 2023</p>
                
                </div>
            </div>
            <div class="row align-items-center justify-content-center">
                <p class="row align-items-center justify-content-center">
                &copy Creado por Vladimir Balcazar Carmen - Todos los derechos
                reservados
                </p>
            </div>
        </div>
    </Fragment>
  )
}

export default Footer