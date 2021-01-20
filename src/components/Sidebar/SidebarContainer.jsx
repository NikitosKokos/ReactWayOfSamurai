import Friends from './Friends/Friends';
import {changeStateMenu} from '../../redux/sidebar-reducer';
import {changeStateBurg} from '../../redux/header-reducer';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';


const mapStateToProps = (state) => {
  return{
      active: state.sidebar.active,
      friends: state.sidebar.friends,
  }
}


const SidebarContainer = connect(mapStateToProps, {
  changeStateMenu,
  changeStateBurg,
})(Sidebar);

export default SidebarContainer;