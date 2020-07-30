import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.jpg";
import Menu from "../images/menu.png";

import "./styles/NavStyle.css";

class Nav extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg fixed-top ">
          <div className="container">
            <Link to="/">
              <img src={Logo} className="logo" alt="logo" />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <img src={Menu} className="menu" alt="menu" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Mugs">
                    Mugs
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#hero"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Prendas
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#hero">
                      Caballero
                    </a>
                    <a className="dropdown-item" href="#hero">
                      Dama
                    </a>
                    <a className="dropdown-item" href="#hero">
                      Tapabocas
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Logos">
                    Logos
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://andresmora.netlify.app/"
                  >
                    Páginas web
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Galeria">
                    Otros
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Nav;
