import s from './AddPosts.module.css';
import React from 'react';
import {addPostActionCreator,updateNewPostTextActionCreator} from '../../../../redux/profile-reducer'


const AddPosts = (props) => {
    const postElement = React.createRef();
    const onAddPost = () => {
        props.addPost();
    }

const onPostChange = () => {
    const text = postElement.current.value;
    props.updateNewPostText(text);
}

    return(
        <div className={s.newpost}>
            <label htmlFor='message' className={s.label}>
                Create your new post
            </label>
            <div className={s.textarea}>
                <textarea id='message' placeholder='Writing new post' onChange={onPostChange} ref={postElement} value={props.newPostText} />
            </div>
            <button onClick={onAddPost} 
            className={s.btn}>
              <span>Create post</span>  
            </button>
        </div>
    );
}

export default AddPosts;