import {changeStateBurgActionCreator} from '../../redux/header-reducer';
import {changeStateMenuActionCreator} from '../../redux/sidebar-reducer';
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
  
  const mapDispatchToProps = (dispatch) => {
      return{
        changeStateMenu: (newState) => {
          dispatch(changeStateMenuActionCreator(newState))
        },
        changeStateBurg: (newState) => {
          dispatch(changeStateBurgActionCreator(newState))
        }
  }
}

  const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
  
  export default PostsContainer;