import ReactDOM from 'react-dom';
import App from '../App';
import React from 'react';
import {addPost} from './state';
import {updatePost} from './state';
import {updateMessage} from './state';
import {addMessage} from './state';

export let renderEntireTree = (state) => {
    ReactDOM.render(<App
        state={state}
        addPost={addPost}
        updatePost={updatePost}
        updateMessage={updateMessage}
        addMessage={addMessage}
    />, document.getElementById('root'));
};
