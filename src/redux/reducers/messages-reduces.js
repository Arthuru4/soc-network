const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

const _addMessage = (_state) => {
    if (_state.newMessage) {
        let tempMsg = {
            message: _state.newMessage,
            yours: true,
            id: _state.messages.length
        };
        _state.messages.push(tempMsg);
        _state.newMessage = '';
    }
};

const _updateMessage = (_state, val) => {
    _state.newMessage = val;
};

const messageReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            _addMessage(state);
            break;
        case UPDATE_MESSAGE:
            _updateMessage(state, action.data);
            break;
        default:
            break;

    }

    // return state;
};

export const addMessageData = () => {
    return {type: ADD_MESSAGE}
};

export const updateMessageData = (text) => {
    return {type: UPDATE_MESSAGE, data: text}
}

export default messageReducer;