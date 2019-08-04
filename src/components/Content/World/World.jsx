import s from './World.module.css';
import User from './User';
import React from 'react';
import Preloader from '../common/Preloader';

export const World = (props) => {
    let pagesCount = Math.ceil(props.worldReducer.totalCount / props.worldReducer.pageSize),
        pages = [...Array(pagesCount).keys()].map(i => i + 1);

    return (
        <div className={`${s.worldWrapp}`}>
            <Preloader inProgress={props.worldReducer.inProgress}/>
            <div className={s.title}>Users</div>
            <div className={s.pages}>
                {pages.map((el) => {
                    return (
                        <span key={el}
                              onClick={() => props.changePage(el)}
                              className={props.worldReducer.currentPage === el ? s.pages_picked : undefined}> {el}
                    </span>
                    )
                })}
            </div>
            <div className={s.users}>
                {props.worldReducer.users.map(el =>
                    <User followUnfollowAC={() => props.followUnfollowAC(el.id)} user={el} key={el.id}/>)}
            </div>
            <div className={s.center}>
                <button className={`${s.button} ${s.show_more}`} onClick={props.showMoreAC}>SHOW MORE</button>
            </div>
        </div>)
};