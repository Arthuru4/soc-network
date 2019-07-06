import './index.css';
import {renderEntireTree} from './redux/render';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';

renderEntireTree(state);

serviceWorker.unregister();