import React from "react";
import Nav from "./Nav";
import "./styles/HeaderStyle.css";
import Banner from "../images/banner.png";
import Banner2 from "../images/banner2.png";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <main id="main" className="mb-3">
          <div
            className="carousel slide carousel-fade"
            id="carousel"
            data-ride="carousel"
            data-pause="false"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={Banner} className="d-block w-100" alt="banner" />
              </div>
              <div className="carousel-item">
                <img src={Banner2} className="d-block w-100" alt="banner2" />
              </div>

              <div className="overlay">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-6 offset-md-6 text-center text-md-right">
                      <h1>NDKreative</h1>
                      <p className="d-none d-md-block">
                        DISEÑO GRÁFICO Y DESARROLLO DE PÁGINAS WEB PARA TU
                        NEGOCIO
                      </p>
                      <a
                        href="formulario.php"
                        className="btn btn-outline-light"
                      >
                        Ver trabajos
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Header;
