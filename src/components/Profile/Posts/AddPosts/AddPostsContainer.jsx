import React from 'react';
import AddPosts from './AddPosts';
import {addPost,updateNewPostText} from '../../../../redux/profile-reducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return{
        newPostText: state.profilePage.newPostText
    }
}



const AddPostsContainer = connect(mapStateToProps, {
    updateNewPostText,
    addPost,
    })(AddPosts);

export default AddPostsContainer;