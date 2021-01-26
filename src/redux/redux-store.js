import {applyMiddleware, combineReducers,createStore} from 'redux';
import dialogsReducer from "./dialogs-reducer";
import authReducer from "./auth-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    auth: authReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;