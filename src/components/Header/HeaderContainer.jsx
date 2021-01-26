import {authUser, setAuthUserData} from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import Header from './Header';
import React from 'react';


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
})(HeaderContainer);