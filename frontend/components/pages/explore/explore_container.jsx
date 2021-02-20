import { connect } from 'react-redux';
import { getPhotos } from '../../../actions/photos_actions';
import { getUsers } from '../../../actions/user_actions'
import { selectAllPhotos } from '../../../reducers/selectors'
import Explore from './explore';

// const mSTP = state => {
//   return {
//     photos: Object.values(state.entities.photos)
//     // users: users
//   }
// };

const mapStateToProps = state => ({
  photos: selectAllPhotos(state),
  users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
  getPhotos: () => dispatch(getPhotos()),
  getUsers: () => dispatch(getUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explore);