import React from 'react';
import s from './Name.module.css';
import {NavLink} from 'react-router-dom';

const Name = (props) => {
    return (
        <div className={s.name}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
};

export default Name;