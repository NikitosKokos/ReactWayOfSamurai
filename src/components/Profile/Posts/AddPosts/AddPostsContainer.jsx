import React from 'react';
import AddPosts from './AddPosts';
import {addPostActionCreator,updateNewPostTextActionCreator} from '../../../../redux/profile-reducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return{
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const AddPostsContainer = connect(mapStateToProps, mapDispatchToProps)(AddPosts);

export default AddPostsContainer;