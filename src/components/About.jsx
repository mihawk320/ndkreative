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
              Mi nombre es Carlos Andres Mora y empecé en el desarrollo web hace
              3 años, soy técnico en desarrollo de software y actualmente me
              encuentro cursando Ingeniería de Sistemas e Informática en la
              Universidad Nacional de Colombia. He hecho parte de varios
              developer circles y he participado en colaboración de diferentes
              proyectos, todo con el fin de ampliar mi conocimiento como
              desarrollador. Tengo habilidades en:{" "}
              <b>
                HTML, CSS, JavaScript, jQuery, Ajax, Nodejs y NPM, React, Php,
                Mysql y Git.
              </b>
            </p>
          </div>
          <img
            src={profile}
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
              -- Always <b>Learning --</b>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
