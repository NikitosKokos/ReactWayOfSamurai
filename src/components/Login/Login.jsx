import React from 'react';
import s from './Login.module.css';
import LoginForm from './LoginForm/LoginForm';

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <div className={s.login}>
            <h1>login</h1>
            <LoginForm onSubmit={onSubmit} />
        </div>
    )
}


export default Login;