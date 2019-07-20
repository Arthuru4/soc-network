import World from './World'
import {connect} from 'react-redux';
import {followUnfollow, showMore} from '../../../redux/reducers/world-reduces';

const stateArg = (state) => {
    return {
        worldReducer: state.worldReducer
    }
};

const dispatchArg = (dispatch) => {
    return {
        showMore: () => dispatch(showMore()),
        followUnfollow: (id) => dispatch(followUnfollow(id))
    }
};


let WorldContainer = connect(stateArg, dispatchArg)(World);

export default WorldContainer