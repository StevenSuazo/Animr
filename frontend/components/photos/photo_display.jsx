import React from "react";

const PhotoDisplay = (props) => {
  
  return (
    <div className="photo-display">
      <img
        className="photo-show"
        src={props.photos[props.photoId].pictureUrl}
        alt={props.photos[props.photoId].title}
      />
      {props.currentUser.id == props.photos[props.photoId].user_id && (
        <button onClick={props.delete} className="blue-button del-btn">
          Delete Photo
        </button>
      )}
    </div>
  );
};

export default PhotoDisplay;
