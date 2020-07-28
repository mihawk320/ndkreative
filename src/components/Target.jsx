import React from "react";
import "./styles/ServiceStyle.css";
class Target extends React.Component {
  render() {
    return (
      <div className="col-md-6">
        <div className="blog-card">
          <div className="meta">
            <div className={this.props.clase}></div>
            <ul className="details">
              <li className="author">
                <a href="#hero"> {this.props.name} </a>
              </li>
              <li className="tags">
                <ul>
                  <li>
                    <a href="#hero">Calidad</a>
                  </li>
                  <li>
                    <a href="#hero">Diseño</a>
                  </li>
                  <li>
                    <a href="#hero">Excelente</a>
                  </li>
                  <li>
                    <a href="#hero">Precio</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="description">
            <h2>{this.props.titulo} </h2>
            <h3>Somos tu mejor opción</h3>
            <div>
              <ul>
                <li>Diseños personalizados</li>
                <li>Excelentes precios</li>
                <li>Los mejores resultados</li>
                <li>..</li>
              </ul>
            </div>

            <p className="read-more">
              <a href="#hero">Ver más</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Target;
