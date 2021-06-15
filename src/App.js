import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux';
import { initializeApp, catchGlobalError } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import {Provider} from 'react-redux';
import store from './redux/redux-store';
import Footer from './components/Footer/Footer';
import { withSuspense } from './hoc/withSuspense';
import Page404 from './components/Page404/Page404';

const DialogsContainer = withSuspense(React.lazy(() => import('./components/Dialogs/DialogsContainer')));
const ProfileContainer = withSuspense(React.lazy(() => import('./components/Profile/ProfileContainer')));
const NewsContainer = withSuspense(React.lazy(() => import('./components/News/NewsContainer')));
const UsersContainer = withSuspense(React.lazy(() => import('./components/Users/UsersContainer')));
const Login = withSuspense(React.lazy(() => import('./components/Login/Login')));


const App = (props) => {
  
  React.useEffect(() => {
    props.initializeApp();

    const catchAllUnhandledErrors = ({promise, reason}) => {
      props.catchGlobalError(reason.toString());
    }

    window.addEventListener('unhandledrejection', catchAllUnhandledErrors);
    return () => {
      window.removeEventListener('unhandledrejection', catchAllUnhandledErrors);
    }
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
          <Switch>
            <Route exact path="/">
              <Redirect to="/profile" />
            </Route>
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
            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
        </main>
        <Footer />
        { props.globalError && <div className='globalError'>{props.globalError}</div>}
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  globalError: state.app.globalError
})

const AppContainer = connect(mapStateToProps, {
  initializeApp,
  catchGlobalError
})(App);

const MainApp = (props) => {
  return (
  <Provider store={store}>
    <AppContainer />
  </Provider>)
}

export default MainApp;