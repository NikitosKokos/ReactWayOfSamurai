const CHANGE_STATE_BURG = 'CHANGE-STATE-BURG';

let inintialState = {
    burgerActive: false,
};
const headerReducer = (state = inintialState, action) => {
    switch(action.type){
        case CHANGE_STATE_BURG:
            return {
                ...state,
                burgerActive: action.newState,
            }
        default: 
            return state;
    }
}

export const changeStateBurg = (thisState) => {
    return {
        type: CHANGE_STATE_BURG,
        newState: thisState,
    }
};

export default headerReducer;