import React from 'react';
import Dialogs from './Dialogs/Dialogs';
import Profile from './Profile/Profile';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import {Route} from 'react-router-dom';
import '../.././App.css';
import s from "./Content.module.css";

const Content = (props) => {
        let dialogsData = [
            {id: 1, name: 'Sasha'},
            {id: 2, name: 'Sveta'},
            {id: 3, name: 'Anton'},
            {id: 4, name: 'Vetal'},
            {id: 5, name: 'Pasha'},
            {id: 6, name: 'Vova'}
        ],
        messages = [
            {id: 1, message: 'someText Hi'},
            {id: 2, message: 'someText HiHi'},
            {id: 3, message: 'someText Holllo'},
            {id: 4, message: 'someText Vetal'},
            {id: 5, message: 'someText Pasha'},
            {id: 6, message: 'someText Vova'}
        ];

    return (
        <div className={'app-wrapper__content'}>
            <Route path='/dialogs' render={() => <Dialogs dialogsData={dialogsData} messages={messages} />} />
            <Route path='/profile' component={Profile}/>
            <Route path='/news' component={News}/>
            <Route path='/Music' component={Music}/>
            <Route path='/Settings' component={Settings}/>
        </div>
    )
};

export default Content;