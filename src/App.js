import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AddSession from "./components/AddSession";
import WorkingDays from "./components/WorkingDays";
import Sessions from "./components/Sessions";
import Projects from "./components/Projects";
import Settings from "./components/Settings";
import TimeCounter from "./components/TimeCounter";
import { CloseMenuIcon } from "./components/icons";
import { useContext } from "react";
import { Store } from "./context/Store";
import { showMsg } from "./context/actions";

function App() {
  const { state } = useContext(Store);
  const { msg } = state;
  return (
    <>
      <Router>
        <div className="App text-green-400 text-2xl font-bold bg-gray-900 h-full grid">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/addSession" component={AddSession} />
            <Route exact path="/workingDays" component={WorkingDays} />
            <Route exact path="/sessions/:day" component={Sessions} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/time/:mins" component={TimeCounter} />
          </Switch>
        </div>
      </Router>
      {msg.type ? <Msg /> : ""}
    </>
  );
}

const Msg = () => {
  const { state, dispatch } = useContext(Store);
  const { msg } = state;

  const color = msg.type === "success" ? "blue" : "red";
  return (
    <div className="absolute left-0 bottom-0 w-full h-32 flex items-center justify-center">
      <div
        className={`relative min-w-1/2 max-w-screen-sm p-1 rounded-md bg-gray-900 border-4 border-${color}-500 text-${color}-500 flex justify-evenly items-center`}>
        <div
          className={`absolute left-0 bottom-0 w-5 h-full bg-${color}-500`}></div>
        <button
          className="ml-4"
          onClick={() => {
            dispatch(showMsg({ type: null, msg: null }));
          }}>
          <CloseMenuIcon />
        </button>
        <h1 className="font-bold">{msg.msg}</h1>
      </div>
    </div>
  );
};

export default App;
