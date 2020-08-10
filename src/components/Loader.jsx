import React from "react";
import "./styles/LoaderStyle.css";
import $ from "jquery";

const Loader = () => {
  return (
    <div className="loader_bg">
      <div className="contenedor_loader">
        <h3 className="title">NDKreative</h3>
        <div className="rainbow-marker-loader"></div>
      </div>
    </div>
  );
};

setTimeout(function () {
  $(".loader_bg").fadeToggle();
}, 1500);

export default Loader;
