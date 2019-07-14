import React from 'react';
import MyPosts from './MyPosts';
import {addPostData, updatePostData} from '../../../../redux/reducers/profile-reduces';


const MyPostsContainer = (props) => {
    const updatePostText = (text) => {
        props.dispatch(updatePostData(text));
    };
    const addPost = () => {
        props.dispatch(addPostData())
    };

    return <MyPosts postData={props.profilePage.postData}
                    newPostInfo={props.profilePage.newPostInfo}
                    updatePostText={updatePostText}
                    addPost={addPost}/>
};

export default MyPostsContainer;