import React from "react";
import Header from "../components/Header";

import Footer from "../components/Footer";
import Info from "../components/Info";

import CardList from "../components/CardList";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Info
        titulo="Creamos"
        titulof="Mugs"
        parrafo1="Creamos mugs personalizados para todo tipo de ocasión, son mugs de excelente calidad de los cuales estamos seguros que no te arrepentiras de adquirir."
        parrafo2="Ven ahora mismo por los tuyos y llevate un hermoso mug a excelente precio y con la mejor calidad"
      />
      <CardList />
      <Footer />
    </React.Fragment>
  );
}

export default App;
