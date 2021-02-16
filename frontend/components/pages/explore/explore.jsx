import React from 'react';
import { Link } from 'react-router-dom';

class photoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.displayPhotos()
  }

  render() {
    // const { photos } = this.props;
    // debugger
    return (
      <div className="main-photo-index-div">
        <div className="photos-container">
        <ul className="photos-ul">
            {
              this.props.photos.map(photo =>
                <div className="photo-box"
                  key={photo.id}>

                  {/* <div className="photo-index-user-info">
                    <Link
                      className="photo-index-username"
                      to={`/users/${photo.user.id}`}>
                      {photo.user.username}
                    </Link>
                    <h2 className="featured">Featured</h2>
                  </div> */}

                  <ul className="inner-box">
                    <Link className="index-photo-link" to={`/photos/${photo.id}`}>
                      <img
                        className="index-photo"
                        src={photo.pictureUrl} />
                    </Link>
                  </ul>

                  {/* <div className="photo-title-container">
                    <h2 className="photo-title">{photo.title}</h2>
                    <Link to={`/users/${props.user.id}/photos`}>{props.user.username}</Link>
                  </div> */}
                </div>
              )}
          </ul>
        </div>
      </div>
    )

  }
}

export default photoIndex; 

