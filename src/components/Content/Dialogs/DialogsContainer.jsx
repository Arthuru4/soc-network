import React from 'react';
import {addMessageData, updateMessageData} from '../../../redux/reducers/messages-reduces';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let addMessage = () => {
        props.dispatch(addMessageData());
    };
    let updateTextArea = (text) => {
        props.dispatch(updateMessageData(text));
    };

    return (
        <Dialogs users = {props.messagesData.users}
                 messages = {props.messagesData.messages}
                 newMessage = {props.messagesData.newMessage}
                 addMessage={addMessage}
                 updateTextArea={updateTextArea}
        />
    )
};

export default DialogsContainer;