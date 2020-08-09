import React from "react";
import "./styles/FooterStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGithub,
  faWhatsapp,
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
          <a href="#jerp">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="#hero">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        <div className="footer-left">
          <p className="footer-links">
            <a href="#main">Inicio</a>

            <a href="#servicios">Mugs</a>

            <a href="#quienes_somos">Páginas web</a>

            <a href="#ubicacion">Logos</a>

            <a href="formulario.php">Otros</a>
          </p>

          <p>NDKreative &copy; 2020</p>
        </div>
        <div className="logo__footer">
          <img src={Logo} className="image_logo_footer" alt="logo_footer" />
        </div>
      </footer>
    );
  }
}

export default Footer;
