import React from 'react';
import { Link } from 'react-router-dom';
import DemoLogIn from './session_form/demo_login'
import NavBar from './navbar_container';

const Splash = ({ currentUser }) => {
  const welcomeSplashIn = () => (
    <>
      <header>
        <NavBar />
      </header>
      <div className="container">
        <div className="outer">
          <div className="splash-content-wrap">
            <h1 className="main-text">Find your inspiration.</h1>
            <div className="sub-text">Join the Animr community. It's like Flickr, just not as nice :)</div>
            <div className="splash-signup-btn">
              <DemoLogIn />
            </div>
          </div>
        </div>
      </div>
    </>
  )

  const welcomeSplashOut = () => (
    <>
      <header>
        <NavBar />
      </header>
      <div className="container">
        <div className="outer">
          <div className="splash-content-wrap">
            <h1 className="main-text">Find your inspiration.</h1>
            <div className="sub-text">Join the Animr community. It's like Flickr, just not as nice :)</div>
            <div className="splash-signup-btn">
              <DemoLogIn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
  return currentUser ? welcomeSplashOut() : welcomeSplashIn();
};


export default Splash;
