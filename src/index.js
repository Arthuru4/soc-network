import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import {addPost} from './redux/state';
import {updatePost} from './redux/state';
import {updateMessage} from './redux/state';
import {addMessage} from './redux/state';

let renderEntireTree = (state) => {
    ReactDOM.render(<App
        state={state}
        addPost={addPost}
        updatePost={updatePost}
        updateMessage={updateMessage}
        addMessage={addMessage}
    />, document.getElementById('root'));
};

renderEntireTree(state);

subscribe(renderEntireTree)

serviceWorker.unregister();