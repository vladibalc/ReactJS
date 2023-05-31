import React, { Fragment } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Habitaciones from "./components/Habitaciones";
import Promociones from "./components/Promociones";
import Ubicacion from "./components/Ubicacion";
import Contacto from "./components/Contacto";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/habitaciones" element={<Habitaciones />} />
          <Route path="/promociones" element={<Promociones />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
