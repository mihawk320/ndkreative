import React from "react";
import Header from "../components/Header";

import Footer from "../components/Footer";
import Info from "../components/Info";
import Slider from "../components/Slider";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Info
        titulo="El mejor"
        titulof="Logo para tu marca"
        parrafo1="Nuestro equipo se encarga de hacerte el mejor Logotipo para tu marca, personalizado y a tu gusto, para mejorar la imagen de tu negocio, empresa o marca."
        parrafo2="No lo pienses más y escribenos para tener todo el gusto de atenderte y ayudarte a potenciar más tu marca"
      />
      <Slider />
      <Footer />
    </React.Fragment>
  );
}

export default App;
