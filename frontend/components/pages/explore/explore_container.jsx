import { connect } from 'react-redux';
import { fetchAllPhotos } from '../../../actions/photos_actions';
import Explore from './explore';

const mSTP = state => {
  return {
    photos: Object.values(state.entities.photos)
    // users: users
  }
};


const mDTP = dispatch => ({
  displayPhotos: (photos) => dispatch(fetchAllPhotos(photos))
});

export default connect(mSTP, mDTP)(Explore);