import { authUser } from "./auth-reducer";

const SET_INITIALIZED_SUCCESS = 'SET-INITIALIZED-SUCCESS';

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

export const initializedSuccess = () => {
    return {
        type: SET_INITIALIZED_SUCCESS,
    }
};

export const initializeApp = () => (dispatch) => {
    const promise = dispatch(authUser());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    });
    
}

export default appReducer;