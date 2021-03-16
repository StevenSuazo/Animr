import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosAlbums } from "react-icons/io";
import UserShowItem from './user_show_item';
import UserShowHeader from './user_show_header';
import UserShowAlbum from './user_show_album';

class UserShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleTabs = this.handleTabs.bind(this);
    }

    handleTabs() {
        if (this.props.location.pathname.includes("albums")) {
            let albumClasses = document.getElementById("user-show-albums-link").classList;
            albumClasses.add("selected");
        } else {
            let photostreamClasses = document.getElementById("user-show-photostream-link").classList;
            photostreamClasses.add("selected");
        }
    }

    componentDidMount() {
        this.props.getPhotos();
        this.props.getAlbums();
        this.handleTabs();
    }

    componentDidUpdate() {
        let tabsClasses = document.querySelectorAll(".user-show-tab");
        tabsClasses.forEach(tab => {
            tab.classList.remove("selected");
        });
        this.handleTabs();
    }

    render() {
        const { user, photos, albums, location, currUserId} = this.props;
        const userPhotos = photos.filter(photo => {
            return parseInt(photo.user_id) === user.id;
        });
        const userAlbums = albums.filter(album => {
                return parseInt(album.user_id) === user.id;
        });
        const albumOwner = location.pathname.includes(currUserId)

        let display;
        if (this.props.location.pathname.includes("albums")) {
            if (userAlbums.length === 0 && albumOwner) {
                display = (
                    <div className="albums-body">
                        <div className="albums-toolbar">
                            <Link to="/photos/organize/new_set">
                                <IoIosAlbums />
                                <p>New album</p>
                            </Link>
                        </div>
                        <p className="no-album-text">{this.props.user.username} does not have any albums.</p>
                    </div>
                )
            } else if (userAlbums.length > 0 && albumOwner){
                display = (
                    <div className="albums-body">
                        <div className="albums-toolbar">
                            <Link to="/photos/organize/new_set">
                                <IoIosAlbums />
                                <p>New album</p>
                            </Link>
                        </div>
                        <div className="albums-array">
                            <div className="albums-grid">
                                {userAlbums.map(album => <UserShowAlbum key={album.id} album={album} photos={photos} currentUser={user} deleteAlbum={this.props.deleteAlbum} history={this.props.history} />)}
                            </div>
                        </div>
                    </div>
                )
            }
            else if (userAlbums.length === 0 && !albumOwner) {
                display = (
                    <div className="albums-body">
                        <p className="no-album-text">{this.props.user.username} does not have any albums.</p>
                    </div>
                )
            } else if (userAlbums.length > 0 && !albumOwner){
                display = (
                    <div className="albums-body">
                        <div className="albums-array">
                            <div className="albums-grid">
                                {userAlbums.map(album => <UserShowAlbum key={album.id} album={album} photos={photos} currentUser={user} deleteAlbum={this.props.deleteAlbum} history={this.props.history} />)}
                            </div>
                        </div>
                    </div>
                )
            }
        } else {
            if (userPhotos.length === 0) {
                display = (
                    <div className="photo-array">
                        <p>{this.props.user.username} does not have any photos.</p>
                    </div>
                )
            } else {
                display = (
                    <div className="photo-array">
                        <div className="photo-grid">
                            {userPhotos.map(photo => photo.pictureUrl !== "" ? <UserShowItem key={photo.id} photo={photo} username={user.username} /> : null)}
                        </div>
                    </div>
                )
            }
        }
        return (
            <div className="user-background">
                <UserShowHeader user={user} photos={userPhotos} />
                <div className="user-subheader">
                    <div className="user-subheader-content">
                        <Link
                            to={`/users/${user.id}`}
                            id="user-show-photostream-link"
                            className="user-show-tab">
                            Photostream
                        </Link>
                        <Link
                            to={`/users/${user.id}/albums`}
                            id="user-show-albums-link"
                            className="user-show-tab">
                            Albums
                        </Link>
                    </div>
                </div>
                {display}
            </div>
        );
    }
}

export default UserShow;