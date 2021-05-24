import s from './AddPosts.module.css';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLength, required } from '../../../../utils/validators/validators';
import {Textarea} from '../../../common/FormControls/FormControls';

const maxLength1000 = maxLength(1000);
const adaptFileEventToValue = (delegate, setFormImage) => e => {
    delegate(e.target.files[0]);
    setFormImage(e.target.files[0]);
};

const FileInput = ({ 
    input: { value: omitValue, onChange, onBlur, ...inputProps }, 
    meta: omitMeta, setFormImage,
    ...props 
  }) => {
    return (
      <input
        onChange={adaptFileEventToValue(onChange, setFormImage)}
        onBlur={adaptFileEventToValue(onBlur, setFormImage)}
        type="file"
        {...props.input}
        {...props}
      />
    );
  };
  

const AddPosts = ({ handleSubmit, formImage, setFormImage }) => {
    
    
    return(
        <form onSubmit={handleSubmit} className={s.newpost}>
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
                validate={[required, maxLength1000]}
                 />
            </div>
            <div className={s.buttons}>
                <button
                    className='btn'>
                    <span>Create post</span>  
                </button>
                <Field 
                    className={s.input} 
                    name={"profileFile"}
                    component={FileInput}
                    id="image"
                    accept='.jpg, .png, .jpeg'
                    setFormImage={setFormImage}
                />
                <label
                    htmlFor='image'
                    className='btn btn_t'>
                    <span>Choose image</span>  
                </label>
                {formImage &&
                <div className={s.details} >
                    {formImage.name} - {(formImage.size / 1024000).toFixed(2)}MB
                </div>}
            </div>
        </form>
    );
}

export default reduxForm({form: 'profileAddPostForm'})(AddPosts);