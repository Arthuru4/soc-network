import {addMessage, updateTextArea} from '../../../redux/reducers/messages-reduces';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        messageReducer: state.messageReducer,
    }
};

const DialogsContainer = connect(mapStateToProps, {
    addMessage,
    updateTextArea
})(Dialogs);
export default DialogsContainer;