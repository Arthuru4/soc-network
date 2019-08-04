import React from 'react';
import s from './Legend.module.css';

const Legend = (props) => {
    return (
        <div className={s.wrap}>
            <div><img src="https://static.schools.by/images/header-bg/img-35.jpg" alt=""/></div>
            <div className={s.ava}>
                <img src={props.profileInfo.photos && props.profileInfo.photos.small ||
                'http://www.nasa.gov/sites/default/files/thumbnails/image/plasmatourhr_orbit1.0090.jpg'}
                     alt="ava + descriptions"/>
                <span className={s.legend}>  My Legend </span>
            </div>
        </div>
    )
};

export default Legend;