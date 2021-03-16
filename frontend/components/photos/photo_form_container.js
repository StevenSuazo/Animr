import { connect } from 'react-redux';
import { postPhoto } from '../../actions/photos_actions';
import PhotoForm from './photo_form';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.photo
});

const mapDispatchToProps = dispatch => ({
    postPhoto: photo => dispatch(postPhoto(photo))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoForm);