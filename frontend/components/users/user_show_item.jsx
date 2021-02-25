import React from 'react';
import { Link } from 'react-router-dom';

class UserShowItem extends React.Component {
    constructor(props) {
        super(props);
        debugger
    }

    render() {
        const { photo, displayName } = this.props;
        debugger
        return (
            <div className="photo-item">
                <Link to={`/photos/${photo.id}`}>
                    <img src={photo.pictureUrl} alt={photo.description} />
                </Link>
                <div className="photo-overlay">
                    <p className="photo-title">{photo.title}</p>
                    <Link className="photo-user-link" to={`/users/${photo.user_id}`}>
                        by {displayName}
                    </Link>
                </div>
            </div>
        );
    }
}

export default UserShowItem;