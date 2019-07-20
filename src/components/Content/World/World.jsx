import React from 'react'
import s from './World.module.css'
import User from './User';

const World = (props) => {
    return (
        <div className={s.worldWrapp}>
            <div className={s.title}>Users</div>
            <div className={s.users}>
                {props.worldReducer.users.map(el =>
                    <User followUnfollow={() => props.followUnfollow(el.id)} user={el} key={el.id}/>)}
            </div>
            <div className={s.center}>
                <button className={`${s.button} ${s.show_more}`} onClick={props.showMore}>SHOW MORE</button>
            </div>
        </div>
    )
};

export default World