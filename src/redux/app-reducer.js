import { authUser } from "./auth-reducer";

const SET_INITIALIZED_SUCCESS = 'app/SET_INITIALIZED_SUCCESS';
const SET_GLOBAL_ERROR = 'app/SET_GLOBAL_ERROR';

let inintialState = {
    initialized: false,
    globalError: null,
};
const appReducer = (state = inintialState, action) => {
    switch(action.type){
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        case SET_GLOBAL_ERROR:
            return {
                ...state,
                globalError: action.payload,
            }
        default: 
            return state;
    }
}

export const initializedSuccess = () => ({ type: SET_INITIALIZED_SUCCESS });
export const setGlobalError = (error) => ({ type: SET_GLOBAL_ERROR, payload: error });

export const initializeApp = () => async (dispatch) => {
    const promise = dispatch(authUser());
    const response = await Promise.all([promise]);
    dispatch(initializedSuccess());
}

export const catchGlobalError = (globalError) => (dispatch, getState) => {
    if(!getState().app.globalError){
        dispatch(setGlobalError(globalError));
        setTimeout(() => {
            dispatch(setGlobalError(null));
        }, 3000);
    }
}

export default appReducer;