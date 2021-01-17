import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/home/Home";
import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav></Nav>
      <Switch>
        <Route exact path="/signup" component={() => <Signup />}></Route>
        <Route exact path="/login" component={() => <Login />}></Route>
        <Route exact path="/" component={() => <Home />}></Route>
      </Switch>
    </>
  );
}

export default App;
