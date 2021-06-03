import { stopSubmit } from "redux-form";
import { userAPI } from "../api/api";

const CHANGE_STATE_BURG = 'auth/CHANGE_STATE_BURG';
const SET_USER_DATA = 'auth/SET_USER_DATA';

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

export const changeStateBurg = (newState) => ({ type: CHANGE_STATE_BURG, newState, });
export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: {id, email, login,isAuth}, });

export const authUser = () => async (dispatch) => {
   const response = await userAPI.auth();
    if(response.resultCode === 0){
        const {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (emain,password,rememberMe) => async (dispatch) => {
    const response = await userAPI.login(emain,password,rememberMe);
    if(response.resultCode === 0){
        dispatch(authUser());
    } else{
        let message = response.messages.length > 0 ? response.messages[0] : 'Common error';
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const logout = () => async (dispatch) => {
    const response = await userAPI.logout();
    if(response.resultCode === 0){
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;