const SHOW_MORE = 'SHOW_MORE',
    FOLLOW_UNFOLLOW = 'FOLLOW_UNFOLLOW';

const localSide = {
    curStep: 1,
    users: [
        {
            id: 1,
            fullName: 'Alexandr',
            avaURL: '',
            message: 'I\'ll be a great React Developer',
            country: 'Ukraine',
            follow: true,
            city: 'Kremenchuk'
        },
        {
            id: 2,
            fullName: 'Lyudmila',
            avaURL: '',
            message: 'I\'m realy like to travel',
            country: 'Ukraine',
            follow: true,
            city: 'Kremenchuk'
        },
        {
            id: 3,
            fullName: 'Anna',
            avaURL: '',
            message: 'I\'m realy like to travel too',
            country: 'Ukraine',
            follow: true,
            city: 'Kremenchuk'
        },
        {
            id: 4,
            fullName: 'Luntik',
            avaURL: '',
            message: 'I\'m realy like to travel too',
            country: 'Ukraine',
            follow: true,
            city: 'Kremenchuk'
        },
        {
            id: 5,
            fullName: 'Alexandr',
            avaURL: '',
            message: 'I\'ll be a great React Developer',
            country: 'Ukraine',
            follow: true,
            city: 'Kremenchuk'
        },
        {
            id: 6,
            fullName: 'Lyudmila',
            avaURL: '',
            message: 'I\'m realy like to travel',
            country: 'Ukraine',
            follow: true,
            city: 'Kremenchuk'
        },
        {
            id: 7,
            fullName: 'Anna',
            avaURL: '',
            message: 'I\'m realy like to travel too',
            country: 'Ukraine',
            follow: true,
            city: 'Kremenchuk'
        },
        {
            id: 8,
            fullName: 'Luntik',
            avaURL: '',
            message: 'I\'m realy like to travel too',
            country: 'Ukraine',
            follow: false,
            city: 'Kremenchuk'
        }
    ]
};
const worldReducer = (state = localSide, action) => {
    switch (action.type) {
        case SHOW_MORE:
            return {...state, curStep: state.curStep + 1};
        case FOLLOW_UNFOLLOW:
            let _state = {...state};
            _state.users[action.id - 1].follow = !_state.users[action.id - 1].follow;

            return _state;
        default:
            return {...state}
    }
};

export const showMore = () => {
    return {type: SHOW_MORE}
};

export const followUnfollow = (id) => {
    return {type: FOLLOW_UNFOLLOW, id}
};

export default worldReducer;
