import React from "react";
import "./styles/AboutStyle.css";

import profile from "../images/logo.jpg";

class About extends React.Component {
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
              Quienes <b>Somos</b>
            </h2>
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
              Nuestro equipo de trabajo está dirigido por dos personas
              encargadas del diseño y desarrollo web, donde ofrecemos a nuestros
              clientes la mejor atención y calidad. En nuestra amplia variedad
              de servicios personalizados se encuentran los siguientes:{" "}
              <b>
                Desarrollo web con las mejores tecnologías y la mejor
                optimización, creación de logotipos, cartas de presentación,
                afiches, marquillas, prendas personalizadas,mugs, tarjetas de
                todo tipo. !ANÍMATE Y ADQUIERE NUESTROS SERVICIOS!
              </b>
            </p>
          </div>
          <img
            src={profile}
            loading="lazy"
            alt="yo"
            className="img-fluid my-auto"
            id="foto"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="0"
          />
          <div
            className="text-center mt-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="0"
          >
            <p className="color_blanco">
              -- Desarrollo y <b>Diseño --</b>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
