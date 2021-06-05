import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../../common/FormControls/FormControls';
import s from './ProfileDataForm.module.css';

let ProfileDataForm = ({ handleSubmit,  profile, backToDefaultMode, error }) => {
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
                {Object.keys(profile.contacts).map(key => <div key={key} className={s.item}>
                    <label className={s.label} htmlFor={`contacts.${key}`} >{key}</label>
                    <Field 
                        type="text" 
                        id={`contacts.${key}`}
                        name={`contacts.${key}`} 
                        component={Input} 
                        validate={[]}
                        placeholder={key}
                    />
                </div>)}
            </div>
            {error && <div className={s.submitError}>
                {error}
            </div>}
            <div className={s.buttons}>
                <button className='btn'><span>Save</span></button>
                <div onClick={backToDefaultMode} className="btn btn_t"><span>Back</span></div>
            </div>
        </form>
    )
}

ProfileDataForm = reduxForm({
    form: 'editProfile'
  })(ProfileDataForm);
  
export default ProfileDataForm;