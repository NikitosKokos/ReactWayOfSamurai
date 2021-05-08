import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import React from 'react';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import NewsContainer from './components/News/NewsContainer';


const App = (props) => {
  React.useEffect(() => {
    props.initializeApp();
  }, []);
  if(!props.initialized){
    return <div className="center"><Preloader /></div>
  }
  return (
    <Router>
      <div className="wrapper">
      <HeaderContainer/>
        <SidebarContainer/>
        <main className="main">
          <Route path="/profile/:userId?">
             <ProfileContainer />
          </Route>
          <Route path="/messages">
          <DialogsContainer />
          </Route>
          <Route path="/news/:page?">
           <NewsContainer />
          </Route>
          <Route path="/music">
           
          </Route>
          <Route path="/settings">
           
          </Route>
          <Route path="/users/:page?">
            <UsersContainer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </main>
        
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, {
  initializeApp
})(App);
