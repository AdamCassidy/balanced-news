import Home from "./views/home/Home";
import { useRoutes } from "hookrouter";
import React from "react";
import { Login } from "./views/Login";
import { Signup } from "./views/Signup";

const routes = {
  "/": () => <Home />,
  "/login": () => <Login />,
  "/signup": () => <Signup />,
};

const App = () => useRoutes(routes);

export default App;
