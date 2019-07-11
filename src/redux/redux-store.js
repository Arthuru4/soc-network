import profileReducer from './reducers/profile-reduces';
import messageReducer from './reducers/messages-reduces';
import sidebarReducer from './reducers/sidebar-reduces';
import {combineReducers, createStore} from 'redux';

const reducers = combineReducers({
    profileReducer,
    messageReducer,
    sidebarReducer
});

let store = createStore(reducers);

export default store;