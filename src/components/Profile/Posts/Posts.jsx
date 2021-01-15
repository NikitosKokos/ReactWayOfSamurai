import AddPostsContainer from './AddPosts/AddPostsContainer';
import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = (props) => {
  let postsElements = props.posts.map(p => <Post  img='https://buki.com.ua/data/files/news/15542215853893.jpg' message={p.message} likeCount={p.likeCount} />)

    return(
      <>
        <AddPostsContainer />
        <div className={s.posts}>
          {postsElements}
        </div>
      </>
    );
}

export default Posts;