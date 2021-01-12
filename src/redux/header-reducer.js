const CHANGE_STATE_MENU = 'CHANGE-STATE-MENU';

export const headerReducer = (state, action) => {
    switch(action.type){
        case CHANGE_STATE_MENU:
            state.header.active = action.newState;
            state.sidebar.burgerActive = action.newState;
            return state;
        default: 
            return state;
    }
}

export const changeStateMenuActionCreator = (thisState) => {
    return {
        type: CHANGE_STATE_MENU,
        newState: thisState,
    }
};

export default headerReducer;