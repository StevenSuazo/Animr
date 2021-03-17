import React from 'react';
import PhotosIndexItem from './photos_index_item';

class PhotosIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsers();
    this.props.getPhotos();
  }

  render() {
    const { photos, users } = this.props;
    debugger
    if (Object.values(users).length > 1 ) {
      return (
        <div className="explore-background">
          <div className="photo-array">
            <h3 className="explore">Explore</h3>
            <div className="photo-grid">
              {photos.map(photo => photo.id && photo.pictureUrl !== "" ? 
              <PhotosIndexItem key={photo.id} photo={photo} username={users[photo.user_id].username} /> 
              : null)}
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default PhotosIndex;