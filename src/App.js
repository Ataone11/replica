import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./screens/home/Home";
import Footer from "./screens/general/Footer";
import Classes from "./screens/classes/Classes";
import Trainer from "./screens/trainer/Trainer";
import Schedule from "./screens/schedule/Schedule";
import Singup from "./screens/singup/Singup";
import Header2 from "./screens/general/header/Header2";
import Plans from "./screens/plans/Plans";
import pLAN from "./screens/plans/Plan";
import Plan from "./screens/plans/Plan";

const App = () => {
  return (
    <BrowserRouter>
      <Header2 />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Classes">
          <Classes />
        </Route>
        <Route exact path="/Plans">
          <Plans />
        </Route>
        <Route exact path="/Basic/:_id">
          <Plan />
        </Route>
        <Route exact path="/Schedule">
          <Schedule />
        </Route>
        <Route exact path="/Singup">
          <Singup />
        </Route>
        <Route exact path="/Trainer">
          <Trainer />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
