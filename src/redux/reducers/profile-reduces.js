const UPDATE_POST = 'UPDATE-POST';
const ADD_POST = 'ADD-POST';
const SET_PROFILE_INFO = 'SET_PROFILE_INFO';

const localProfile = {
    profile: {},
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
        case SET_PROFILE_INFO:
            return {
                ...state,
                profile: {...action.profile}
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
export const setProfileInfo = (profile) => {
    return {type: SET_PROFILE_INFO, profile}
};

export default profileReducer;