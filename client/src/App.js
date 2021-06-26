import "./App.css";
import Login from "./Components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Community from "./Components/Community";
import Stocks from "./Components/Stocks";
import Crypto from "./Components/Crypto";


function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Homepage} />
          <Route path="/community" component={Community} />
          <Route path="/stocks" component={Stocks} />
          <Route path="/crypto" component={Crypto} />
        </Switch>
    
    </Router>
  );
}

export default App;
