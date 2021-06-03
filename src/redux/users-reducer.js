import { userAPI } from '../api/api';
import { updateObjectInArray } from '../utils/objects-helpers';

const FOLLOW = 'usersPage/FOLLOW';
const UNFOLLOW = 'usersPage/UNFOLLOW';
const SET_USERS = 'usersPage/SET-USERS';
const SET_CURRENT_PAGE = 'usersPage/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'usersPage/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCING = 'usersPage/TOGGLE-IS-FETCING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'usersPage/TOGGLE-IS-FOLLOWING-PROGRESS';

let inintialState = {
    users: [], 
    pageSize: 25,
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
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
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

export const acceptFollow = (userId) => ({ type: FOLLOW, userId });
export const acceptUnfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCING, isFetching });
export const toggleFollowingProgress = (isFetching,userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });


export const requestUsers = (page,pageSize) => async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        const data = await userAPI.getUsers(page,pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true,userId));
    const response = await apiMethod(userId);
    if(response.resultCode === 0){
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false,userId));
}

export const follow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), acceptFollow);
}

export const unfollow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, userAPI.unfollow.bind(userAPI), acceptUnfollow);
}


export default usersReducer;