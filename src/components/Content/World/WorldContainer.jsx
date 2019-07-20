import World from './World'
import {connect} from 'react-redux';

const stateArg = (state) => {
    return {
        worldReducer: state.worldReducer
    }
};

const dispatchArg = (dispatch) => {
    return {}
};


let WorldContainer = connect(stateArg, dispatchArg)(World);

export default WorldContainer