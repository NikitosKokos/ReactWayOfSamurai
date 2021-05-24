import { profileAPI, userAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE_POST';
const SET_LIKE_COUNT ='SET_LIKE_COUNT';
const SET_USER_LIKE ='SET_USER_LIKE';

let inintialState = {
    posts: [
     {id: 1, message:'hello', likeCount: 44, isUserLike: false },
     {id: 2, message:'It\'s my new blog', likeCount: 23, isUserLike: false },
     {id: 3, message:'Yo', likeCount: 31, isUserLike: false },
     {id: 4, message:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cum reprehenderit fuga at corporis a modi adipisci doloribus ullam accusamus laboriosam quasi et laborum dolore, quisquam saepe consequatur sed odio!', likeCount: 1, isUserLike: false },
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
                    id: state.posts.length + 1,
                    message: action.newPostText,
                    image: action.newPostImage ? action.newPostImage: null,
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
        case SET_LIKE_COUNT:
            return {
                ...state,
                posts: state.posts.map(p => {
                    if(p.id === action.id){
                        p.likeCount = action.newLikeCount
                    }
                    return p;
                }),
            }
        case SET_USER_LIKE:
            return {
                ...state,
                posts: state.posts.map(p => {
                    if(p.id === action.id){
                        p.isUserLike = action.isUserLike
                    }
                    return p;
                }),
            }
        default: 
            return state;
    }
}

export const addPost = (newPostText, newPostImage) => ({ type: ADD_POST, newPostText, newPostImage });
export const deletePost = (id) => ({ type: DELETE_POST,payload: id });
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile,
    }
};
export const setLikeCount = (id, newLikeCount) => ({ type: SET_LIKE_COUNT, id, newLikeCount });
export const setUserLike = (id, isUserLike) => ({ type: SET_USER_LIKE, id, isUserLike });
export const getUserProfile = (userId) => async (dispatch) => {
    const response = await userAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
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