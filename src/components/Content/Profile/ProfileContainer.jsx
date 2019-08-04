import React from 'react';
import s from './Profile.module.css';
import connect from 'react-redux/es/connect/connect';
import Profile from './Profile';
import * as axios from 'axios';
import {inProgressAC} from '../../../redux/reducers/world-reduces';
import {setProfileInfo} from '../../../redux/reducers/profile-reduces';

class ProfileAPI extends React.Component {
    componentDidMount(): void {
        this.axiosGetProfile()
    }

    axiosGetProfile = () => {
        this.props.inProgressAC(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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
        profileInfo: state.profileInfo.profile
    }
};

const ProfileContainer = connect(mapStateToProps, {inProgressAC, setProfileInfo})(ProfileAPI);

export default ProfileContainer;