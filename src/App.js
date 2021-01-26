import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';


const App = (props) => {
  return (
    <Router>
      <div className="wrapper">
      <HeaderContainer/>
        <SidebarContainer/>
        <main className="main">
        <Switch>
          <Route path="/profile/:userId?">
             <ProfileContainer />
          </Route>
          <Route path="/messages">
          <DialogsContainer />
          </Route>
          <Route path="/news">
           
          </Route>
          <Route path="/music">
           
          </Route>
          <Route path="/settings">
           
          </Route>
          <Route path="/users">
            <UsersContainer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        </main>
        
      </div>
    </Router>
  );
}

export default App;
