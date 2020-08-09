import React from "react";

import Info from "../components/Info";
import TarjetaInfo from "../components/TarjetaInfo";

function App() {
  return (
    <React.Fragment>
      <Info
        titulo="Tenemos otros"
        titulof=" servicios"
        parrafo1="Creamos mugs personalizados para todo tipo de ocasión, son mugs de excelente calidad de los cuales estamos seguros que no te arrepentiras de adquirir."
        parrafo2="Ven ahora mismo por los tuyos y llevate un hermoso mug a excelente precio y con la mejor calidad"
      />
      <TarjetaInfo />
    </React.Fragment>
  );
}

export default App;
