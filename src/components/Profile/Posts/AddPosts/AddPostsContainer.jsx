import React from 'react';
import AddPosts from './AddPosts';
import {addPostActionCreator,updateNewPostTextActionCreator} from '../../../../redux/profile-reducer';


const AddPostsContainer = (props) => {
    let state = props.store.getState();
    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return(
        <AddPosts updateNewPostText={onPostChange} addPost={addPost} newPostText={state.profilePage.newPostText} />
    );
}

export default AddPostsContainer;