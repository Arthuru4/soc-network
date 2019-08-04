const UPDATE_POST = 'UPDATE-POST';
const ADD_POST = 'ADD-POST';

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
            // state.newPostInfo.forEach((newPost, i) => _state.newPostInfo[i] = {...message});
            if (state.newPostInfo) {
                return {
                    ...state,
                    newPostInfo: '',
                    postData: [...state.postData, {
                        text: state.newPostInfo,
                        likesCount: 0,
                        id: state.postData.length + 1
                    }],
                };
            } else
                return state;
        case UPDATE_POST:
            return {
                ...state,
                newPostInfo: action.data
            };

        default:
            return state;
    }
};

export const updatePostText = (text) => {
    return {type: UPDATE_POST, data: text}
};

export const addPost = () => {
    return {type: ADD_POST}
};

export default profileReducer;