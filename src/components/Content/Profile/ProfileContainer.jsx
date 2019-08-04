import React from 'react';
import s from './Profile.module.css';
import connect from 'react-redux/es/connect/connect';
import Profile from './Profile';
import * as axios from 'axios';
import {inProgressAC} from '../../../redux/reducers/world-reduces';
import {setProfileInfo} from '../../../redux/reducers/profile-reduces';
import {withRouter} from 'react-router-dom';

class ProfileAPI extends React.Component {
    componentDidMount(): void {
        this.axiosGetProfile(this.props.match.params.userId)
    }

    axiosGetProfile = (userId) => {
        if (!userId) return;
        this.props.inProgressAC(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response) => {
                this.props.inProgressAC(false);
                this.props.setProfileInfo(response.data);
            })
    };

    render = () => {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        inProgress: state.worldReducer.inProgress,
        profile: state.profileInfo.profile
    }
};

let WithURLProfileAPI = withRouter(ProfileAPI);

const ProfileContainer = connect(mapStateToProps, {inProgressAC, setProfileInfo})(WithURLProfileAPI);

export default ProfileContainer;