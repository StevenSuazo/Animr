import React from 'react';
import { Link } from 'react-router-dom';

class photoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.fetchPhoto();
  // }

  render() {
    // if (this.props.photo.length === 0) {
    //   return <span>No photo yet!</span>;
    // }
    return (
      <h1>Explore page</h1>
    );
    
    // const photoLis = this.props.photo.map(photo => {
    //   const author = this.props.users[photo.author_id];
    //   return (
    //     <li key={photo.id}>
    //       {photo.body} - {author.username}
    //     </li>
    //   )
    // });

    // return (<ul className="photo-list">{photoLis}</ul>);
  }
}

export default photoIndex; 