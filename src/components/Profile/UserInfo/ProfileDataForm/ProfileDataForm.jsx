import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../../common/FormControls/FormControls';
import s from './ProfileDataForm.module.css';

let ProfileDataForm = ({ handleSubmit }) => {
    return (
        <form  onSubmit={handleSubmit} className={s.form}>
            <div className={s.body}>
                <div className={s.item}>
                    <label className={s.label} htmlFor='fullName' >Full name</label>
                    <Field 
                        type="text" 
                        id='fullName'
                        name='fullName' 
                        component={Input} 
                        validate={[]}
                        placeholder='Full name'
                    />
                </div>
                <div className={s.item}>
                    <label className={s.label} htmlFor='aboutMe' >About me</label>
                    <Field 
                        type="text" 
                        id='aboutMe'
                        name='aboutMe' 
                        component={Input} 
                        validate={[]}
                        placeholder='About me'
                    />
                </div>
                <div className={`${s.item} ${s.item_checkbox}`}>
                    <label className={s.label} htmlFor='lookingForAJob' >Looking for a job</label>
                    <Field 
                        type="checkbox"
                        id='lookingForAJob'
                        name='lookingForAJob' 
                        component={Input} 
                        validate={[]}
                    />
                </div>
                <div className={s.item}>
                    <label className={s.label} htmlFor='lookingForAJobDescription' >Professional skills</label>
                    <Field 
                        type="text"
                        id='lookingForAJobDescription'
                        name='lookingForAJobDescription' 
                        component={Textarea} 
                        validate={[]}
                        placeholder='Professional skills'
                    />
                </div>
            </div>
            <div className={s.button}><button className='btn'><span>Save</span></button></div>
        </form>
    )
}

ProfileDataForm = reduxForm({
    form: 'editProfile'
  })(ProfileDataForm);
  
export default ProfileDataForm;