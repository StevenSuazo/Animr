// import { RECEIVE_PHOTOS, RECEIVE_PHOTO, DELETE_PHOTO, REMOVE_PHOTOS} from '../actions/photos_actions';

// const photosReducer = (oldState = {}, action) => {
//   Object.freeze(oldState);
//   let newState = Object.assign({}, oldState);
//   switch (action.type) {
//     case RECEIVE_PHOTOS:
//       return Object.assign(newState, action.photos);
//     case RECEIVE_PHOTO:
//       return { [action.photo.id]: action.photo };
//     case DELETE_PHOTO:
//       delete newState[action.photoId];
//       return newState;
//     case REMOVE_PHOTOS:
//       return {};
//     default:
//       return oldState;
//   }
// };

// export default photosReducer;


import { RECEIVE_PHOTOS, RECEIVE_PHOTO, REMOVE_PHOTO } from '../actions/photos_actions';

const photosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHOTOS:
      let clearState = Object.assign({}, state);
      let photos = Object.values(action.photos);
      photos.forEach(photo => {
        clearState[photo.id] = photo;
      });
      return clearState;
    case RECEIVE_PHOTO:
      const newPhoto = { [action.photo.id]: action.photo };
      return Object.assign({}, state, newPhoto);
    case REMOVE_PHOTO:
      let newState = Object.assign({}, state);
      delete newState[action.photoId];
      return newState;
    default:
      return state;
  }
}

export default photosReducer;