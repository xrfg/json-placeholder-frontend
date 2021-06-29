import React from "react";
import Container from "./context/Container";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ResourcesBlock from "./Components/ResourcesBlock";
import RoutesBlock from "./Components/RoutesBlock";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
function App() {
  return (
    <Container>
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/resources" component={ResourcesBlock} />

            <Route path="/routes" component={RoutesBlock} />
          </Switch>
        </div>
      </BrowserRouter>
    </Container>
  );
}

export default App;
