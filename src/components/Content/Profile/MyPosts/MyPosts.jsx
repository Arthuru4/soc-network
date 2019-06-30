import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
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
            {
                props.myPostsProps.map((item, i) => {
                    return <Post key={i} text={item.text} likesCount={item.likesCount} />
                })
            }
        </div>
    </div>
};

export default MyPosts;