import ReactDOM from 'react-dom';
import App from '../App';
import React from 'react';
import {addPost} from './state';
import {updatePost} from './state';

export let renderEntireTree = (state) => {
    ReactDOM.render(<App
        state={state}
        addPost={addPost}
        updatePost={updatePost}
    />, document.getElementById('root'));
};
