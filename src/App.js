import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Profile from './components/Profile/Profile';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {
  return (
    <Router>
      <div className="wrapper">
      <HeaderContainer/>
        <SidebarContainer/>
        <main className="main">
        <Switch>
          <Route path="/profile">
             <Profile />
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
        </Switch>
        </main>
        
      </div>
    </Router>
  );
}

export default App;
