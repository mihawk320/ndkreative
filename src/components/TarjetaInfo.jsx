import React from "react";
import "./styles/TarjetaInfoStyle.css";
import Logo from "../images/logo.jpg";
class TarjetaInfo extends React.Component {
  render() {
    return (
      <div class="contenedor_targetInfo" id="quienes_somos">
        <div class="contenedor_tarjeta">
          <figure id="tarjeta">
            <img src={Logo} class="frontal" alt="info" />
            <figcaption class="trasera">
              <h2 class="titulo">CUIDAMOS TU TIEMPO Y TU SALUD</h2>
              <hr />
              <p>
                Puedes cotizar y agendar en línea, correo o teléfono y, si
                deseas, llevamos tu carro al taller o lo reparamos desde tu
                casa.
              </p>
            </figcaption>
          </figure>
        </div>

        <div class="contenedor_tarjeta">
          <figure id="tarjeta">
            <img src={Logo} class="frontal" alt="info2" />
            <figcaption class="trasera">
              <h2 class="titulo">PUEDES CONFIAR EN NOSOTROS</h2>
              <hr />
              <p>
                Además de ofrecer una extensa garantía, te enviamos
                actualizaciones y pruebas de la reparación.
              </p>
            </figcaption>
          </figure>
        </div>

        <div class="contenedor_tarjeta">
          <figure id="tarjeta">
            <img src={Logo} class="frontal" alt="info3" />
            <figcaption class="trasera">
              <h2 class="titulo">CUIDAMOS TU PRESUPUESTO</h2>
              <hr />
              <p>
                Tenemos repuestos de calidad a precio accesible, y te diremos
                que hacer por nivel de urgencias
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    );
  }
}

export default TarjetaInfo;
