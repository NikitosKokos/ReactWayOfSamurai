import s from './Post.module.css';

const Post = (props) => {
    return(
          <div className={s.post}>
            <div className={s.body}>
              <img className={s.avatar} src={props.img} />
              <div className={s.text}>
                {props.message}
              </div>
            </div>
            <div className={s.likes}>Likes <span>{props.likeCount}</span></div>
          </div>
    );
}

export default Post;