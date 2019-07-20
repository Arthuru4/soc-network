import MyPosts from './MyPosts';
import {addPostData, updatePostData} from '../../../../redux/reducers/profile-reduces';
import connect from 'react-redux/es/connect/connect';

let stateToProps = (state) => {
     return {
        profileReducer: state.profileReducer,
    }
};
let dispatchToProps = (dispatch) => {
    return {
        updatePostText: (text) => {
            return dispatch(updatePostData(text))
        },
        addPost: () => {
            return dispatch(addPostData())
        },
    }
};

const MyPostsContainer = connect(stateToProps, dispatchToProps)(MyPosts);

export default MyPostsContainer;