import React from 'react';
import s from './Btn.module.css';

const Btn = ({text}) => {
    return (
        <button className={s.btn}>
            <span>{text}</span> 
        </button>
    )
}

export default Btn;