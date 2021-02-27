import React from 'react';
import { Link } from 'react-router-dom';

class AlbumShowItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { photo, photos, username, albumId } = this.props;
        debugger
        return (
            <div className="photo-item">
                <Link to={`/photos/${photo.id}/`}>
                    <img src={photos[photo.id].pictureUrl} alt={photo.description} />
                </Link>
                <div className="photo-overlay">
                    <p className="photo-title">{photo.title}</p>
                    <Link className="photo-user-link" to={`/photos/${photo.user_id}`}>
                        by {username}
                    </Link>
                </div>
            </div>
        );
    }
}

export default AlbumShowItem;