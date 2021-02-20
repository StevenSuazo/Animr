import * as PhotoAPIUtil from '../util/photos_api_util';

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const RECEIVE_PHOTO_ERRORS = "RECEIVE_PHOTO_ERRORS";
export const REMOVE_PHOTO = "REMOVE_PHOTO";

const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

const receivePhotoErrors = errors => ({
  type: RECEIVE_PHOTO_ERRORS,
  errors
});

const removePhoto = photoId => ({
  type: REMOVE_PHOTO,
  photoId
})

export const getPhotos = () => dispatch => PhotoAPIUtil.getPhotos()
  .then(photos => dispatch(receivePhotos(photos)));

export const getPhoto = id => dispatch => PhotoAPIUtil.getPhoto(id)
  .then(photo => dispatch(receivePhoto(photo)));

export const postPhoto = photoForm => dispatch => PhotoAPIUtil.postPhoto(photoForm)
  .then(photo => dispatch(receivePhoto(photo)),
    errors => dispatch(receivePhotoErrors(errors.responseJSON)));


// export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
// export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
// export const DELETE_PHOTO = 'DELETE_PHOTO';
// export const RECEIVE_PHOTO_ERRORS = "RECEIVE_PHOTO_ERRORS";
// export const REMOVE_PHOTO_ERRORS = 'REMOVE_PHOTO_ERRORS';
// export const REMOVE_PHOTOS = 'REMOVE_PHOTOS';


// const receivePhotos = photos => {
//   return ({
//     type: RECEIVE_PHOTOS,
//     photos: photos
//   });
// };

// const receivePhoto = photo => {
//   return ({
//     type: RECEIVE_PHOTO,
//     photo: photo
//   });
// };

// const removePhoto = photo => {
//   return ({
//     type: DELETE_PHOTO,
//     photoId: photo.id
//   });
// };

// export const receiveErrors = errors => ({
//   type: RECEIVE_PHOTO_ERRORS,
//   errors: errors
// });

// export const clearErrors = () => ({
//   type: REMOVE_PHOTO_ERRORS,
// });

// export const clearPhotos = () => ({
//   type: REMOVE_PHOTOS,
// });

// export const fetchPhotos = (count, userId, tagId) => dispatch => {
//   return (
//     ApiUtil.fetchPhotos(count, userId, tagId)
//       .then(photos => dispatch(receivePhotos(photos)))
//       .fail(error => dispatch(receiveErrors(error.responseJSON)))
//   );
// };

// export const fetchPhoto = id => dispatch => {
//   return (
//     ApiUtil.fetchPhoto(id)
//       .then(photo => dispatch(receivePhoto(photo)))
//       .fail(error => dispatch(receiveErrors(error.responseJSON)))
//   );
// };

// export const createPhoto = photo => dispatch => {
//   return (
//     ApiUtil.createPhoto(photo)
//       .then(photo => dispatch(receivePhoto(photo)))
//       .fail(error => dispatch(receiveErrors(error.responseJSON)))
//   );
// };

// export const updatePhoto = photo => dispatch => {
//   return (
//     ApiUtil.updatePhoto(photo)
//       .then(photo => dispatch(receivePhoto(photo)))
//       .fail(error => dispatch(receiveErrors(error.responseJSON)))
//   );
// };

// export const deletePhoto = id => dispatch => {
//   return (
//     ApiUtil.deletePhoto(id)
//       .then(photo => dispatch(removePhoto(photo)))
//       .fail(error => dispatch(receiveErrors(error.responseJSON)))
//   );
// };