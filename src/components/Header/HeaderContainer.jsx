import {setAuthUserData} from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import Header from './Header';
import * as axios from 'axios';
import React from 'react';


class HeaderContainer extends React.Component {

  componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
        withCredentials: true,
      }).then(response => {
          if(response.data.resultCode === 0){
            const {id, email, login} = response.data.data;
            this.props.setAuthUserData(id, email, login);
          }
      });
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
    setAuthUserData,
})(HeaderContainer);