import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Legend from './Legend/Legend';

const Profile = () => {
    return (
        <div>
            <Legend/>
            <MyPosts/>
        </div>
    )
};

export default Profile;