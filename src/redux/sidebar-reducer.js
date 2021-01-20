const CHANGE_STATE_MENU = 'CHANGE-STATE-MENU';

let inintialState = {
    active: false,
    friends: [
        {id: 1, name: 'Denis', avatar: 'https://www.flaticon.com/svg/static/icons/svg/1503/1503833.svg'},
        {id: 2, name: 'Inga', avatar: 'https://www.flaticon.com/svg/static/icons/svg/1503/1503038.svg'},
        {id: 3, name: 'Mr. Gleb The Best', avatar: 'https://www.flaticon.com/svg/static/icons/svg/1503/1503238.svg'},
    ]
};
export const sidebarReducer = (state = inintialState, action) => {
    switch(action.type){
        case CHANGE_STATE_MENU:
            return {
                ...state,
                active: action.newState
            }
        default: 
            return state;
    }
}

export const changeStateMenu = (thisState) => {
    return {
        type: CHANGE_STATE_MENU,
        newState: thisState,
    }
};

export default sidebarReducer;