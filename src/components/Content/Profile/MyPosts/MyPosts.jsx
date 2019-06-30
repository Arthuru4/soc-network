import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return <div className={s.postHead}>
        My Posts
        <div>
            <textarea name="message"/>
           <button>Add Post</button>
        </div>
        <Post text='Hi'/>
        <Post text='Hello, How r u?'/>
        <Post text='Cool, and u?'/>
        <Post text='Hmm... green-green grass'/>
    </div>
};

export default MyPosts;