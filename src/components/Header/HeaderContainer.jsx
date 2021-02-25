import { connect } from 'react-redux';
import Header from './Header';
import React from 'react';
import {changeStateMenu} from '../../redux/sidebar-reducer';
import {changeStateBurg, logout, authUser} from '../../redux/auth-reducer';


class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.authUser();
  }


  render(){
    return <Header {...this.props} />
  }
}

  const mapStateToProps = (state) => {
      return{
        isAuth: state.auth.isAuth,
        login:  state.auth.login,
      }
  }
  


  
  export default connect(mapStateToProps, {
    authUser,
    changeStateMenu,
    changeStateBurg,
    logout
})(HeaderContainer);