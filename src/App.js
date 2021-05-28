import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import {Provider} from 'react-redux';
import store from './redux/redux-store';
import Footer from './components/Footer/Footer';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = withSuspense(React.lazy(() => import('./components/Dialogs/DialogsContainer')));
const ProfileContainer = withSuspense(React.lazy(() => import('./components/Profile/ProfileContainer')));
const NewsContainer = withSuspense(React.lazy(() => import('./components/News/NewsContainer')));
const UsersContainer = withSuspense(React.lazy(() => import('./components/Users/UsersContainer')));
const Login = withSuspense(React.lazy(() => import('./components/Login/Login')));


const App = (props) => {
  React.useEffect(() => {
    props.initializeApp();
  }, []);
  if(!props.initialized){
    return <div className="center"><Preloader /></div>
  }
  return (
    <Router basename={process.env.PUBLIC_URL} >
      <div className="wrapper">
      <HeaderContainer/>
        <SidebarContainer/>
        <main className="main">
          <Route path="/profile/:userId?">
            <ProfileContainer />
          </Route>
          <Route path="/messages/:chatId?">
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
        <Footer />
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = connect(mapStateToProps, {
  initializeApp
})(App);

const MainApp = (props) => {
  return (
  <Provider store={store}>
    <AppContainer />
  </Provider>)
}

export default MainApp;