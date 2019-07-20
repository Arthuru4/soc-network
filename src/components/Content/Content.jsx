import React from 'react';
import Profile from './Profile/Profile';
import News from './News/News';
import Music from './Music/Music';
import Users from './World/WorldContainer';
import Settings from './Settings/Settings';
import {Route} from 'react-router-dom';
import '../.././App.css';
import s from './Content.module.css';
import DialogsContainer from './Dialogs/DialogsContainer';

const Content = () => {
    return (
        <div className={'app-wrapper__content'}>
            <Route path='/dialogs' render={() =>
                <DialogsContainer/>}/>

            <Route path='/profile' render={() =>
                <Profile/>}/>

            <Route path='/news' component={News}/>
            <Route path='/Music' component={Music}/>
            <Route path='/Users' component={Users}/>
            <Route path='/Settings' component={Settings}/>
        </div>
    )
};

export default Content;