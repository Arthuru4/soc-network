import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    return <div className={s.post}>
        <img src="https://png.pngtree.com/svg/20170720/9ec3d44f9d.svg" alt=""/>
        { props.text }
        <div>
          { `Likes: ${props.likesCount}` }
        </div>
    </div>
};

export default Post;