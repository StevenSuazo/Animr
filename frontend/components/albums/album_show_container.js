import { connect } from 'react-redux';
import { getAlbum } from '../../actions/album_actions';
import AlbumShow from './album_show';

const mapStateToProps = (state, ownProps) => {
    const album = state.entities.albums[ownProps.match.params.albumId]
    return {
        album,
        photos: state.entities.photos,
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id]
    }
};

const mapDispatchToProps = dispatch => ({
    getAlbum: albumId => dispatch(getAlbum(albumId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AlbumShow);