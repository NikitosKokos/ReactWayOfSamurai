import Friends from './Friends/Friends';
import {changeStateMenu} from '../../redux/sidebar-reducer';
import {changeStateBurg} from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';


const mapStateToProps = (state) => {
  return{
      active: state.sidebar.active,
      friends: state.sidebar.friends,
      isAuth: state.auth.isAuth,
  }
}


const SidebarContainer = connect(mapStateToProps, {
  changeStateMenu,
  changeStateBurg,
})(Sidebar);

export default SidebarContainer;