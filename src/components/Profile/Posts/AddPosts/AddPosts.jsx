import s from './AddPosts.module.css';
import React from 'react';

const AddPosts = (props) => {
    const postElement = React.createRef();
    const addPost = () => {
        props.dispatch({
            type: 'ADD-POST',
        });
    }

const onPostChange = () => {
    const text = postElement.current.value;
    props.dispatch({
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text,
    });
}

    return(
        <div className={s.newpost}>
            <label for='message' className={s.label}>
                Create your new post
            </label>
            <div className={s.textarea}>
                <textarea id='message' onChange={onPostChange} ref={postElement} value={props.newPostText} />
            </div>
            <button onClick={addPost} 
            className={s.btn}>
                Create post
            </button>
        </div>
    );
}

export default AddPosts;