import { profileAPI, userAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let inintialState = {
    newPostText: '',
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
                newPostText: '',
                posts: [...state.posts,{
                    id: 5,
                    message: state.newPostText,
                    likeCount: 0,
                }]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
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

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
};
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

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
});
};

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0){
            dispatch(setStatus(status));
        }
});
};



export default profileReducer;