import Dialogs from './Dialogs';
import {addMesActionCreator,updateNewMesTextActionCreator} from '../../redux/dialogs-reducer';



const DialogsContainer = (props) => {
return(<StoreContext.Consuner> {
    (store) => {
    let state = store.getState();
    const onMesChange = (text) => {
        store.dispatch(updateNewMesTextActionCreator(text));
    }
    const addMessage = () => {
        store.dispatch(addMesActionCreator());
    }
    
        
    return <Dialogs updateNewMesText={onMesChange} addMes={addMessage} dialogsPage={state.dialogsPage} />
            }
        }
        </StoreContext.Consuner> 
    );
}

export default DialogsContainer;