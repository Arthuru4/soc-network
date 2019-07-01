import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Legend from './Legend/Legend';

const Profile = (props) => {
    return (
        <div>
            <Legend/>
            <MyPosts myPostsProps={props.myPostsProps}/>
        </div>
    )
};

export default Profile;