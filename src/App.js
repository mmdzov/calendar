import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Timezone from "./container/Timezone";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Timezone} />
      </Switch>
    </Router>
  );
}

export default App;
