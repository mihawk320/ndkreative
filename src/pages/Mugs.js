import React from "react";

import Info from "../components/Info";

import CardList from "../components/CardList";

function App() {
  return (
    <React.Fragment>
      <Info
        titulo="Creamos"
        titulof="Mugs"
        parrafo1="Creamos mugs personalizados para todo tipo de ocasión, son mugs de excelente calidad de los cuales estamos seguros que no te arrepentiras de adquirir."
        parrafo2="Ven ahora mismo por los tuyos y llevate un hermoso mug a excelente precio y con la mejor calidad"
      />
      <CardList />
    </React.Fragment>
  );
}

export default App;
