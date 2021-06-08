import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../redux/auth-reducer';
import s from './Login.module.css';
import LoginForm from './LoginForm/LoginForm';

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if(props.isAuth){
        return <Redirect to='/profile'/>
    }
    return (
        <div className={s.login}>
            <div className={s.wrapper}>
                <h1 className={s.title}>login</h1>
                <LoginForm captchaUrl={props.captchaUrl} onSubmit={onSubmit} />
            </div>
        </div>
    )
}

const mapStateToProps =(state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})
export default connect(mapStateToProps, {login})(Login);