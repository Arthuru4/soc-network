import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return <div className={s.postHead}>
        <h3>My Posts</h3>
        <div>
            <div>
                <textarea name="message"/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </div>
        <div className={s.posts}>
        <Post text='Hi'/>
        <Post text='Hello, How r u?'/>
        <Post text='Cool, and u?'/>
        <Post text='Hmm... green-green grass'/>
        </div>
    </div>
};

export default MyPosts;