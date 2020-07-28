import React from "react";
import "./styles/ParallaxStyle.css";

class Parallax extends React.Component {
  render() {
    return (
      <div className="newsletter parallax">
        <div className="contenido contenedor">
          <p>Registrate al newsletter</p>
          <h3>GOEPAV</h3>
          <a href="formulario.php" className="btn btn-outline-light">
            Ver trabajos
          </a>
        </div>
      </div>
    );
  }
}

export default Parallax;
