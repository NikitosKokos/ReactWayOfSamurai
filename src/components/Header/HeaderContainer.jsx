import {changeStateBurg} from '../../redux/header-reducer';
import {changeStateMenu} from '../../redux/sidebar-reducer';
import { connect } from 'react-redux';
import Header from './Header';

  // const showMenu = () => {
  //   props.dispatch(changeStateMenuActionCreator(!props.burgerActive));
  //   props.dispatch(changeStateBurgActionCreator(!props.burgerActive));
  // }


  const mapStateToProps = (state) => {
      return{
        burgerActive: state.header.burgerActive,
      }
  }
  

  const PostsContainer = connect(mapStateToProps, {
    changeStateMenu,
    changeStateBurg,
})(Header);
  
  export default PostsContainer;