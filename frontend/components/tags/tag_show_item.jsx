import React from 'react';
import { Link } from 'react-router-dom';

class TagShowItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { photo, username, tag } = this.props;

        debugger
        return (
            <div className="photo-item">
                <Link to={`/photos/${photo.id}`}>
                    <img src={photo.pictureUrl} alt={photo.description} />
                </Link>
                <div className="photo-overlay">
                    <p className="photo-title">{photo.title}</p>
                    <Link className="photo-user-link" to={`/users/${photo.user_id}`}>
                        by {username}
                    </Link>
                </div>
            </div>
        );
    }
}

export default TagShowItem;