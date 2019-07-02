import React from 'react';
import s from './Dialogs.module.css';
import Name from './Name/Name';
import Message from './Message/Message';

const Dialogs = (props) => {
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
            </div>
        </div>
    )
};

export default Dialogs;