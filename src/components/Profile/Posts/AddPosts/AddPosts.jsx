import s from './AddPosts.module.css';
import React from 'react';
import {addPostActionCreator,updateNewPostTextActionCreator} from '../../../../redux/profile-reducer'


const AddPosts = (props) => {
    const postElement = React.createRef();
    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

const onPostChange = () => {
    const text = postElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
}

    return(
        <div className={s.newpost}>
            <label for='message' className={s.label}>
                Create your new post
            </label>
            <div className={s.textarea}>
                <textarea id='message' placeholder='Writing new post' onChange={onPostChange} ref={postElement} value={props.newPostText} />
            </div>
            <button onClick={addPost} 
            className={s.btn}>
                Create post
            </button>
        </div>
    );
}

export default AddPosts;