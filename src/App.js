import { BrowserRouter, Switch, Route } from "react-router-dom"
// import React, { useState, useEffect } from 'react';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Nav from "./components/Nav";

function App() {
  function Error (){
    return <h1>Error Pgae not found</h1>
  }
  return (
    <BrowserRouter>

      <Nav/>

      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path='*' component={Error} />

      </Switch>
    </BrowserRouter>      );
}

export default App;
