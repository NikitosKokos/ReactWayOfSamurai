import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import dialogsReducer from "./dialogs-reducer";
import authReducer from "./auth-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import appReducer from "./app-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import newsReducer from './news-reducer';

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    auth: authReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    app: appReducer,
    form: formReducer,
    newsPage: newsReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

export default store;