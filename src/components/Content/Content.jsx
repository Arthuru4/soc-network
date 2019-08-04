import React from 'react';
import Profile from './Profile/Profile';
import News from './News/News';
import Music from './Music/Music';
import WorldContainer from './World/WorldContainer';
import Settings from './Settings/Settings';
import {Route} from 'react-router-dom';
import '../../App.css';
import s from './Content.module.css';
import DialogsContainer from './Dialogs/DialogsContainer';
import ProfileContainer from './Profile/ProfileContainer';

const Content = () => {
    return (
        <div className={'app-wrapper__content'}>
            <Route path='/dialogs' render={() =>
                <DialogsContainer/>}/>

            <Route path='/profile/:userId?' render={() =>
                <ProfileContainer/>}/>

            <Route path='/news' component={News}/>
            <Route path='/Music' component={Music}/>
            <Route path='/Users' component={WorldContainer}/>
            <Route path='/Settings' component={Settings}/>
        </div>
    )
};

export default Content;