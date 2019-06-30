import React from 'react';
import s from './Dialogs.module.css';
import Name from './Name/Name';
import Message from './Message/Message';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog__names}>
                <Name name='Sasha'/>
                <Name name='Sveta'/>
                <Name name='Anton'/>
                <Name name="Vetal'"/>
                <Name name='Pasha'/>
                <Name name='Vova'/>
            </div>
            <div className={s.dialog__messages}>
                <Message text='someText'/>
                <Message text='someText'/>
                <Message text='someText'/>
                <Message text='someText'/>
                <Message text='someText'/>
            </div>
        </div>
    )
};

export default Dialogs;