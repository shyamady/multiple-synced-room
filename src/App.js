import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "./components/home";

export const HOME_PATH = "/";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path={HOME_PATH} component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
