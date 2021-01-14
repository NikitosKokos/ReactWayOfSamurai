import Dialogs from './Dialogs';
import {addMesActionCreator,updateNewMesTextActionCreator} from '../../redux/dialogs-reducer';



const DialogsContainer = (props) => {
    let state = props.store.getState();
    const onMesChange = (text) => {
        props.store.dispatch(updateNewMesTextActionCreator(text));
    }
    const addMessage = () => {
        props.store.dispatch(addMesActionCreator());
    }
    return(
        <Dialogs updateNewMesText={onMesChange} addMes={addMessage} dialogsPage={state.dialogsPage} /> 
    );
}

export default DialogsContainer;