import { userAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCING = 'TOGGLE-IS-FETCING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

let inintialState = {
    users: [], 
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingIsProgress: [],
 };
const usersReducer = (state = inintialState, action) => {
    
    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                })

               
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                })

               
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
               currentPage: action.currentPage,
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }
        case TOGGLE_IS_FETCING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingIsProgress: action.isFetching ? [...state.followingIsProgress, action.userId] 
                : state.followingIsProgress.filter(id => id !== action.userId),
            }
        default: 
            return state;
    }
}

export const acceptFollow = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
};
export const acceptUnfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
};
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
};
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
};
export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    }
};

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCING,
        isFetching
    }
};
export const toggleFollowingProgress = (isFetching,userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    }
};




export const requestUsers = (page,pageSize) => {
    return (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    userAPI.getUsers(page,pageSize).then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    });
    }  
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true,userId));
        userAPI.follow(userId).then(response => {
            if(response.resultCode === 0){
                dispatch(acceptFollow(userId));
            }
            dispatch(toggleFollowingProgress(false,userId));
        });
        
    }  
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true,userId));
        userAPI.unfollow(userId).then(response => {
            if(response.resultCode === 0){
                dispatch(acceptUnfollow(userId));
            }
            dispatch(toggleFollowingProgress(false,userId));
        });
        
    }  
}


export default usersReducer;