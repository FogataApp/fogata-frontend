import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import DetalleLugar from "./pages/DetalleLugar";
import Profile from "./pages/Profile";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Router>
        <Switch>
          <Router exact path="/login">
            <Login /> 
          </Router>
        </Switch>
        </Route>
        <Route path="/detalle">
          <DetalleLugar />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );  
}

export default App;
