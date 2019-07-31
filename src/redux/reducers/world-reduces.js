const SHOW_MORE = 'SHOW_MORE',
    SET_USERS = 'SET_USERS',
    SET_PAGES_INFO = 'SET_PAGES_INFO',
    SET_PAGE = 'SET_PAGE',
    SET_PROGRESS = 'SET_PROGRESS',
    FOLLOW_UNFOLLOW = 'FOLLOW_UNFOLLOW';

const localSide = {
    totalCount: 0,
    pageSize: 5,
    currentPage: 2,
    users: [],
    inProgress: false
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
                    if (u.id === action.id) return {...u, followed: !u.followed};
                    return u;
                })
            };
        case SET_PAGE:
            return {
                ...state, currentPage: action.page
            };
        case SET_PROGRESS:
            return {
                ...state, inProgress: action.isTrue
            };
        case SET_PAGES_INFO:
            let totalCount, pageSize, users, currentPage;
            ({totalCount, pageSize, users, currentPage} = action.obj);
            return {
                ...state,
                users,
                totalCount: totalCount || state.totalCount,
                currentPage: currentPage || state.currentPage,
                pageSize: pageSize || state.pageSize
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
export const setCurrentPageAC = (page) => {
    return {type: SET_PAGE, page}
};
export const setPagesInfoAC = (obj) => {
    return {type: SET_PAGES_INFO, obj}
};
export const inProgressAC = (isTrue) => {
    return {type: SET_PROGRESS, isTrue}
};

export default worldReducer;