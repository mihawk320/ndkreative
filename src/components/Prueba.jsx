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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              placeat tempore ipsa corrupti minima dolorum illo deserunt,
              expedita molestias illum ipsam nemo laboriosam aut natus. Possimus
              perspiciatis facilis non veritatis. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Mollitia ad deleniti repellat
              aliquam, cupiditate pariatur dolorum sint molestiae unde fuga
              soluta atque blanditiis modi non placeat neque nisi voluptatum
              odio.
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
