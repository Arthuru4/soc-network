import MyPosts from './MyPosts';
import {updatePostText, addPost} from '../../../../redux/reducers/profile-reduces';
import connect from 'react-redux/es/connect/connect';

let mapStateToProps = (state) => {
    return {
        profileInfo: state.profileInfo,
    }
};

const MyPostsContainer = connect(mapStateToProps, {
    updatePostText,
    addPost
})(MyPosts);

export default MyPostsContainer;