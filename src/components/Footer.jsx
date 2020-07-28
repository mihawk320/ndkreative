import React from "react";
import "./styles/FooterStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faWhatsapp,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../images/logo.jpg";
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-distributed">
        <div className="footer-right">
          <a href="#hero">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#hero">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#hero">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="#hero">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        <div className="footer-left">
          <p className="footer-links">
            <a href="#main">Inicio</a>

            <a href="#servicios">Servicios</a>

            <a href="#quienes_somos">Quienes Somos</a>

            <a href="#ubicacion">Ubicacion</a>

            <a href="formulario.php">Cotizaciones</a>
          </p>

          <p>NdKreative &copy; 2020</p>
        </div>
        <div className="logo__footer">
          <img src={Logo} alt="" className="logoxd" />
        </div>
      </footer>
    );
  }
}

export default Footer;
