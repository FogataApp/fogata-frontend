import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Router exact path="/">
          <Home />
        </Router>
        <Switch>
          <Router exact path="/login">
            <Login /> 
          </Router>
        </Switch>
      </Switch>
    </Router>
  );  
}

export default App;
