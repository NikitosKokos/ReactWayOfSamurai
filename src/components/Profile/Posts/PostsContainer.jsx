import React from 'react';
import Posts from './Posts';
import { connect } from 'react-redux';
import {addPost} from '../../../redux/profile-reducer';


const mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posts,
    }
}



const PostsContainer = connect(mapStateToProps, {addPost})(Posts);

export default PostsContainer;