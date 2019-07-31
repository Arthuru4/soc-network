import React from 'react'
import s from './World.module.css'

const User = (props) => {
    return (
        <div className={s.userWrap}>
            <div className={`${s.avaWrapper}`}>
                <img
                    src={props.user.photos.small || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAOVBMVEX////CwsK4uLjm5ua9vb25ubm/v7+1tbXJycnc3NzNzc319fX7+/vZ2dnS0tLExMTu7u7p6enw8PCd8Jp2AAABEklEQVQ4jc2U2ZaEIAxESUgIIBDt///YsZ1FUOP42PXG8Z4iS4lzH6XXXJ5QORLH6P/jMjEBEHN43XMSFDYhTDdcEviVSra5EgLsksUEPXYccDTBSD0Y9CFItqM+BetQI9lXT9h1rdhM0DXR3RBuNl6A/8ibMb4vJ6ENZUkmtLTmXWmKgkJ5cVNt/mLfJSOitLUuX1NagUSCGOYTGLc8iNbtU/GK7xwRHz1/cqNBOLfWAn6XqnzIUKF9gmtqeT/hmPWK+wBH4WjZ0ODWDPVzL2NuRsv+7snmQGoHvoZ/4ODYryiZJR7AKo9BazoHcLab0aEZl62Ba+DhbVmEr/rWQMdcLhEYT5IA5/wWf6G7h+rz9AWNBwmdACaWAQAAAABJRU5ErkJggg=='}
                    alt="ava here"/>
                <div>
                    <button className={`${s.button} ${s.btn_follow}`}
                            onClick={props.followUnfollowAC}>{props.user.followed ? 'Follow' : 'Unfollow'}</button>
                </div>
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