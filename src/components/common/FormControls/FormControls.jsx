import React from 'react';
import { Field } from 'redux-form';
import s from './FormControls.module.css';

const FormControl = ({input, meta: { touched, error, warning }, children, ...props}) => {
    const hasError =  touched && error;
    return (
        <div className={`${s.formControl} ${ hasError ? 'error': ''}`}>
            <div className={s.textarea}>
                {children}
                <span className={s.checkebox}></span>
            </div>
            <div className={s.errors}>
               { hasError && <p className={s.error}>{error}</p>} 
            </div>
            
        </div>
    )
}

export const Textarea = (props) => {
    const {input, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}


export const createField = (placeholder, name, validators, component,type, text) => (
<div className={s.input}><Field 
    placeholder={placeholder} 
    name={name}
    validators={validators}
    component={component}
    type={type ? type : "text"}
/></div>)
