// import React from 'react';
// import { Link } from 'react-router-dom';
// import PhotosIndexItem from './photos_index_item';

// class photoIndex extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     // this.props.displayPhotos()
//     this.props.getUsers();
//     this.props.getPhotos();
//   }

//   render() {
//     // const { photos } = this.props;
//     debugger
//     return (
//       <div className="main-photo-index-div">
//         <div className="photos-container">
//           <ul className="photos-ul">
//             {
//               this.props.photos.map(photo =>
//                 <div className="photo-box"
//                   key={photo.id}>
//                     <PhotosIndexItem key={photo.id} photo={photo} displayName={"test"} />

//                 </div>
//               )}
//           </ul>
//         </div>
//       </div>
//     )
//   }
// }

// export default photoIndex; 

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

    if (Object.values(users).length > 1) {
      return (
        <div className="explore-background">
          <div className="photo-array">
            <h3 className="explore">Explore</h3>
            <div className="photo-grid">
              {photos.map(photo => <PhotosIndexItem key={photo.id} photo={photo} displayName={users[photo.user_id].username} />)}
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