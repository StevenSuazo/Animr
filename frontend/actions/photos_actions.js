import * as ApiUtil from '../util/photos_api_util';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const RECEIVE_PHOTO_ERRORS = 'RECEIVE_PHOTO_ERRORS';

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo: photo,
});

export const receiveAllPhotos = ({ photos, users }) => {
  return {
  type: RECEIVE_ALL_PHOTOS,
  photos: photos,
  users: users
  }
};

export const removePhoto = photo => ({
  type: REMOVE_PHOTO,
  photoId: photo.id,
});

export const receivePhotoErrors = errors => ({
  type: RECEIVE_PHOTO_ERRORS,
  errors: errors,
});

export const fetchPhoto = id => dispatch => {
  return (
    ApiUtil.fetchPhoto(id)
      .then(photo => dispatch(receivePhoto(photo)))
      .fail(error => dispatch(receivePhotoErrors(error.responseJSON)))
  );
};

export const fetchAllPhotos = () => {
  return (dispatch) => {
    return ApiUtil.fetchAllPhotos().then(payload => {
      return dispatch(receiveAllPhotos(payload));
    })
  }
}

export const createPhoto = photo => dispatch => {
  return (
    ApiUtil.createPhoto(photo)
      .then(photo => dispatch(receivePhoto(photo)))
      .fail(error => dispatch(receivePhotoErrors(error.responseJSON)))
  );
};

export const updatePhoto = photo => dispatch => {
  return (
    ApiUtil.updatePhoto(photo)
      .then(photo => dispatch(receivePhoto(photo)))
      .fail(error => dispatch(receivePhotoErrors(error.responseJSON)))
  );
};

export const deletePhoto = id => dispatch => {
  return (
    ApiUtil.deletePhoto(id)
      .then(photo => dispatch(deletePhoto(photo)))
      .fail(error => dispatch(receivePhotoErrors(error.responseJSON)))
  );
};