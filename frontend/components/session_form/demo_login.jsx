import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

const DemoLogIn = ({ login }) => {
  let demoUser = { username: "Demo", password: "password" }
  
  const handleLogIn = () => {
    login(demoUser);
  }

  return (
  <div className="splash-demo" onClick={handleLogIn}>Demo Login</div>
  )
}

const mSTP = (state, ownProps) => {
  return ({
  });
};

const mDTP = dispatch => {
  return ({
    login: (user) => dispatch(login(user))
  });
};

export default connect(mSTP, mDTP)(DemoLogIn)