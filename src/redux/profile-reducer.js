import { profileAPI, userAPI } from "../api/api";
import {reset} from 'redux-form';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE_POST';

let inintialState = {
    posts: [
     {id: 1, message:'hello', likeCount: 44 },
     {id: 2, message:'It\'s my new blog', likeCount: 23 },
     {id: 3, message:'Yo', likeCount: 31 },
     {id: 4, message:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cum reprehenderit fuga at corporis a modi adipisci doloribus ullam accusamus laboriosam quasi et laborum dolore, quisquam saepe consequatur sed odio!', likeCount: 1 },
   ], 
   profile: null,
   status: '',
 };
const profileReducer = (state = inintialState, action) => {
    
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts,{
                    id: 5,
                    message: action.newPostText,
                    likeCount: 0,
                }]
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.payload)
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_STATUS:
            return {
                ...state,
               status: action.status,
            }
        default: 
            return state;
    }
}

export const addPost = (newPostText) => ({ type: ADD_POST,newPostText });
export const deletePost = (id) => ({ type: DELETE_POST,payload: id });
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile,
    }
};
export const getUserProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
});
};

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status,
    }
};

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if(response.data.resultCode === 0){
        dispatch(setStatus(status));
    }
};



export default profileReducer;