import React from 'react';
import s from './Dialogs.module.css';
import Name from './Name/Name';
import Message from './Message/Message';

const Dialogs = (props) => {
    let refTextMessage = React.createRef()
    let handlerMessage = () => {
        let text = refTextMessage.current.value;
        // alert(text)
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialog__names}>
                {props.state.users.map((item, i) => {
                    return <Name key={i} state={item}/>
                })}
            </div>
            <div className={s.dialog__messages}>
                <div className={s.dialog__msgwrapper}>
                    {props.state.messages.map((item, i) => {
                        return <Message key={i} state={item}/>
                    })}
                </div>
                <div>
                    <div>
                        <textarea ref={refTextMessage}/>
                    </div>
                    <div>
                        <button onClick={handlerMessage}>PUSH ME</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;