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
        document.querySelector('.' + s.friends).classList[command]('hidden')
        document.querySelector('.' + s.button).classList[command]('button_hidden')
        e.target.innerText = hidden ? 'Hide Nav Bar' : 'Show Nav Bar'
        hidden = !hidden
    };

    let friendsComp = (arr) => {
        return (
            <div className={s.Wrapp}>
                {arr.map(el => {
                    return (
                        <div className={s.elemFriend}>
                            {/*<div >*/}
                            <img src="https://habrastorage.org/webt/do/po/ex/dopoexqmfbzwvbyt6vlwvvaqqus.png"
                                 alt=""/>
                        </div>
                    )
                })}
                {arr.map(el => {
                    return (
                        <div className={s.elemFriend}>
                            <span className={s.textName}>{el}</span>
                        </div>
                    )
                })}
            </div>
        )
    };

    return <nav className={s.nav}>
        <div className={s.item}><NavLink activeClassName={s.picked} to="/profile">Profile</NavLink></div>
        <div className={s.item}><NavLink activeClassName={s.picked} to="/dialogs">Messages</NavLink></div>
        <div className={s.item}><NavLink activeClassName={s.picked} to="/news">News</NavLink></div>
        <div className={s.item}><NavLink activeClassName={s.picked} to="/music">Music</NavLink></div>
        <div className={`${s.item} ${s.padding}`}><NavLink activeClassName={s.picked} to="/settings">Settings</NavLink>
        </div>
        <div className={s.friends}>
            <div>Friends</div>
            {friendsComp(['Sasha', 'Alex', 'Alexandr'])}
        </div>
        <div className={`${s.button_wrapp} ${s.padding}`}>
            <button className={s.button} onClick={(e) => hideNav(e, s)}>Hide Nav Bar</button>
        </div>
    </nav>
};

export default NavBar;