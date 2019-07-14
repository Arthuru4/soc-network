import React from 'react';
import Profile from './Profile/Profile';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import {Route} from 'react-router-dom';
import '../.././App.css';
import s from './Content.module.css';
import DialogsContainer from './Dialogs/DialogsContainer';

const Content = (props) => {
    return (
        <div className={'app-wrapper__content'}>
            <Route path='/dialogs' render={() =>
                <DialogsContainer
                    messagesData={props.state.messageReducer}
                    dispatch={props.dispatch}
                />}/>

            <Route path='/profile' render={() =>
                <Profile profilePage={props.state.profileReducer}
                         dispatch={props.dispatch}
                />}/>

            <Route path='/news' component={News}/>
            <Route path='/Music' component={Music}/>
            <Route path='/Settings' component={Settings}/>
        </div>
    )
};

export default Content;