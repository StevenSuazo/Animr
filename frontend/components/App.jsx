import React from "react";
import { Link, Route, Switch } from "react-router-dom"
import SplashContainer from "./splash_container";
import NavBar from './navbar_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import ExploreContainer from './pages/explore/explore_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <NavBar />
    </header>
    <Switch>
      <Route exact path="/explore" component={ExploreContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={SplashContainer} />
    </Switch>
  </div>
);

export default App;