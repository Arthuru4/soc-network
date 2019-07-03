import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    let hidden = false
    let hideNav = (e, s) => {
        let command = hidden ? 'remove' : 'add',
            links = Array.from(document.querySelectorAll('.' + s.item))
        links.forEach(link => {
            link.classList[command]('hidden')
        });

        document.querySelector('.' + s.button_wrapp).classList[command](s.button_left)
        document.querySelector('.app-wrapper').classList[command]('nav_hidden')

        hidden = !hidden
    };

    return <nav className={s.nav}>
        <div className={s.item}><NavLink activeClassName={s.picked} to="/profile">Profile</NavLink></div>
        <div className={s.item}><NavLink activeClassName={s.picked} to="/dialogs">Messages</NavLink></div>
        <div className={s.item}><NavLink activeClassName={s.picked} to="/news">News</NavLink></div>
        <div className={s.item}><NavLink activeClassName={s.picked} to="/music">Music</NavLink></div>
        <div className={s.item}><NavLink activeClassName={s.picked} to="/settings">Settings</NavLink></div>
        <div className={s.button_wrapp}>
            <button className={s.button} onClick={(e) => hideNav(e, s)}/>
        </div>
    </nav>
};

export default NavBar;