import React from 'react';
import {addMessageData, updateMessageData} from '../../../redux/reducers/messages-reduces';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        messageReducer: state.messageReducer,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            return dispatch(addMessageData())
        },
        updateTextArea: (text) => {
            return dispatch(updateMessageData(text))
        },
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;