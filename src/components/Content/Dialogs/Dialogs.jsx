import React from 'react';
import s from './Dialogs.module.css';
import Name from './Name/Name';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsData = [
            {id: 1, name: 'Sasha'},
            {id: 2, name: 'Sveta'},
            {id: 3, name: 'Anton'},
            {id: 4, name: 'Vetal'},
            {id: 5, name: 'Pasha'},
            {id: 6, name: 'Vova'}
        ],
        messages = [
            {id: 1, message: 'someText Hi'},
            {id: 2, message: 'someText HiHi'},
            {id: 3, message: 'someText Holllo'},
            {id: 4, message: 'someText Vetal'},
            {id: 5, message: 'someText Pasha'},
            {id: 6, message: 'someText Vova'}
        ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialog__names}>
                {props.dialogsData.map((item, i) => {
                    return <Name key={i} name={item.name} id={item.id}/>
                })}
            </div>
            <div className={s.dialog__messages}>
                   {props.messages.map((item, i) => {
                    return <Message key={i} text={item.message} id={item.id}/>
                })}
            </div>
        </div>
    )
};

export default Dialogs;