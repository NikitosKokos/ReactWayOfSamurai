import React from 'react';
import Posts from './Posts';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posts,
    }
}



const PostsContainer = connect(mapStateToProps, {})(Posts);

export default PostsContainer;