import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Inicio from "./pages/Inicio";
import Mugs from "./pages/Mugs";
import Logos from "./pages/Logos";
import Otros from "./pages/Otros";
import Loader from "./components/Loader";
import DynamicScrollToTop from "./components/DynamicScrollToTop";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Loader />
        <Layout>
          <DynamicScrollToTop />

          <Switch>
            <Route exact path="/" component={Inicio} />
            <Route exact path="/Mugs" component={Mugs} />
            <Route exact path="/Logos" component={Logos} />
            <Route exact path="/Otros" component={Otros} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
