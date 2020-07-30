import React from "react";
import "./styles/SliderStyle.css";
import $ from "jquery";
import "bootstrap";
class Slider extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div class="container">
        <section class="customer-logos slider">
          <div class="slide">
            <img src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg" />
          </div>
          <div class="slide">
            <img src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg" />
          </div>
          <div class="slide">
            <img src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg" />
          </div>
          <div class="slide">
            <img src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg" />
          </div>
          <div class="slide">
            <img src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg" />
          </div>
        </section>
      </div>
    );
  }
}

export default Slider;
