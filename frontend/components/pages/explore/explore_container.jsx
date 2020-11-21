import { connect } from 'react-redux';
import { fetchPhoto } from '../../../util/photos_api_util';
import Explore from './explore';

const mSTP = (state) => {
  // return {
  //   photo: Object.values(state.photo)
  //   // users: state.users
  // }
};

const mDTP = dispatch => ({
  fetchPhoto: () => dispatch(fetchPhoto())
});

export default connect(null, mDTP)(Explore);
