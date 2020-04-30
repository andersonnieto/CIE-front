import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from "./history";

import { Public as Home } from "../View/Public/public";

function RouterMain() {
  return (
    <Router history={history}>
      {/* <Route expath="/" component={}/> */}
      <Home></Home>
    </Router>
  );
}

export default RouterMain;
