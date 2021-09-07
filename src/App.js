import React, { Suspense } from "react";
import "rsuite/dist/styles/rsuite-default.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import { Progress } from "rsuite";

const { Line } = Progress;

// -----------------------------------------------------------------------
function App() {
  const loading = () => {
    <div style={{ position: "absolute" , top: 0 , width: "100%"}}>
      <Line percent={100} strokeColor="blue" />
    </div>;
  };
  return (
    <div className="app">
      <HashRouter>
        <Suspense fallback={loading()}>
          <Switch>
            <Route
              path="/"
              name="Home"
              render={(props) => <Layout {...props} />}
            />
          </Switch>
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
