import React from 'react';
import Dialogs from './Dialogs/Dialogs';
import Profile from './Profile/Profile';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import {Route} from 'react-router-dom';
import '../.././App.css';
import s from './Content.module.css';

const Content = (props) => {
    return (
        <div className={'app-wrapper__content'}>
            <Route path='/dialogs' render={() => <Dialogs dialogsData={props.dialogsData} messages={props.messages}/>}/>
            <Route path='/profile' render={() => <Profile myPostsProps={props.myPostsProps}/>}/>
            <Route path='/news' component={News}/>
            <Route path='/Music' component={Music}/>
            <Route path='/Settings' component={Settings}/>
        </div>
    )
};

export default Content;