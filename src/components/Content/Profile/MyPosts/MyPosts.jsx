import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {
    let ref = React.createRef(),
        errorText = React.createRef(),
        style = s;

    let onTextChange = () => {
        if (!errorText.current.classList.contains('hidden')) errorText.current.classList.add('hidden');
        const text = ref.current.value;

        props.updatePostText(text)
    };

    let onAddPost = (e) => {
        if (props.profileReducer.newPostInfo) props.addPost();
        else {
            e.target.classList.add(style.button_red);
            e.target.disabled = true;

            errorText.current.classList.remove('hidden');

            // eslint-disable-next-line no-unused-expressions
            !function dropTarget(target) {
                setTimeout(() => {
                    target.classList.remove(style.button_red);
                    target.disabled = false
                }, 1000)
            }(e.target)
        }
    };

    return <div className={s.postHead}>
        <h3>My Posts</h3>
        <div>
            <div>
                <textarea ref={ref} onChange={onTextChange} value={props.profileReducer.newPostInfo} name="message"/>
            </div>
            <div>
                <button className={s.button} onClick={onAddPost}>Add Post</button>
                <span ref={errorText} className={`${s.error_text} hidden`}> You should type anything</span>
            </div>
        </div>
        <div className={s.posts}>
            {
                props.profileReducer.postData.map((item, i) => {
                    return <Post key={i} text={item.text} likesCount={item.likesCount}/>
                })
            }
        </div>
    </div>
};

export default MyPosts;