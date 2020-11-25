import { RECEIVE_PHOTO, RECEIVE_ALL_PHOTOS, REMOVE_PHOTO } from '../actions/photos_actions';

const photosReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
 
  let newState = {};
  switch (action.type) {

    case RECEIVE_PHOTO:
      const { photo } = action;
      newState = Object.assign({}, oldState, photo);
      return newState;

    case RECEIVE_ALL_PHOTOS:
      return action.photos;

    // case REMOVE_PHOTO:
    //   let newState = Object.assign({}, state);
    //   delete newState[action.photoId];
    //   return newState;

    default:
      return oldState;
  }
};

export default photosReducer;