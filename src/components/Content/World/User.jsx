import React from 'react'
import s from './World.module.css'

const User = (props) => {

    return (
        <div className={s.userWrap}>
           <div className={`${s.avaWrapper} ${s.border}`}>
               <img src={props.user.avaURL} alt="ava here"/>
               <button className={`${s.button} ${s.btn_follow}`}>{props.user.follow ? 'Follow': "Unfollow"}</button>
           </div>
           <div className={`${s.text_field} ${s.border_rounded}`}>
               <div className={`${s.content} ${s.inline}`}>
                   <div className={s.full_name}>{props.user.fullName}</div>
                   <div className={s.message}>{props.user.message}</div>
               </div>
               <div className={`${s.adress} ${s.inline} ${s.right}`}>
                   <div className={``}>{props.user.country}</div>
                   <div className={``}>{props.user.city}</div>
               </div>
           </div>
        </div>
    )
};

export default User