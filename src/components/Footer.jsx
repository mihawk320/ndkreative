import React from "react";
import { Link } from "react-router-dom";
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
          <a
            href="https://www.facebook.com/nd_kreative-109215954215772/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://www.instagram.com/nd_kreative/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=573205365990"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            href="https://github.com/mihawk320"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        <div className="footer-left">
          <p className="footer-links">
            <Link to="/">Inicio</Link>

            <Link to="/Mugs">Mugs</Link>

            <a
              href="https://andresmora.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Páginas web
            </a>

            <Link to="/Logos">Logos</Link>

            <Link to="/Otros">Otros</Link>
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
