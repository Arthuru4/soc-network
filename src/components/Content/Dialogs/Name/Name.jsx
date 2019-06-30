import React from 'react';
import s from './Name.module.css';
import {NavLink} from 'react-router-dom';

const Name = (props) => {
    return (
        <div className={s.name}>
            <NavLink to={'/dialogs/' + props.name}>{props.name}</NavLink>
        </div>
    )
};

export default Name;