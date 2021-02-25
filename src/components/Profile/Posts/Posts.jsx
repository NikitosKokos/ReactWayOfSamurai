import AddPosts from './AddPosts/AddPosts';
import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = (props) => {
  let postsElements = props.posts.map(p => <Post  img='https://buki.com.ua/data/files/news/15542215853893.jpg' message={p.message} likeCount={p.likeCount} />)
  const onAddPost = (values) => {
    props.addPost(values.profilePost);
  }
    return(
      <>
        <AddPosts onSubmit={onAddPost} />
        <div className={s.posts}>
          {postsElements}
        </div>
      </>
    );
}

export default Posts;