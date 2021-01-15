import React from 'react';
import Posts from './Posts';
import {addPostActionCreator,updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;