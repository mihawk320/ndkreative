import React from "react";

import Services from "../components/Services";
import About from "../components/About";
import Parallax from "../components/Parallax";
import Contact from "../components/Contact";

function App() {
  return (
    <React.Fragment>
      <Services />
      <hr />
      <About />
      <Parallax />
      <Contact />
    </React.Fragment>
  );
}

export default App;
