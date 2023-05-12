import React, { Fragment } from 'react';
import CartWidget from './CartWidget';
const Navbar = () => {
    return ( 
        <Fragment>
            <nav className="navbar navbar-expand-lg bg-color-navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index.html">
                        <div className="nombre-comercial">
                            <img src="./assets/img/logo_hospedaje.jpg" alt="logo-hospedaje" className="logo" />
                            <h1 className="title-principal">HOSPEDAJE "PALRMERAS BEACH"</h1>
                        </div>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active text-info-emphasis link-light fw-bold" aria-current="page"
                                    href="index.html">INICIO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-info-emphasis link-light fw-bold" href="habitaciones.html">HABITACIONES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-info-emphasis link-light fw-bold" href="promociones.html">PROMOCIONES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-info-emphasis link-light fw-bold" href="ubicacion.html">UBICACIÓN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-info-emphasis link-light fw-bold" href="contacto.html">CONTACTO</a>
                            </li>
                            <CartWidget/>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
     );
}
 
export default Navbar;