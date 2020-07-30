import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Mugs from "./pages/Mugs";
import Logos from "./pages/Logos";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/Mugs" component={Mugs} />
          <Route exact path="/Logos" component={Logos} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
