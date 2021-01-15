import Friends from './Friends/Friends';
import {changeStateMenuActionCreator} from '../../redux/sidebar-reducer';
import {changeStateBurgActionCreator} from '../../redux/header-reducer';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';


const mapStateToProps = (state) => {
  return{
      active: state.sidebar.active,
      friends: state.sidebar.friends,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    changeStateMenu: (newState) => {
      dispatch(changeStateMenuActionCreator(newState));
  },
  changeStateBurg: (newState) => {
    dispatch(changeStateBurgActionCreator(newState));
},
}
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;