import React, { Fragment } from 'react';
import habitacionesList from './habitacionesList';

const Habitaciones = () => {
  return (
    <Fragment>
        <div className="container">
          <div className="row">
            {habitacionesList.map((habitacion) => (
            <div key={habitacion.id} className="col-md-6">
                <div className="card mb-4">
                <img src={habitacion.imagen} alt={habitacion.nombre} className="card-img-top" />
                <div className="card-body">
                    <h3 className="card-title">{habitacion.nombre}</h3>
                    <p className="card-text">{habitacion.descripcion}</p>
                    <p className="card-text">Precio: {habitacion.precio}</p>
                    <button className="btn btn-success">Reservar ahora</button>
                </div>
                </div>
            </div>
            ))}
          </div>
        </div>
    </Fragment>
  )
}

export default Habitaciones