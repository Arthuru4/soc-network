const SHOW_MORE = 'SHOW_MORE',
    SET_USERS = 'SET_USERS',
    FOLLOW_UNFOLLOW = 'FOLLOW_UNFOLLOW';

const localSide = {
    curStep: 1,
    users: []
};
const worldReducer = (state = localSide, action) => {
    switch (action.type) {
        case SHOW_MORE:
            return {
                ...state,
                users: [...state.users],
                curStep: state.curStep + 1
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            };
        case FOLLOW_UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) return {...u, follow: !u.follow};
                    return u;
                })
            };
        default:
            return {...state}
    }
};

export const showMoreAC = () => {
    return {type: SHOW_MORE}
};

export const followUnfollowAC = (id) => {
    return {type: FOLLOW_UNFOLLOW, id}
};
export const getUsersAC = (users) => {
    return {type: SET_USERS, users}
};

export default worldReducer;
