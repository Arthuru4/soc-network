import React from 'react'
import s from './World.module.css'
import User from './User';
import * as axios from 'axios'

const World = (props) => {
let users;
    if (!props.worldReducer.users.length) axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
        if (response.status === 200) {
            users = response.data.items;
            props.getUsersAC(users);
        }
    });

    return (
        <div className={s.worldWrapp}>
            <div className={s.title}>Users</div>
            <div className={s.users}>
                {props.worldReducer.users.map(el =>
                    <User followUnfollowAC={() => props.followUnfollowAC(el.id)} user={el} key={el.id}/>)}
            </div>
            <div className={s.center}>
                <button className={`${s.button} ${s.show_more}`} onClick={props.showMoreAC}>SHOW MORE</button>
            </div>
        </div>
    )
};

export default World