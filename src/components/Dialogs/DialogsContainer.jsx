import Dialogs from './Dialogs';
import {addMesActionCreator,updateNewMesTextActionCreator} from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage,

    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        updateNewMesText: (text) => {
            dispatch(updateNewMesTextActionCreator(text));
        },
        addMes: () => {
            dispatch(addMesActionCreator());
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;