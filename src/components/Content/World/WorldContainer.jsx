import World from './World'
import {connect} from 'react-redux';
import {followUnfollowAC, getUsersAC, showMoreAC} from '../../../redux/reducers/world-reduces';

const stateArg = (state) => {
    return {
        worldReducer: state.worldReducer
    }
};

const dispatchArg = (dispatch) => {
    return {
        showMoreAC: () => dispatch(showMoreAC()),
        followUnfollowAC: (id) => dispatch(followUnfollowAC(id)),
        getUsersAC: (users) => dispatch(getUsersAC(users))
    }
};

let WorldContainer = connect(stateArg, dispatchArg)(World);

export default WorldContainer