import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Legend from './Legend/Legend';

const Profile = (props) => {
    let myPostsProps = [
            {text: 'Hi', likesCount: '1', id: 1},
            {text: 'Hello, How r u?', likesCount: '21', id: 2},
            {text: 'Cool, and u??', likesCount: '11', id: 3},
            {text: 'Hmm... green-green grass', likesCount: '2', id: 4},
        ];

    return (
        <div>
            <Legend/>
            <MyPosts myPostsProps={myPostsProps}/>
        </div>
    )
};

export default Profile;