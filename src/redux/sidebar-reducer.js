import { userAPI } from '../api/api';

const CHANGE_STATE_MENU = 'CHANGE-STATE-MENU';
const SET_FRIENDS = 'SET-FRIENDS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCING = 'TOGGLE-IS-FETCING';

let inintialState = {
    active: false,
    friends: [],
    friendsCount: 3,
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
};
export const sidebarReducer = (state = inintialState, action) => {
    switch(action.type){
        case CHANGE_STATE_MENU:
            return {
                ...state,
                active: action.newState
            }
        case SET_FRIENDS:
            return {
                ...state,
                users: [state.users, ...action.payload],
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
               currentPage: action.payload,
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.payload,
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
        newState: thisState,
    }
};

export const setFriends = (friends) => {
    return {
        type: SET_FRIENDS,
        payload: friends
    }
};
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: currentPage
    }
};
export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        payload: totalUsersCount
    }
};

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCING,
        payload: isFetching
    }
};

export const requestFriends = (page,pageSize,friends,friendsCount) => {
    return (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    userAPI.getUsers(page,pageSize).then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setTotalUsersCount(data.totalCount));
        data.items.forEach(u => {
            if(u.followed && friends.length < friendsCount){
                dispatch(setFriends(friends));
            }
        });
    });
    }  
}

export default sidebarReducer;