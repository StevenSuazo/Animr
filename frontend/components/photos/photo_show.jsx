import React from "react";
import PhotoDisplay from "./photo_display";

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.state = {
      id: this.props.photos.id,
      title: this.props.photos.title,
      description: this.props.photos.description,
    };
    // debugger
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
  
      if (prevProps.photo.title !== this.props.photo.title) {
        this.setState({
          title: this.props.photo.title,
          description: this.props.photo.description,
        });
      }
    }

  render() {
    debugger
    const { currentUser, photos, photoId } = this.props;
    if (!this.props.users || !this.props.photos) return null;
    return (
      <div>
        <PhotoDisplay
          photos={photos}
          photoId={photoId}
          currentUser={currentUser}
          delete={() =>
            this.props
              .deletePhoto(photo.id)
              .then(() =>
                this.props.history.push(`/users/${currentUser.id}/photos`)
              )
          }
        />
      </div>
    );
  }
}

export default PhotoShow;
