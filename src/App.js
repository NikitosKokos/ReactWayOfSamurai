import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App = (props) => {
  return (
    <Router>
      <div className="wrapper">
      <Header burgerActive={props.state.header.burgerActive} dispatch={props.dispatch} />
        <Sidebar state={props.state.sidebar} dispatch={props.dispatch} />
        <main className="main">
        <Switch>
          <Route path="/profile">
             <Profile state={props.state.profilePage} dispatch={props.dispatch} />
          </Route>
          <Route path="/messages">
          <Dialogs state={props.state.dialogsPage} dispatch={props.dispatch} />
          </Route>
          <Route path="/news">
           
          </Route>
          <Route path="/music">
           
          </Route>
          <Route path="/settings">
           
          </Route>
        </Switch>
        </main>
        
      </div>
    </Router>
  );
}

export default App;
