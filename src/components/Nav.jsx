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
                  <Link className="nav-link" to="/Galeria">
                    Galeria
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
