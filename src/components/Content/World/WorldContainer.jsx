import {connect} from 'react-redux';
import {
    followUnfollowAC,
    setPagesInfoAC,
    getUsersAC,
    setCurrentPageAC,
    showMoreAC, inProgressAC
} from '../../../redux/reducers/world-reduces';
import React from 'react';
import * as axios from 'axios';
import {World} from './World';

class WorldAPI extends React.Component {
    componentDidMount(): void {
        this.changePage()
    }

    changePage = (page) => {
        let worldReducer = this.props.worldReducer;

        if (worldReducer.currentPage === page || worldReducer.inProgress) return;

        this.props.inProgressAC(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?pageSize=5&page=${page || 1}&count=${worldReducer.pageSize}`)
            .then((response) => {
                if (response.status === 200) {
                    let users = response.data.items;
                    let totalCount = response.data.totalCount;

                    this.props.inProgressAC(false);
                    this.props.setPagesInfoAC({users, totalCount, pageSize: 5, currentPage: page || 1});
                } else {
                    //ERROR
                    console.error('RESPONSE ERROR')
                }
            })
    };

    render() {
        return (
            <World worldReducer={this.props.worldReducer} changePage={(page) => this.changePage(page)}
                   followUnfollowAC={this.props.followUnfollowAC} showMoreAC={this.props.showMoreAC}/>
        )
    }
}

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
        inProgressAC: (bool) => dispatch(inProgressAC(bool)),
        setCurrentPageAC: (page) => dispatch(setCurrentPageAC(page))
    }
};

let WorldContainer = connect(stateArg, dispatchArg)(WorldAPI);

export default WorldContainer