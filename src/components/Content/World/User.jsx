import React from 'react'
import s from './World.module.css'

const User = (props) => {
    return (
        <div className={s.userWrap}>
            <div className={`${s.avaWrapper}`}>
                <img src={props.user.avaURL} alt="ava here"/>
                <button className={`${s.button} ${s.btn_follow}`}
                        onClick={props.followUnfollowAC}>{props.user.followed ? 'Follow' : 'Unfollow'}</button>
            </div>
            <div className={`${s.text_field} ${s.border_rounded}`}>
                <div className={`${s.content}}`}>
                    <div className={s.full_name}>{props.user.name}</div>
                    <div className={s.message}>{props.user.message}</div>
                </div>
                <div className={`${s.adress} ${s.right}`}>
                    <div className={``}>{props.user.country}</div>
                    <div className={``}>{props.user.city}</div>
                </div>
            </div>
        </div>
    )
};

export default User