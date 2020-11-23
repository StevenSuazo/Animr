import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

const DemoLogOut = ({ logout }) => {
  let demoUser = { username: "Demo", password: "password" }

  const handleLogOut = () => {
    logout(demoUser);
  }

  return (
    <div className="splash-logout" onClick={handleLogOut}>Demo LogOut</div>
  )
}

const mSTP = (state, ownProps) => {
  return ({
  });
};

const mDTP = dispatch => {
  return ({
    logout: (user) => dispatch(logout(user))
  });
};

export default connect(mSTP, mDTP)(DemoLogOut)