import React from 'react';
import { Link } from 'react-router-dom';
import s from './Page404.module.css';

const Page404 = () => {
    return (
        <div className={s.page404}>
            <div className={s.title}>
                <span>404</span> not found
            </div>
            <Link className='btn' to="/"><span>Go to home</span></Link>
        </div>
    )
}

export default Page404;
