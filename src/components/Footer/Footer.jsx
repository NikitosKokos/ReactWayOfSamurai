import s from './Footer.module.css'
import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = (props) => {
    return(
        <footer className={s.footer}>
            <NavLink to='/' className={s.logo}>LFJ</NavLink>
            <div className={s.by} >Made by <a className={s.author} href="https://github.com/NikitosKokos" target='_blank'>Nick</a></div>
        </footer>
    );
}

export default Footer;