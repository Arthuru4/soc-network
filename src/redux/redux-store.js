import profileReducer from './reducers/profile-reduces';
import messageReducer from './reducers/messages-reduces';
import sidebarReducer from './reducers/sidebar-reduces';
import {combineReducers, createStore} from 'redux';
import worldReducer from './reducers/world-reduces';

const reducers = combineReducers({
    profileInfo: profileReducer,
    messageReducer,
    worldReducer,
    sidebarReducer
});

let store = createStore(reducers);

export default store;