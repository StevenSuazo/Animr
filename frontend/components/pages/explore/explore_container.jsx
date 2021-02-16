import { connect } from 'react-redux';
import { fetchPhotos } from '../../../actions/photos_actions';
import Explore from './explore';

// const mSTP = state => {
//   return {
//     photos: Object.values(state.entities.photos)
//     // users: users
//   }
// };

const mSTP = ({ session, entities: { photos } }) => {
  return {
    photos: Object.values(photos),
    loggedIn: Boolean(session.id)
  };
};

const mDTP = dispatch => ({
  displayPhotos: (photos) => dispatch(fetchPhotos(photos))
});

export default connect(mSTP, mDTP)(Explore);