import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./screens/general/header/Header";
import Home from "./screens/home/Home";
import Footer from "./screens/general/Footer";
import Classes from "./screens/classes/Classes";
import Trainer from "./screens/trainer/Trainer";
import Schedule from "./screens/schedule/Schedule";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Classes">
          <Classes />
        </Route>
        <Route exact path="/Plans"></Route>
        <Route exact path="/Schedule">
          <Schedule />
        </Route>
        <Route exact path="/Singup"></Route>
        <Route exact path="/Trainer">
          <Trainer />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
