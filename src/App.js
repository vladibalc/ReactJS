import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <Fragment>
      <Navbar/>
      <ItemListContainer greeting="¡Bienvenido a mi Hospedaje en línea!"/>
    </Fragment>
  );
}

export default App;
