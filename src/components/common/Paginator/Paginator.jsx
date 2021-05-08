import React from 'react'
import s from './Paginator.module.css';
import { NavLink } from 'react-router-dom';


const Paginator = ({ currentPage, pageSize, totalUsersCount, onPageChanged }) => {
    
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount;i++){
        pages.push(i);
    }
    return (
        <div className={s.pagination}>
            {pages.map(p => {
                    return <NavLink to={`/users/${p}`} onClick={() => {onPageChanged(p)}} className={`${s.page} ${currentPage === p && s.selectedPage}`} key={p} >{p}</NavLink>
            })}
        </div> 
    )
}

export default Paginator;