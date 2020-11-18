import { RECEIVE_CURRENT_USER, RECEIVE_USER, REMOVE_USERS,} from '../actions/session_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, { [action.currentUser.id]: action.currentUser });
    default:
      return oldState;
  }
};

export default usersReducer;