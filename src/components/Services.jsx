import React from "react";
import Target from "./Target";
class Services extends React.Component {
  render() {
    return (
      <section>
        <div className="container ">
          <h2 className="text-center mb-5 mt-3 textin" id="servicios">
            Nuestros servicios
          </h2>

          <div className="row">
            <Target clase="photo" titulo="Diseñamos logos" />
            <Target clase="photo2" name="Logos" titulo="Diseñamos Mugs" />
            <Target
              clase="photo3"
              name="Logos"
              titulo="Prendas personalizadas"
            />
            <Target clase="photo4" name="Logos" titulo="Páginas web" />
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
