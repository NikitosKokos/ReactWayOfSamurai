import { userAPI } from "../api/api";

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
                ...action.data,
                isAuth: true,
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

export const setAuthUserData = (id, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {id, email, login},
    }
};

export const authUser = () => (dispatch) => {
    userAPI.auth().then(response => {
        if(response.resultCode === 0){
            const {id, email, login} = response.data;
            dispatch(setAuthUserData(id, email, login));
        }
    });
}

export default authReducer;