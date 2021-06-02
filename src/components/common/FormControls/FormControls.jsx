import React from 'react';
import { Field } from 'redux-form';
import s from './FormControls.module.css';

const FormControl = ({input, meta: { touched, error, warning }, children, errorClass, isPass, setIsPass, isPassword, type, ...props}) => {
    const hasError =  touched && error;
    return (
        <div className={`${s.formControl} ${ hasError ? 'error': ''}`}>
            <div className={`${s.textarea} ${isPassword ? s.password : ''}`}>
                {children}
                {type === 'checkbox' && <span className={s.checkebox}></span>}
                {isPassword && <div onClick={() => setIsPass(!isPass)} className={`${s.eye} ${isPass ? '' : s.active}`}>
                <svg x="0px" y="0px"
                    viewBox="0 0 488.85 488.85">
                <g>
                    <path fill='#393e46' d="M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2
                        s178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025
                        c-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3
                        C343.725,302.225,302.225,343.725,251.125,347.025z M248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7
                        c33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z"/>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                </svg>
                </div>}
            </div>
            <div className={s.errors}>
               { hasError && <p className={`${s.error} ${errorClass ? errorClass : ''}`}>{error}</p>} 
            </div>
            
        </div>
    )
}

export const Textarea = (props) => {
    const {input, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, password, type, ...restProps} = props;
    const [isPass, setIsPass] = React.useState(password);
    // Type definition
    const inputType = isPass ? 'password' : type === 'password' ? 'text' : type;
    return <FormControl isPassword={password} type={inputType} isPass={isPass} setIsPass={setIsPass} {...props}><input type={inputType} {...input} {...restProps} /></FormControl>
}


export const createField = (placeholder, name, validators, component, type, text) => (
<div className={s.input}><Field 
    placeholder={placeholder} 
    name={name}
    validators={validators}
    component={component}
    type={type ? type : "text"}
/></div>)
