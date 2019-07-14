import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Legend from './Legend/Legend';

const Profile = (props) => {
    return (
        <div>
            <Legend/>
            <MyPostsContainer profilePage={props.profilePage} dispatch={props.dispatch}/>
        </div>
    )
};

export default Profile;