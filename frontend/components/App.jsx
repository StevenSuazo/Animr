import React from "react";
import { Link, Route, Switch } from "react-router-dom"
import SplashContainer from "./splash_container";
import NavBar from './navbar_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import ExporeContainer from './session_form/login_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <NavBar />
    </header>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={SplashContainer} />
      <Route path="/explore" component={ExporeContainer} />
    </Switch>
  </div>
);

export default App;