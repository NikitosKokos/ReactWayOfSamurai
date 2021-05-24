import { userAPI } from '../api/api';

const CHANGE_STATE_MENU = 'CHANGE-STATE-MENU';
const SET_FRIENDS = 'SET-FRIENDS';
const TOGGLE_IS_FETCING = 'sidebar/TOGGLE-IS-FETCING';

let inintialState = {
    active: false,
    friends: [],
    pageSize: 6,
    isFetching: true,
};
export const sidebarReducer = (state = inintialState, action) => {
    switch(action.type){
        case CHANGE_STATE_MENU:
            return {
                ...state,
                active: action.payload
            }
        case SET_FRIENDS:
            return {
                ...state,
                friends: [...action.payload],
            }
        case TOGGLE_IS_FETCING:
            return {
                ...state,
                isFetching: action.payload,
            }
        default: 
            return state;
    }
}

export const changeStateMenu = (thisState) => {
    return {
        type: CHANGE_STATE_MENU,
        payload: thisState,
    }
};

export const setFriends = (friends) => {
    return {
        type: SET_FRIENDS,
        payload: friends
    }
};

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCING,
        payload: isFetching
    }
};

export const requestFriends = (pageSize) => async (dispatch) => {
    const data = await userAPI.getUsers(1,pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setFriends(data.items));
}

export default sidebarReducer;