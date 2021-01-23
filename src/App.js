import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import DetalleLugar from "./pages/DetalleLugar";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/detalle">
          <DetalleLugar />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
