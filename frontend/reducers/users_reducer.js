// import { merge } from 'lodash';
// import { RECEIVE_CURRENT_USER} from '../actions/session_actions';

// const usersReducer = (oldState = {}, action) => {
//   Object.freeze(oldState);
//   switch (action.type) {
//     case RECEIVE_CURRENT_USER:
//       return merge({}, oldState, { [action.currentUser.id]: action.currentUser });
//     default:
//       return oldState;
//   }
// };

// export default usersReducer;

import { RECEIVE_CURRENT_USER } from './../actions/session_actions';
import { RECEIVE_ALL_USERS } from './../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      let newState = {}
      let users = Object.values(action.users);
      users.forEach(user => {
        newState[user.id] = user;
      });
      return newState;
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    default:
      return state;
  }
}

export default usersReducer;