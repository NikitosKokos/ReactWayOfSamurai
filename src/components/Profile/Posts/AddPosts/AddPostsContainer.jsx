import React from 'react';
import AddPosts from './AddPosts';
import {addPostActionCreator,updateNewPostTextActionCreator} from '../../../../redux/profile-reducer';


const AddPostsContainer = (props) => {
return(
    <StoreContext.Consumer> {
    (store) => {
    const addPost = () => {
        store.dispatch(addPostActionCreator());
    }

    const onPostChange = (text) => {
        store.dispatch(updateNewPostTextActionCreator(text));
    }

    
    return <AddPosts updateNewPostText={onPostChange} addPost={addPost} newPostText={store.getState().profilePage.newPostText} />    
            }
            
       } </StoreContext.Consumer>
    );
}

export default AddPostsContainer;