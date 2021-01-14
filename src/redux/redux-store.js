import {combineReducers,createStore} from 'redux';
import dialogsReducer from "./dialogs-reducer";
import headerReducer from "./header-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    header: headerReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
});
let store = createStore(reducers);

export default store;