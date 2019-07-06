import React from 'react';
import s from './Dialogs.module.css';
import Name from './Name/Name';
import Message from './Message/Message';

const Dialogs = (props) => {
    let refTextMessage = React.createRef(),
        errorText = React.createRef(),
        style = s;

    let handlerMessage = (e) => {
        if (props.messagesData.newMessage) props.addMessage();
        else {
            e.target.classList.add(style.button_red);
            e.target.disabled = true;

            errorText.current.classList.remove('hidden');

            // eslint-disable-next-line no-unused-expressions
            !function dropTarget(target) {
                setTimeout(() => {
                    target.classList.remove(style.button_red);
                    target.disabled = false
                }, 1000)
            }(e.target)
        }
    };
    let onUpdateTextArea = () => {
        if (!errorText.current.classList.contains('hidden')) errorText.current.classList.add('hidden');
        let text = refTextMessage.current.value;

        props.updateMessage(text);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialog__names}>
                {props.messagesData.users.map((item, i) => {
                    return <Name key={i} state={item}/>
                })}
            </div>
            <div className={s.dialog__messages}>
                <div className={s.dialog__msgwrapper}>
                    {props.messagesData.messages.map((item, i) => {
                        return <Message key={i} state={item}/>
                    })}
                </div>
                <div>
                    <div>
                        <textarea onChange={onUpdateTextArea} ref={refTextMessage}
                                  value={props.messagesData.newMessage}/>
                    </div>
                    <div>
                        <button className={s.button} onClick={handlerMessage}>Add Message</button>
                        <span ref={errorText} className={`${s.error_text} hidden`}> You should type anything</span>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;