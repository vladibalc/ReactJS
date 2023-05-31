import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Navbar/>
      <ItemListContainer greeting="¡Bienvenido a mi Hospedaje en línea!"/>
      <Footer/>
    </Fragment>
  );
}

export default App;
