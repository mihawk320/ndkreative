import React from "react";
import Target from "./Target";
class Services extends React.Component {
  render() {
    return (
      <section>
        <div className="container ">
          <h2 className="text-center mb-5 mt-3 textin" id="servicios">
            Nuestros <b>Servicios</b>
          </h2>

          <div className="row">
            <Target
              clase="photo"
              titulo="Diseñamos logos"
              one="Diseños a la medida"
              two="muy creativos, ven y"
              three="ponle sello a tu marca"
            />
            <Target
              clase="photo2"
              titulo="Diseñamos Mugs"
              one="Mugs creativos"
              two="para todo tipo de regalos,"
              three="excelente calidad"
            />
            <Target
              clase="photo3"
              titulo="Prendas personalizadas"
              one="Prendas personalizadas"
              two="enfocadas en tus gustos,"
              three="con los mejores diseños"
            />
            <Target
              clase="photo4"
              titulo="Páginas web"
              one="Desarrollo de páginas web"
              two="con las últimas tecnologías"
              three="para el mejor rendimiento"
              link="https://andresmora.netlify.app/"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
