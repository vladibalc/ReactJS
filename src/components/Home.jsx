import React, { Fragment } from 'react'

const Home = () => {
  return (
    <Fragment>
        <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>¿Por qué Hospedaje "Palmeras Beach"?</h2>
            <p>
              Somos uno de los mejores hoteles en la provincia de Sullana-Piura.
              Contamos con red Wifi, piscina y una excelente gastronomía con platos norteños, criollos y marinos.
            </p>
            <p>
              Tenemos variedad de habitaciones para elegir y la atención es de primera calidad.
              Ven y disfruta en familia, con tu pareja o amigos de esta maravillosa experiencia que te hará vivir en nuestro acogedor Hotel Palmeras.
            </p>
          </div>
          <div className="col-md-6">
            <h2>ACERCA DE NOSOTROS:</h2>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zPZlZtE2Lkg" title="Yourtube video" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home