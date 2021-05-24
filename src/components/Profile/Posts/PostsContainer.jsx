import React from 'react';
import Posts from './Posts';
import { connect } from 'react-redux';
import {addPost, setLikeCount, setUserLike } from '../../../redux/profile-reducer';


const mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
    }
}



const PostsContainer = connect(mapStateToProps, {addPost, setLikeCount, setUserLike })(Posts);

export default PostsContainer;