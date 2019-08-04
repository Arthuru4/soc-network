import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Legend from './Legend/Legend';
import Preloader from '../common/Preloader';

const Profile = (props) => {
    return (
        <div>
            <Preloader inProgress={props.inProgress}/>
            <Legend profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;