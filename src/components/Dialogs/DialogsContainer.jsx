import Dialogs from './Dialogs';
import { addMes,setUserImage } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';




const mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage,
        isAuth: state.auth,
    }
}


export default compose(connect(mapStateToProps, {
    addMes,
}),
withAuthRedirect
)(Dialogs);
