// // 
// export const fetchPhoto = id => {
//   // debugger
//   return $.ajax({
//     method: 'GET',
//     url: `api/photos/${id}`
//   })
// }

// export const fetchPhotos = () => {
//   return $.ajax({
//     method: "GET",
//     url: `api/photos`
//   })
// }

// export const createPhoto = photo => (
//   $.ajax({
//     method: 'POST',
//     url: `api/photos`,
//     data: photo,
//   })
// );

// export const updatePhoto = photo => (
//   $.ajax({
//     method: 'PATCH',
//     url: `api/photos/${photo.id}`,
//     data: { photo },
//   })
// );

// export const deletePhoto = id => (
//   $.ajax({
//     method: 'DELETE',
//     url: `api/photos/${id}`,
//   })
// );


export const getPhotos = () => {
  return $.ajax({
    url: '/api/photos',
    method: 'GET'
  });
}

export const getPhoto = id => {
  return $.ajax({
    url: `/api/photos/${id}`,
    method: 'GET'
  });
}

export const postPhoto = formData => {
  return $.ajax({
    url: `/api/photos`,
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
  });
}

export const editPhoto = (formData, id) => {
  return $.ajax({
    url: `/api/photos/${id}`,
    method: 'PATCH',
    data: formData
  });
}

export const deletePhoto = photoId => {
  return $.ajax({
    url: `/api/photos/${photoId}`,
    method: 'DELETE'
  });
}