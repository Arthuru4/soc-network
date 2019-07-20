const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

// const _addMessage = (_state) => {
//     if (_state.newMessage) {
//         let tempMsg = {
//             message: _state.newMessage,
//             yours: true,
//             id: _state.messages.length
//         };
//         _state.messages.push(tempMsg);
//         _state.newMessage = '';
//     }
// };

// const _updateMessage = (_state, val) => {
//     ;
// };

const localMessages = {
    users: [
        {
            id: 1,
            name: 'Sasha',
            avaUrl: 'https://lastfm-img2.akamaized.net/i/u/60x60/0d62eee9165760ee9d6b72a2782d2e87.jpg'
        },
        {
            id: 2,
            name: 'Sveta',
            avaUrl: 'https://lastfm-img2.akamaized.net/i/u/60x60/0d62eee9165760ee9d6b72a2782d2e87.jpg'
        },
        {
            id: 3,
            name: 'Anton',
            avaUrl: 'https://lastfm-img2.akamaized.net/i/u/60x60/0d62eee9165760ee9d6b72a2782d2e87.jpg'
        },
        {
            id: 4,
            name: 'Vetal',
            avaUrl: 'https://lastfm-img2.akamaized.net/i/u/60x60/0d62eee9165760ee9d6b72a2782d2e87.jpg'
        },
        {
            id: 5,
            name: 'Pasha',
            avaUrl: 'https://lastfm-img2.akamaized.net/i/u/60x60/0d62eee9165760ee9d6b72a2782d2e87.jpg'
        },
        {
            id: 6,
            name: 'Vova',
        }
        // avaUrl: 'https://lastfm-img2.akamaized.net/i/u/60x60/0d62eee9165760ee9d6b72a2782d2e87.jpg'}
    ],
    messages: [
        {id: 1, message: 'someText Hi', yours: true},
        {id: 2, message: 'someText HiHi', yours: false},
        {id: 3, message: 'someText Holllo', yours: true},
        {id: 4, message: 'someText Vetal', yours: false},
        {id: 5, message: 'someText Pasha', yours: true},
        {id: 6, message: 'someText Vova', yours: false}
    ],
    newMessage: 'it_Arthuru4'
};

const messageReducer = (state = localMessages, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            // state.messages.forEach((message, i) => _state.messages[i] = {...message});

            if (state.newMessage) {
                return {
                    ...state,
                    newMessage: '',
                    messages: [
                        ...state.messages,
                        {
                            message: state.newMessage,
                            yours: true,
                            id: state.messages.length + 1
                        }],
                }
            } else
                return state;
        case UPDATE_MESSAGE:
            return {
                ...state,
                newMessage: action.data
            };
        default:
            return state;
    }
};

export const addMessageData = () => {
    return {type: ADD_MESSAGE}
};

export const updateMessageData = (text) => {
    return {type: UPDATE_MESSAGE, data: text}
};

export default messageReducer;