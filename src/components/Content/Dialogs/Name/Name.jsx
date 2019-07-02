import React from 'react';
import s from './Name.module.css';
import {NavLink} from 'react-router-dom';

const Name = (props) => {
    let avaUrl = props.state.avaUrl || 'https://image.flaticon.com/icons/png/128/1876/1876695.png';
    return (
        <div className={s.name}>
            <img src={avaUrl} alt=""/>
            <NavLink activeClassName={s.picked} to={'/dialogs/' + props.state.id}>{props.state.name}</NavLink>
        </div>
    )
};

export default Name;