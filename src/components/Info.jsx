import React from "react";

class Info extends React.Component {
  render() {
    return (
      <section id="sobre_mi" className="fondo">
        <div className="container">
          <div className="content-center">
            <h2
              className="color_blanco"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="0"
            >
              {this.props.titulo} <b> {this.props.titulof} </b>
            </h2>
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
              {this.props.parrafo1} <b>{this.props.parrafo2}</b>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Info;
