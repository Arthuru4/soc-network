const UPDATE_POST = 'UPDATE-POST';
const ADD_POST = 'ADD-POST';

const _addPost = (_state) => {
    if (_state.newPostInfo) {
        const tempPost = {
            text: _state.newPostInfo,
            likesCount: 0,
            id: _state.postData.length
        };

        _state.postData.push(tempPost);
        _state.newPostInfo = '';
    }
};

const _updatePost = (_state, val) => {
    _state.newPostInfo = val;
};

const localProfile = {
            postData: [
                {text: 'Hi', likesCount: '1', id: 1},
                {text: 'Hello, How r u?', likesCount: '21', id: 2},
                {text: 'Cool, and u??', likesCount: '11', id: 3},
                {text: 'Hmm... green-green grass', likesCount: '2', id: 4},
            ],
            newPostInfo: 'it-kamasutra.com'
        };

const profileReducer = (state = localProfile, action) => {
    switch (action.type) {
        case ADD_POST:
            _addPost(state);
            break;
        case UPDATE_POST:
            _updatePost(state, action.data);
            break;
        default:
           break;
    }

    return state;
};

export const updatePostData = (text) => {
    return {type: UPDATE_POST, data: text}
};

export const addPostData = () => {
    return {type: ADD_POST}
};

export default profileReducer;