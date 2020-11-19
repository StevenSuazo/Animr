import React from 'react';
import { Link } from 'react-router-dom';
import DemoLogIn from './session_form/demo_login'

const Splash = ({ currentUser }) => {
  const welcomeSplash = () => (

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
  )
  const personalGreeting = () => (
    //redirect to users page
    null
  );

  return currentUser ? personalGreeting() : welcomeSplash();
};


export default Splash;


{/* <p><Link className="splash-signup-btn" to="/signup">Start for free</Link></p> */}