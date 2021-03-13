import { stopSubmit } from "redux-form";
import { userAPI } from "../api/api";
// import {reset} from 'redux-form';

const CHANGE_STATE_BURG = 'CHANGE-STATE-BURG';
const SET_USER_DATA = 'SET-USER-DATA';

let inintialState = {
    burgerActive: false,
    isFetching: false,
    isAuth: false,
    id: null,
    login: null,
    email: null,
};
const authReducer = (state = inintialState, action) => {
    switch(action.type){
        case CHANGE_STATE_BURG:
            return {
                ...state,
               burgerActive: action.newState,
            }
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default: 
            return state;
    }
}

export const changeStateBurg = (newState) => {
    return {
        type: CHANGE_STATE_BURG,
        newState,
    }
};

export const setAuthUserData = (id, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {id, email, login,isAuth},
    }
};

export const authUser = () => (dispatch) => {
   return userAPI.auth().then(response => {
        if(response.resultCode === 0){
            const {id, email, login} = response.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
}

export const login = (emain,password,rememberMe) => (dispatch) => {
    userAPI.login(emain,password,rememberMe).then(response => {
        if(response.resultCode === 0){
            dispatch(authUser());
        } else{
            let message = response.messages.length > 0 ? response.messages[0] : 'Common error';
            dispatch(stopSubmit("login", {_error: message}));
            // dispatch(reset('login'));
        }
    });
}

export const logout = () => (dispatch) => {
    userAPI.logout().then(response => {
        if(response.resultCode === 0){
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
}

export default authReducer;