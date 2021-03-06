// import React from "react";
// import ReactDOM from "react-dom";
// import { signup, login, logout } from "./util/session_api_util";
// import configureStore from "./store/store";
// import Root from "./components/root";


// document.addEventListener("DOMContentLoaded", () => {
//   const root = document.getElementById("root");
//   const store = configureStore();
//   ReactDOM.render(<Root store={store} />, root);

//   //Testing
//   window.getState = store.getState;
//   window.dispatch = store.dispatch;
//   window.signup = signup;
//   window.login = login;
//   window.logout = logout;
// });




import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import { signup, login, logout } from "./util/session_api_util";
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);

  //testing 
window.getState = store.getState;
window.dispatch = store.dispatch;
window.signup = signup;
window.login = login;
window.logout = logout;
});

