import React, { Fragment } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../img/logo_hospedaje.jpg';
import Home from './Home';
import Habitaciones from './Habitaciones';
import Promociones from './Promociones';
import Ubicacion from './Ubicacion';
import Contacto from './Contacto';

const Navbar = () => {
    return ( 
        <BrowserRouter>

        <Fragment>
            <nav className="navbar navbar-expand-lg bg-color-navbar">
                <div className="container-fluid bg-black">
                    <Link to="/" className="navbar-brand">
                        <div className="d-flex align-items-center">
                            <img src={logo} alt="logo-hospedaje" className="img-fluid me-2" style={{ width: '50px', marginRight: '10px' }} />
                            <h2 className="text-success ms-2">HOSPEDAJE "PALMERAS BEACH"</h2>
                        </div>
                    </Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active text-primary link-danger fw-bold">INICIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/habitaciones" className="nav-link text-primary link-danger fw-bold">HABITACIONES</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/promociones" className="nav-link text-primary link-danger fw-bold">PROMOCIONES</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/ubicacion" className="nav-link text-primary link-danger fw-bold" >UBICACIÓN</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contacto" className="nav-link text-primary link-danger fw-bold" >CONTACTO</Link>
                            </li>
                            <li className="nav-item">
                                <CartWidget/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                
                <Route path="/habitaciones" element={<Habitaciones />} />
                <Route path="/promociones" element={<Promociones />} />
                <Route path="/ubicacion" element={<Ubicacion />} />
                <Route path="/contacto" element={<Contacto />} />
            </Routes>
        </Fragment>
        </BrowserRouter>
     );
}
 
export default Navbar;