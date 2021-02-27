import React from "react";
import { Link, Route, Switch } from "react-router-dom"
import SplashContainer from "./splash_container";
import NavBar from './navbar_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import ExploreContainer from './pages/explore/explore_container';
import PhotoShowContainer from "./photos/photo_show_container";
import UserShowContainer from "./users/user_show_container"
import AlbumShowContainer from "./albums/album_show_container"
import AlbumFormContainer from './albums/album_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <NavBar />
    </header>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={SplashContainer} />
      <Route exact path="/explore" component={ExploreContainer} />
      <Route exact path="/photos/:photoId" component={PhotoShowContainer} />
      <Route exact path="/users/:userId" component={UserShowContainer} />
      <Route exact path="/users/:userId/albums" component={UserShowContainer} />
      <Route exact path="/users/:userId/albums/:albumId" component={AlbumShowContainer} />
      <ProtectedRoute path="/photos/organize/new_set" component={AlbumFormContainer} />
    </Switch>
  </div>
);

export default App;