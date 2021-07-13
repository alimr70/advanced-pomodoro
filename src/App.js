import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AddSession from "./components/AddSession";
import SessionsDay from "./components/SessionsDay";
import Sessions from "./components/Sessions";
import Projects from "./components/Projects";
import Settings from "./components/Settings";
import TimeCounter from "./components/TimeCounter";

function App() {
  return (
    <Router>
      <div className="App text-green-400 text-2xl font-bold bg-gray-900 h-full grid">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/addSession" component={AddSession} />
          <Route exact path="/sessionsDay" component={SessionsDay} />
          <Route exact path="/sessions" component={Sessions} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/time/:mins" component={TimeCounter} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
