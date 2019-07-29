import World from './WorldClass'
import {connect} from 'react-redux';
import {
    followUnfollowAC,
    setPagesInfoAC,
    getUsersAC,
    setCurrentPageAC,
    showMoreAC
} from '../../../redux/reducers/world-reduces';

const stateArg = (state) => {
    return {
        worldReducer: state.worldReducer
    }
};

const dispatchArg = (dispatch) => {
    return {
        showMoreAC: () => dispatch(showMoreAC()),
        followUnfollowAC: (id) => dispatch(followUnfollowAC(id)),
        getUsersAC: (users) => dispatch(getUsersAC(users)),
        setPagesInfoAC: (users) => dispatch(setPagesInfoAC(users)),
        setCurrentPageAC: (page) => dispatch(setCurrentPageAC(page))
    }
};

let WorldContainer = connect(stateArg, dispatchArg)(World);

export default WorldContainer