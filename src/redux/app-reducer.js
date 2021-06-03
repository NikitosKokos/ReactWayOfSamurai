import { authUser } from "./auth-reducer";

const SET_INITIALIZED_SUCCESS = 'app/SET_INITIALIZED_SUCCESS';

let inintialState = {
    initialized: false,
};
const appReducer = (state = inintialState, action) => {
    switch(action.type){
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default: 
            return state;
    }
}

export const initializedSuccess = () => ({ type: SET_INITIALIZED_SUCCESS });

export const initializeApp = () => async (dispatch) => {
    const promise = dispatch(authUser());
    const response = await Promise.all([promise]);
    dispatch(initializedSuccess());
}

export default appReducer;