import React from "react";
import "./styles/ParallaxStyle.css";

class Parallax extends React.Component {
  render() {
    return (
      <div className="newsletter parallax" loading="lazy">
        <div className="contenido contenedor">
          <p>Contáctanos por whatsapp</p>
          <h2>NDKreative</h2>
          <a
            href="https://api.whatsapp.com/send?phone=573205365990"
            className="btn btn-outline-light"
          >
            Ir
          </a>
        </div>
      </div>
    );
  }
}

export default Parallax;
