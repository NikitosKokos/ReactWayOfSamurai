import Dialogs from './Dialogs';
import {addMes,updateNewMesText} from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}


const DialogsContainer = connect(mapStateToProps, {
    updateNewMesText,
    addMes,
})(Dialogs);

export default DialogsContainer;