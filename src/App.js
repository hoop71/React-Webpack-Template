import React, { Fragment } from "react";
import { hot } from "react-hot-loader";
import Missles from "./Missles";

const App = () => (
  <Fragment>
    <h1>
      Missle Blaster<br />
    </h1>
    <Missles />
  </Fragment>
);

export default hot(module)(App);
