import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Galeria from "./pages/Galeria";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/Galeria" component={Galeria} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
