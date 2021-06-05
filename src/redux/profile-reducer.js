import { stopSubmit } from "redux-form";
import { profileAPI, userAPI } from "../api/api";

const ADD_POST = 'profilePage/ADD-POST';
const SET_USER_PROFILE = 'profilePage/SET-USER-PROFILE';
const SET_STATUS = 'profilePage/SET-STATUS';
const DELETE_POST = 'profilePage/DELETE_POST';
const SET_LIKE_COUNT ='profilePage/SET_LIKE_COUNT';
const SET_USER_LIKE ='profilePage/SET_USER_LIKE';
const SAVE_PHOTO_SUCCESS = 'profilePage/SAVE_PHOTO_SUCCESS';
const SET_IS_OPEN_DATA = 'profilePage/SET_IS_OPEN_DATA';

let inintialState = {
    posts: [
     {id: 1, message:'hello', likeCount: 44, isUserLike: false },
     {id: 2, message:'It\'s my new blog', likeCount: 23, isUserLike: false },
     {id: 3, message:'Yo', likeCount: 31, isUserLike: false },
     {id: 4, message:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cum reprehenderit fuga at corporis a modi adipisci doloribus ullam accusamus laboriosam quasi et laborum dolore, quisquam saepe consequatur sed odio!', likeCount: 1, isUserLike: false },
   ], 
   profile: null,
   status: '',
   isOpenData: false,
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
        case SAVE_PHOTO_SUCCESS:
                return {
                    ...state,
                    profile: { ...state.profile, photos: action.photos},
                }
        case SET_IS_OPEN_DATA:
                return {
                    ...state,
                    isOpenData: action.isOpenData,
                }
        default: 
            return state;
    }
}

export const addPost = (newPostText, newPostImage) => ({ type: ADD_POST, newPostText, newPostImage });
export const deletePost = (id) => ({ type: DELETE_POST,payload: id });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setLikeCount = (id, newLikeCount) => ({ type: SET_LIKE_COUNT, id, newLikeCount });
export const setUserLike = (id, isUserLike) => ({ type: SET_USER_LIKE, id, isUserLike });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });
export const setIsOpenData = (isOpenData) => ({ type: SET_IS_OPEN_DATA, isOpenData });


export const getUserProfile = (userId) => async (dispatch) => {
    const response = await userAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
    // dispatch(setIsOpenData(false));
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

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
    if(response.data.resultCode === 0){
        dispatch(savePhotoSuccess(response.data.photos));
    }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    const response = await profileAPI.saveProfile(profile);
    if(response.data.resultCode === 0){
        dispatch(getUserProfile(userId));
        // dispatch(setIsOpenData(true));
    }else{
        const messages = response.data.messages;
        const errorMessages = messages.map((message, i) => {
            const reg = /\((.+?)\)/;
            const error = message.match(reg)[1].toLowerCase().replace('contacts->', '');
            return {[error]: `${message.replace(reg, '')} ${error}`};
        })
        dispatch(stopSubmit('editProfile', {"contacts": errorMessages[0]}));
        return Promise.reject(errorMessages[0]);
    }
};


export default profileReducer;