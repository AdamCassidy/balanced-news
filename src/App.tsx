import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/home/Home";
import Nav from "./components/Nav";
import { NotFound } from "./views/NotFound";

function App() {
  return (
    <>
      <Nav></Nav>
      <Switch>
        <Route exact path="/" component={() => <Home />}></Route>
        <Route component={() => <NotFound />}></Route>
      </Switch>
    </>
  );
}

export default App;
