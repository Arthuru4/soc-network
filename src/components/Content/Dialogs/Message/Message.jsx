import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
    // let dirnCName = props.state.yours ? s.message_left : s.message_right;

    let posMessage = () => {
        if (props.state.yours) return (
            <div className={s.message_left}>
                <img
                    src="https://habrastorage.org/getpro/habr/post_images/e1a/3cf/2a8/e1a3cf2a8b65a0da69bbdd5c0ad040fe.png"
                    alt=""/>
                {props.state.message}
            </div>
        );
        else return (
            <div className={s.message_right}>
                {props.state.message}

                <img
                    src="https://habrastorage.org/getpro/habr/post_images/e1a/3cf/2a8/e1a3cf2a8b65a0da69bbdd5c0ad040fe.png"
                    alt=""/>
            </div>
        )
    };

    return (
        <div className={s.msgWraper}>
            {posMessage()}
        </div>
    )
};

export default Message;