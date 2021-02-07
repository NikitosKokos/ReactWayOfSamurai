import React from 'react';
import s from './LoginForm.module.css';
import {Field, reduxForm} from 'redux-form';

let LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field type="text" name='login' component='input' placeholder='login'/>
                </div>
                <div>
                    <Field type="password" name='password' component='input' placeholder='password'/>
                </div>
                <div>
                    <Field type="checkbox" name='rememberMe'  component='input'/><label htmlFor="rememberMe">remember me</label>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

LoginForm = reduxForm({
    form: 'login'
  })(LoginForm);

export default LoginForm;