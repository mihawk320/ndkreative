import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
import Parallax from "./components/Parallax";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Services />
      <hr />
      <About />
      <Parallax />
    </React.Fragment>
  );
}

export default App;
