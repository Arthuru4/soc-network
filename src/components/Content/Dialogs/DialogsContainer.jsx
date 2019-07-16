import React from 'react';
import {addMessageData, updateMessageData} from '../../../redux/reducers/messages-reduces';
import Dialogs from './Dialogs';
import {ReactReduxContext} from 'react-redux';

const DialogsContainer = () => {
    return (
        <ReactReduxContext.Consumer>
            {
                stor => {
                    const store = stor.store,
                        addMessage = () => {
                            store.dispatch(addMessageData());
                        },
                        updateTextArea = (text) => {
                            store.dispatch(updateMessageData(text));
                        };

                    return <Dialogs users={store.getState().messageReducer.users}
                                    messages={store.getState().messageReducer.messages}
                                    newMessage={store.getState().messageReducer.newMessage}
                                    addMessage={addMessage}
                                    updateTextArea={updateTextArea}
                    />
                }
            }
        </ReactReduxContext.Consumer>
    )
};

export default DialogsContainer;