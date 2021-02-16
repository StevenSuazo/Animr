import { connect } from "react-redux";
import { fetchPhoto, updatePhoto, deletePhoto } from "../../actions/photos_actions";
import PhotoShow from "./photo_show";

const mapStateToProps = ({ session, entities }, ownProps) => {
  return {
    photo: entities.photos[ownProps.match.params.photoId] || "",
    currentUser: session.currentUser || "",
    users: entities.users || "",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhoto: (photoId) => dispatch(fetchPhoto(photoId)),
    updatePhoto: (photoId, photoData) =>
      dispatch(updatePhoto(photoId, photoData)),
    deletePhoto: (photoId) => dispatch(deletePhoto(photoId)),
  };
};

const PhotoShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoShow);
export default PhotoShowContainer;
