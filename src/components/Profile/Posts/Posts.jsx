import AddPosts from './AddPosts/AddPosts';
import Post from './Post/Post';
import React from 'react';
import s from './Posts.module.css';
import { reset } from 'redux-form';

const Posts = React.memo(({profile, posts, addPost, setLikeCount, setUserLike }) => {
  const [formImage, setFormImage] = React.useState(null);

    const onAddPost = (values, dispatch) => {
      console.log(values);
      addPost(values.profilePost, values.profileFile);
      dispatch(reset("profileAddPostForm"));
      setFormImage(null);
    }
    return(
      <>
        <AddPosts onSubmit={onAddPost} setFormImage={setFormImage} formImage={formImage} />
        <div className={s.posts}>
        {posts.map(p => <Post setUserLike={setUserLike} setLikeCount={setLikeCount} id={p.id} key={p.id} image={p.image} photos={profile.photos} message={p.message} likeCount={p.likeCount} isUserLike={p.isUserLike} />)}
        </div>
      </>
    );
})

export default Posts;