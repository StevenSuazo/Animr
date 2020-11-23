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
    
    return (
      this.props.photos.length > 0 ?

      (<img src={this.props.photos[0].pictureUrl} />) : "not working"
    )
    // const photoLis = this.props.photos.map(photo => {
    //   const user = this.props.users[photo.user_id];
    //   return (
    //     <div>
    //       <img src="" alt=""/>
    //       <li key={photo.id}>
    //         {user.username}
    //       </li>
    //     </div>
    //   )
    // });

    // return (<ul className="photo-list">{photoLis}</ul>);
  }
}

export default photoIndex; 