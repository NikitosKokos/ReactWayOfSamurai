import React from 'react'
import s from './Preloader.module.css';

const Preloader = ({ white }) => {
    return (
        <div className={`${s.preloader} ${white ? s.white : ''}`}>
            <div></div><div></div><div></div><div></div>
        </div>
    )
}

export default Preloader;
