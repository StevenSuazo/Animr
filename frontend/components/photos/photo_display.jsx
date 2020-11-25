import React from "react";

const PhotoDisplay = (props) => {
  // debugger
  return (
    <div className="photo-display">
      <img
        className="photo-show"
        src={props.photo.pictureUrl}
        alt={props.photo.title}
      />
      {props.currentUser.id == props.photo.user_id && (
        <button onClick={props.delete} className="blue-button del-btn">
          Delete Photo
        </button>
      )}
    </div>
  );
};

export default PhotoDisplay;
