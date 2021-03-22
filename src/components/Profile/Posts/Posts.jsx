import AddPosts from './AddPosts/AddPosts';
import Post from './Post/Post';
import React from 'react';
import s from './Posts.module.css';

const Posts = React.memo((props) => {


    const onAddPost = (values) => {
      props.addPost(values.profilePost);
    }
  
    console.log('render');
    return(
      <>
        <AddPosts onSubmit={onAddPost} />
        <div className={s.posts}>
          {props.posts.map(p => <Post key={p.id} img='https://buki.com.ua/data/files/news/15542215853893.jpg' message={p.message} likeCount={p.likeCount} />)}
        </div>
      </>
    );
})

export default Posts;