import { connect } from 'react-redux';
import Header from './Header';
import React from 'react';
import {changeStateMenu} from '../../redux/sidebar-reducer';
import {changeStateBurg, logout} from '../../redux/auth-reducer';


class HeaderContainer extends React.Component {


  render(){
    return <Header {...this.props} />
  }
}

  const mapStateToProps = (state) => {
      return{
        isAuth: state.auth.isAuth,
        login:  state.auth.login,
        burgerActive: state.sidebar.active,
      }
  }
  


  
  export default connect(mapStateToProps, {
    changeStateMenu,
    changeStateBurg,
    logout
})(HeaderContainer);