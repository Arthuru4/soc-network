import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';

let renderEntireTree = (state) => {
    ReactDOM.render(<App
        state={state}
        addPost={store.addPost.bind(store)}
        updatePost={store.updatePost.bind(store)}
        updateMessage={store.updateMessage.bind(store)}
        addMessage={store.addMessage.bind(store)}
    />, document.getElementById('root'));
};

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

serviceWorker.unregister();