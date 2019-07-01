import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let myPostsProps = [
        {text: 'Hi', likesCount: '1', id: 1},
        {text: 'Hello, How r u?', likesCount: '21', id: 2},
        {text: 'Cool, and u??', likesCount: '11', id: 3},
        {text: 'Hmm... green-green grass', likesCount: '2', id: 4},
    ],
    dialogsData = [
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
ReactDOM.render(<App dialogsData={dialogsData} messages={messages}
                     myPostsProps={myPostsProps}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
