import React from "react";
import Header from "../components/Header";
import Services from "../components/Services";
import About from "../components/About";
import Parallax from "../components/Parallax";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Services />
      <hr />
      <About />
      <Parallax />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
