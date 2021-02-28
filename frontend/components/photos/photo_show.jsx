import React from "react";
import { Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
// import PhotoDisplay from "./photo_display";
import CommentsIndexContainer from "../comments/comments_index_container"

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.photos.id,
      title: this.props.photos.title,
      description: this.props.photos.description,
    };
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value,
      });
    };
  }
  
    componentDidUpdate(prevProps, prevState) {
      if (prevProps.match.params.photoId !== this.props.match.params.photoId) {
        this.props.fetchPhoto(this.props.match.params.photoId);
      }
      debugger
  
      if (prevProps.photo.title !== this.props.photo.title) {
        this.setState({
          title: this.props.photo.title,
          description: this.props.photo.description,
        });
      }
    }

  render() {
    const { currentUser, photos, photoId, users } = this.props;
    if (!this.props.users || !this.props.photos) return null;

    debugger
    return (
      <div className="photo-container">
        <div className="photo-show">
          <div className="photo">
            <img src={photos[photoId].pictureUrl} alt={photos[photoId].description} />
          </div>
          {/* <Link className="back-url" to={backLink}><BiArrowBack />Back to {backLinkText}</Link>
          <Link className="previous-url" to={previousPhotoURL}><GrPrevious /></Link>
          <Link className="next-url" to={nextPhotoURL}><GrNext /></Link> */}
          {/* {photoDelete} */}
        </div>
        <div className="photo-info">
          <Link to={`/users/${photos[photoId].user_id}`}>{users[photos[photoId].user_id].username}</Link>
          <div className="photo-details">
            <div className="photo-details-not-owner">
              <BiEdit />
              <h3>{photos[photoId].title}</h3>
              <p>{photos[photoId].description}</p>
            </div>
          </div>
        </div>
        <div className="photo-social">
          <div className="photo-social-left">
            <CommentsIndexContainer photoId={photoId} photoOwnerId={photos[photoId].user_id} />
          </div>
          <div className="photo-social-right">
            {/* <PhotoAlbumsContainer photo={photo} />
            <TagsIndexContainer photoId={photo.id} photoOwnerId={photo.user_id} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoShow;
