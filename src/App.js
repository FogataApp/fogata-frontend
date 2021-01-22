import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Router exact path="/">
          <Home />
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
