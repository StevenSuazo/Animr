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
    
    const allPhotos = this.props.photos.map(photo => {
      return <img src={photo.pictureUrl} key={photo.id} />
    })

    return (
      <div>
        {allPhotos}
      </div>
    )
  }
}

export default photoIndex; 