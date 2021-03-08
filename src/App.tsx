import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/home/Home";
import Nav from "./components/nav/Nav";
import NotFound from "./views/NotFound";
import About from "./views/About";
import AboutSideNav from "./components/nav/AboutSideNav";

function App() {
  return (
    <>
      <Nav></Nav>

      <Switch>
        <Route exact path="/" component={() => <Home />}></Route>
        <Route exact path="/about" component={() => <About />}></Route>

        <Route component={() => <NotFound />}></Route>
      </Switch>
    </>
  );
}

export default App;
