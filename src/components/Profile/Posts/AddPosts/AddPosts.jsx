import s from './AddPosts.module.css';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLength, required } from '../../../../utils/validators/validators';
import {Textarea} from '../../../common/FormControls/FormControls';

const maxLength10 = maxLength(10);

const AddPosts = (props) => {
    return(
        <form onSubmit={props.handleSubmit} className={s.newpost}>
            <label htmlFor='message' className={s.label}>
                Create your new post
            </label>
            <div className={s.textarea}>
                <Field 
                id='message'  
                type= 'text'
                name='profilePost'
                placeholder='Writing new post' 
                component={Textarea}
                validate={[required, maxLength10]}
                 />
            </div>
            <button
            className='btn'>
              <span>Create post</span>  
            </button>
        </form>
    );
}

export default reduxForm({form: 'profileAddPostForm'})(AddPosts);