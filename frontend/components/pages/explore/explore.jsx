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
    // if (this.props.photo === undefined) {
    //   return <span>No photo yet!</span>;
    // }
    // return (
    //   <h1>Explore page</h1>
    // );
    
    const photoLis = this.props.photos.map(photo => {
      const user = this.props.users[photo.author_id];
      return (
        <div>
          <img src="" alt=""/>
          <li key={photo.id}>
            {user.username}
          </li>
        </div>
      )
    });

    return (<ul className="photo-list">{photoLis}</ul>);
  }
}

export default photoIndex; 