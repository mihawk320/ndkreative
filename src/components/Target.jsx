import React from "react";
import "./styles/ServiceStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTags,
  faMagic,
} from "@fortawesome/free-solid-svg-icons";

class Target extends React.Component {
  render() {
    return (
      <div className="col-md-6">
        <div className="blog-card">
          <div className="meta">
            <div className={this.props.clase}></div>

            <ul className="details">
              <li className="author">
                <FontAwesomeIcon icon={faCheckCircle} className="icono" />
                <span>Gran calidad </span>
              </li>
              <span className="tags">
                <li>
                  <FontAwesomeIcon icon={faTags} className="icono" />
                  <span>Excelente precio</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faMagic} className="icono" />
                  <span>El mejor diseño</span>
                </li>
              </span>
            </ul>
          </div>
          <div className="description">
            <h2>{this.props.titulo} </h2>
            <h3>Somos tu mejor opción</h3>
            <div>
              <ul>
                <li>{this.props.one}</li>
                <li>{this.props.two}</li>
                <li>{this.props.three}</li>
                <li>..</li>
              </ul>
            </div>

            <p className="read-more">
              <a href={this.props.link}>Ver</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Target;
