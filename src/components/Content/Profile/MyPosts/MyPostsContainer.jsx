import React from 'react';
import MyPosts from './MyPosts';
import {addPostData, updatePostData} from '../../../../redux/reducers/profile-reduces';
import {ReactReduxContext} from 'react-redux';


const MyPostsContainer = (props) => {
    return <ReactReduxContext.Consumer>
        {
            stor => {
                const store = stor.store;

                const updatePostText = (text) => {
                    store.dispatch(updatePostData(text));
                };
                const addPost = () => {
                    store.dispatch(addPostData())
                };
                return <MyPosts postData={store.getState().profileReducer.postData}
                                newPostInfo={store.getState().profileReducer.newPostInfo}
                                updatePostText={updatePostText}
                                addPost={addPost}/>
            }}
    </ReactReduxContext.Consumer>
};

export default MyPostsContainer;