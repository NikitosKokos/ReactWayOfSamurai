import React from 'react';
import s from './LoginForm.module.css';
import {Field, reduxForm} from 'redux-form';
import { Input } from '../../common/FormControls/FormControls';
import { required } from '../../../utils/validators/validators';

let LoginForm = (props) => {
    return (
            <form className={s.form} onSubmit={props.handleSubmit}>
                <div className={s.input}>
                    <Field 
                        type="text" 
                        name='email' 
                        component={Input} 
                        validate={[required]}
                        placeholder='Email'
                    />
                </div>
                <div className={s.input}>
                    <Field 
                        type="password" 
                        name='password' 
                        component={Input} 
                        validate={[required]}
                        placeholder='Password'
                    />
                </div>
                <div className={s.checkbox}>
                    <Field 
                        type="checkbox" 
                        id='rememberMe' 
                        name='rememberMe'  
                        component={Input}
                    />
                    <label className={s.label} htmlFor="rememberMe">remember me</label>
                </div>
                <div>
                    <button className={s.btn}><span>Login</span></button>
                </div>
            </form>
    )
}

LoginForm = reduxForm({
    form: 'login'
  })(LoginForm);

export default LoginForm;

